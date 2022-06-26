import * as React from "react"

import * as Styles from "../styles/GlobalNav.module.scss"

const GlobalNav = () => (
  <nav className={Styles.globalNav}>
    <ul className={Styles.siteNav}>
      <li className={Styles.navItem}><a href="#intro">What's potsunen47?</a></li>
      <li className={Styles.navItem}><a href="#newRelease">New Release</a></li>
      <li className={Styles.navItem}><a href="#contents">Contents</a></li>
      <li className={Styles.navItem}><a href="#member">Member</a></li>
    </ul>
  </nav>
)

export default GlobalNav
