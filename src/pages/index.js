import React from "react"
import '../styles/index.css'

import Layout from "../components/layout/layout.js"
import Main from "../components/main/main.js"
import AllSwitches from "../components/switches/switches.js"

import Card from "../components/card/card.js"

const IndexPage = () => (
  <Layout>

    <Main />

    <AllSwitches />

    <Card />

  </Layout>
)

export default IndexPage
