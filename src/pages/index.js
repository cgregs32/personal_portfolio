import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingBackground from "../components/landing"
import CoolCard from "../components/coolCard"
import AltLanding from "../components/altLanding"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <AltLanding /> */}
    <LandingBackground />
  </Layout>
)

export default IndexPage
