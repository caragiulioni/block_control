import React from "react";
import Sitenavpage from "../components/sitenavpage"
import "./pageheader.css";

const PageHeader = () => (
	<div className="pageHeaderMain">
		<header className="pageHeader">
			<div className="pageContainer">
				<div className="pageLogo">
					<div className="link"><a href="/"><h1><span>BLOCKCONTROL</span></h1></a></div>
					<p><span>Online Home for Cara Giulioni</span></p>
		 	</div>
			</div>
		</header>
  	<div className="siteNavPage"><Sitenavpage /></div>
 	</div>
)

export default PageHeader

