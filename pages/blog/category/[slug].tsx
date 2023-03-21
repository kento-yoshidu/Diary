import { getAllCategories, getAllPostsByCategory } from "@/lib/api"
import { GetStaticPropsContext } from "next"

import Container from "@/components/container"
import PostHeader from "@/components/postHeader"
import { AllCategories, Post } from "@/types/types"
import Posts from "@/components/posts"
import { eyecatchLocal } from "@/lib/constants"
import { getPlaiceholder } from "plaiceholder"
import Meta from "@/components/meta"

export default function Category({ name, posts }: { name: string, posts: Post[] }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats: AllCategories[] = await getAllCategories()

  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const catSlug = context?.params?.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug )

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal
    }

    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: cat.name,
      posts: posts
    }
  }
}
