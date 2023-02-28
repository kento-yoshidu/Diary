import styles from "styles/posts.module.css"
import Link from "next/link"
import Image from "next/image"

import type { Post } from "@/types/types";
import { heading } from "@/styles/contact.module.css";

type Props = {
  posts: Post[]
}

export default function Posts({ posts }: Props) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        /* @ts-ignore */
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                //layout="fill"
                //objectFit="cover"
                // layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 1152px) 576px, 50vw"
                style={{
                  width: "100%",
                  height: "auto"
                }}
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
              <h2>{title}</h2>

            </figure>
          </Link>
        </article>
      ))}
    </div>
  )
}
