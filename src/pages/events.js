import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from '../components/events'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Events/>
  </Layout>
)

export default SecondPage