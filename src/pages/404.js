import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Oops...You just hit a route that doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
