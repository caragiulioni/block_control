import React from "react"
import Sitenav from '../components/sitenav'
import "../fonts/fonts.css"
import "./header.css"
import "./sitenav.css"

const Header = () => (
<div>
  <header className="">
 	<div className="logo">
	 		<div className="container" aria-hidden="true">
	  			<div aria-hidden="true" className="glitch" data-text="BLOCKCONTROL"><span>BLOCKCONTROL</span></div>
	  			<div aria-hidden="true" className="glow">BLOCKCONTROL</div>
	  			<div aria-hidden="true" className="headerInfo">
					<h2><span>Online home for Cara Giulioni</span></h2>	
			 		<p><span>Full-Stack Web Development</span></p>
			 		<div className="visual"><p><span>Visual and Auditory Arts</span></p></div>
					 <div className="visual"><p><span>www.blockcontrol.ca</span></p></div>
	 			</div>
 	 		</div>

 	 		<div className="offscreen"> 
				<h1>Welcome to Block Control</h1>
				<h2>Online home for Cara Giulioni</h2>
			 	<p>Front-End Web Development</p>
			 	<p>Visual and Auditory Arts</p>
 	 		</div>
  			<div aria-hidden="true" className="scanlines"></div>
 	</div>
 	   	<div className="navPosition"><Sitenav/></div>
  </header>
 </div>
)


export default Header

