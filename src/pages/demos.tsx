// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Demo from "../components/demo"
import PageHeader from "../components/pageheader"
import Sitenav from "../components/sitenav"
import Sitefooter from "../components/sitefooter"



const demos = ({ data }) => {
	return (
		<div>
			<SEO title="Demos" />
			<PageHeader />
			<div className="pageMargin">
				<Demo />
				<Sitenav />
				<Sitefooter />
			</div>
		</div>
		);
};

export default demos

