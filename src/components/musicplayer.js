import React from "react"
import Tracks from './tracks'
import Mixes from './mixes'
import './musicplayer.css'




// import { Player } from 'video-react';
// import { useStaticQuery, graphql } from "gatsby"



const Musicplayer = () => (

			<section id="sounds" className="sectionMargin musicPlayer">
	            <div className="headingStyle "><h2><span>Sounds</span></h2></div>
		       	<Tracks />
		       	<Mixes />
			</section>
)

export default Musicplayer



// export default function Videoplayer () {



// 	// const data = useStaticQuery(graphql`
// 	// 	query VideoQuery{
// 	// 	  allContentfulVideo {
// 	// 	    edges {
// 	// 	      node {
// 	// 	        video {
// 	// 	          file {
// 	// 	            url
// 	// 	          }
// 	// 	          description
// 	// 	          id
// 	// 	        }
// 	// 	        videoposter {
// 	// 	          file {
// 	// 	            url
// 	// 	          }
// 	// 	        }
// 	// 	      }
// 	// 	    }
// 	// 	  }
// 	// 	}
// 	// `
// 	// )

// 	return (
// 			<div className="musicPlayer">
// 				<h1>MUSIC BAND</h1>
// 				<audio id="player" controls>
// 				  <source src="../block_ctrl.1984.mp3" type="audio/mp3" />
// 				</audio>
// 			</div>

// 	)
// }

// 		




{/*<audio>
  <source src="../music/blockctrl1984.mp3" type="audio/mp3" />
  <source src="../music/blockctrl1984.ogg" type="audio/ogg" />
</audio>*/}