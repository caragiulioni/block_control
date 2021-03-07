import { Link } from "gatsby"
import React from "react"
import Headroom from "../../src/index.js"
import "./sitenav.css"

const sitenav = () => (
	<Headroom className="headroom fadeIn mobilenav pageNav" disableInlineStyles={true}>
		<nav>
			<ul>
				<li><Link to="/"><span>Main</span></Link></li>
				<li><Link to="/demos"><span>Demos</span></Link></li>
				<li><Link aria-hidden ="true" to="/media"><span>Media</span></Link></li>
				<li><Link to="/connect"><span>Connect</span></Link></li>
			</ul>
		</nav>
	</Headroom>
)

export default sitenav










