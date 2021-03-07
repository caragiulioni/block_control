// Gatsby supports TypeScript natively!
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import PageHeader from "../components/pageheader"
import Successelement from "../components/successelement"
import Sitefooter from "../components/sitefooter"
import SEO from "../components/seo"
import "../components/pageheader.css"
import "../components/layout.css"


const Success = ({ data }) => {
	return (
		<Layout>
			<SEO title="Success" />
			<PageHeader />
			<div className="pageMargin">
			<Successelement />
			</ div>
			<Sitefooter />
		</Layout>
		)

};

export default Success;






