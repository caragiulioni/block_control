import { Link } from "gatsby"
import React from "react"
import "./sitenav.css"

const sitenavpage = () => (
	<div className="fadeIn mobilenav pageNav" disableInlineStyles={true}>
		<nav>
			<ul>
				<li><Link to="/">Main</Link></li>
				<li><Link to="/demos">Demos</Link></li>
				<li><Link aria-hidden ="true" to="/media">Media</Link></li>
				<li><Link to="/connect">Connect</Link></li>
			</ul>
		</nav>
	</div>
)

export default sitenavpage










