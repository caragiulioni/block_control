// Gatsby supports TypeScript natively!
import React from "react"
import {Link } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import Sitenav from "../components/sitenav"
import Form from "../components/form"
import Links from "../components/links"
import Sitefooter from "../components/sitefooter"

const Contact = ({ data }) => {
	return (
		<div>
			<SEO title="Connect" />
			<PageHeader />
			<div className="connectPage pageMargin wrapper">
				<Form />
				<Links />
			</div>
			<Sitefooter />
		</div>
		);
};

export default Contact
