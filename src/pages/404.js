import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pageheader from "../components/pageheader"
import Notfound from "../components/notfound"
import Sitefooter from "../components/sitefooter"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Pageheader />
    <Notfound />
    <Sitefooter />
  </Layout>
)

export default NotFoundPage
