import * as React from "react"

import * as Styles from "./GlobalNav.module.scss"

const GlobalNav = () => (
  <nav className={Styles.globalNav}>
    <ul className={Styles.siteNav}>
      <li className={Styles.navItem}><a href="#intro">What's potsunen47?</a></li>
      <li className={Styles.navItem}><a href="#newRelease">New Release</a></li>
      <li className={Styles.navItem}><a href="#contents">Contents</a></li>
      <li className={Styles.navItem}><a href="#member">Member</a></li>
    </ul>

    {/*
    <input type="checkbox" className={Styles.check} id="checked" />
    <label className={Styles.menuBtn} htmlFor="checked">
      <span className={`${Styles.bar} ${Styles.barTop}`}></span>
      <span className={`${Styles.bar} ${Styles.barMiddle}`}></span>
      <span className={`${Styles.bar} ${Styles.barBottom}`}></span>
    </label>

    <label htmlFor="checked"></label>
    <nav className={Styles.drawerMenu}>
      <ul className={Styles.drawerList}>
        <li className={Styles.drawerItem}>Navi</li>
        <li className={Styles.drawerItem}><a href="#" className={Styles.drawerLink}>TOP</a></li>
        <li className={Styles.drawerItem}><a href="#intro" className={Styles.drawerLink}>What's potsunen47?</a></li>
      </ul>
    </nav>
    */}
  </nav>
)

export default GlobalNav
