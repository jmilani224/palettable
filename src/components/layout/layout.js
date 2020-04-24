import React from "react"

import Header from "../header/header.js"
import Footer from "../footer/footer.js"

const Layout = ({ children }) => {

  return (
    <div className="main-container">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
