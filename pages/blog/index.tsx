import { getAllPosts } from "@/lib/api"

import Hero from "@/components/hero"
import Container from "@/components/container"
import Posts from "@/components/posts"

import type { Post } from "@/types/types"

type Props = {
  posts: Post[]
}

export default function Blog({ posts }: Props) {
  console.log(posts)

  return (
    <Container>
      <Hero
        title="Blog"
        subtitle="Recent Posts"
      />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts() 

  return {
    props: {
      posts: posts
    }
  }
}
