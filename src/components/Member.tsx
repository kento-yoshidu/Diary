import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "../styles/member.module.scss"

const Member = () => (
  <a href="" className={Styles.member}>
    <StaticImage
      src="../images/member/member1.jpg"
      alt="oge"
      layout="fullWidth"
    />
    <div className={Styles.mask}>
      <p>nanase</p>
    </div>
  </a>
)

export default Member
