import React from "react"

import Header from "../header/header.js"
import Footer from "../footer/footer.js"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
