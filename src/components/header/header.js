import { Link } from "gatsby"
import React from "react"

import headerStyles from "./header.module.css"

const Header = () => {

  return (
    <header className={headerStyles.container}>
      <ul>
        <Link to='/'><li>Resources</li></Link>
        <Link to='/support'><li>Support</li></Link>
        <Link to='/contribute'><li>Contribute</li></Link>
      </ul>
    </header>
  )
}

export default Header
