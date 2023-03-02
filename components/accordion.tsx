import { useState, useRef, CSSProperties } from "react"
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"
import styles from "styles/accordion.module.css"

type Props = {
  heading: string
  children: ReactNode
}

export default function Accordion({ heading, children }: Props) {
  const [textIsOpen, setTextIsOpen] = useState(false)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }

  const refText = useRef<HTMLDivElement>(null)

  return (
    <div className={textIsOpen ? styles.open : styles.close} data-testid="div">
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}

          <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
        </button>
      </h3>

      <div
        className={styles.text}
        ref={refText}
        style={{
          "--text-height": `${refText?.current?.scrollHeight}px`
        } as CSSProperties}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
