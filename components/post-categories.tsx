import styles from "styles/post-categories.module.css"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"

import type { Category } from "@/types/types"

type Props = {
  categories: Category[]
}

export default function PostCategories({ categories }: Props) {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Category</span>
      </h3>

      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
