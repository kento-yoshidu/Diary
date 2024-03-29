import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

import { getAllSlug, getPostBySlug } from "@/lib/api"
import { extractText } from "@/lib/extract"
import { eyecatchLocal } from "@/lib/constants"
import { prevNextPost } from "@/lib/prev-next-post"

import Container from "@/components/container"
import PostHeader from "@/components/postHeader"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import PostBody from "@/components/post-body"
import ConvertBody from "@/components/convert-body"
import PostCategories from "@/components/post-categories"
import Meta from "@/components/meta"
import Pagination from "@/components/pagination"

import type { AllCategories, Category } from "@/types/types"

type Props = {
  title: string
  publish: string
  content: string
  eyecatch: {
    url: string
    width: number
    height: number
    blurDataURL: string
  }
  categories: Category[]
  description: string
  prevPost: {
    title: string
    slug: string
  },
  nextPost: {
    title: string
    slug: string
  }
}

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost
}: Props) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader
          title={title}
          subtitle="Blog Article"
          publish={publish}
        />

        <figure style={{ position: "relative", width: "60vw", height: "400px" }}>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            fill
            style={{
              objectFit: "cover"
            }}
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>

          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={prevPost.slug}
          nextText={nextPost.title}
          nextUrl={nextPost.slug}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs: AllCategories[] = await getAllSlug()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}/`),
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlug()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost
    }
  }
}
