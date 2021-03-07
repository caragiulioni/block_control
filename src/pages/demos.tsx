// Gatsby supports TypeScript natively!
import React from "react"
import SEO from "../components/seo"
import Demo from "../components/demo"
import PageHeader from "../components/pageheader"
import Sitenav from "../components/sitenav"
import Sitefooter from "../components/sitefooter"
import "./demos.css"



const demos = ({ data }) => {
	return (
		<div>
			<SEO title="Demos" />
			<PageHeader />
			<div className="pageMargin">
				<div className="gitHub">
					<a href="https://github.com/caragiulioni">
						<img aria-hidden="true" alt="Cara Giulioni on Github" src="https://storage.googleapis.com/caraimgs/gitlogo.png" />
					</a>
				</div>
				<div className="demos-container pageMargin">
					<Demo />
				</div>
				<Sitenav />
				<Sitefooter />
			</div>
		</div>
		);
};

export default demos

