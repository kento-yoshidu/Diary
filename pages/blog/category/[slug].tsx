import { getAllCategories } from "@/lib/api"
import { GetStaticPropsContext } from "next"

import Container from "@/components/container"
import PostHeader from "@/components/postHeader"

export default function Category({ name }: { name: string }) {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: ["/blog/category/OUJ"],
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const catSlug = context?.params?.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug )

  return {
    props: {
      name: cat.name
    }
  }
}
