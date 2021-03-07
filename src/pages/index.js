import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Sitemain from "../components/sitemain"
import Sitefooter from "../components/sitefooter"

const IndexPage = ({ data }) => {
	return (
		<Layout>
		    <SEO title="Main" keywords={[`cara giulioni`, `toronto`, `web development`, `react`, `vue.js`, `javascript`]} />
		    <Header />
		    <Sitemain className="wrapper" />
			<Sitefooter />
		</Layout>
		)

};

export default IndexPage;
