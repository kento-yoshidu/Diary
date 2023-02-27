import styles from "styles/posts.module.css"
import Link from "next/link";

import type { Post } from "@/types/types";

type Props = {
  posts: Post[]
}

export default function Posts({ posts }: Props) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
