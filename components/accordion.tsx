import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"
import styles from "styles/accordion.module.css"

type Props = {
  heading: string
  children: ReactNode
}

export default function Accordion({ heading, children }: Props) {
  return (
    <div className={styles.open}>
      <h3 className={styles.heading}>
        <button>
          {heading}

          <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
        </button>
      </h3>

      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
