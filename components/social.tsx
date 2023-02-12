
import styles from "@/styles/social.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookF,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { icon } from "@fortawesome/fontawesome-svg-core"
import { CSSProperties } from "react"

type Props = {
  iconSize: string
}

export default function Social({ iconSize = "initial" }: Props) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize } as CSSProperties}>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>

      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>

      <li>
        <a href="https://github.com/kento-yoshidu">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}
