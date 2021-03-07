import React from "react"
import Reaudio from "./Reaudio/Reaudio.js"
import "./Reaudio/assets/styles.css"

// IMAGES
import demo1 from "../music/demo01.jpg"
import demo2 from "../music/demo02.jpg"
import demo3 from "../music/demo03.jpg"
import demo4 from "../music/demo04.jpg"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./sitemain.css"
import "./layout.css"

    const djmixes = [
        {
            id: "1",
            source: "https://storage.googleapis.com/webaudio/blockctrl_djdemo01.mp3",
            trackName: "DJ Demo 01",
            trackImage: demo1,
            description:"Thumping, bumpy 4/4 techno, then things get dark."
        },
        {
            id: "2",
            source: "https://storage.googleapis.com/webaudio/blockctrl_djdemo02.mp3",
            trackName: "DJ Demo 02",
            trackImage: demo2,
            description: "Rap, funky and half time live on Nasty.FM w/ Knife and Fork Radio"    
        },
        {
            id: '3',
            source: "https://storage.googleapis.com/webaudio/blockctrl_djdemo03.mp3",
            trackName: "Dj Demo 03",
            trackImage: demo3,
            description: "Special guest Techno mix for the Conkrete MTL family."   
        },
        {
            id: "4",
            source: "https://storage.googleapis.com/webaudio/blockctrl_djdemo03.mp3",
            trackName: "Dj Demo 04 ",
            trackImage: demo4,
            description: "Dust off your Adidas, break out the cardboard, time to Robot Rock."
        },
    ]



const Mixes = () => (
    <section id="Mixes" className="accordionContainer margin"> 
        <h3>DJ Mixes</h3>
            <Accordion allowZeroExpanded="true">
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton className="skillsButton mediaAccordionButton" alt="Skills details.">
            </AccordionItemButton>
            </AccordionItemHeading>
                <AccordionItemPanel className="mixWrapper">
                <Reaudio className="reaaudio" playlist={djmixes} />
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </section>

)

export default Mixes



// export default function Videoplayer () {



// const data = useStaticQuery(graphql`
// 		query VideoQuery{
// 		  allContentfulVideo {
// 		    edges {
// 		      node {
// 		        video {
// 		          file {
// 		            url
// 		          }
// 		          description
// 		          id
// 		        }
// 		        videoposter {
// 		          file {
// 		            url
// 		          }
// 		        }
// 		      }
// 		    }
// 		  }
// 		}
// 	`
// 	)


// 	return (

//             <section id="Sounds" className="musicPlayer">
//                 <h2>MUSIC BAND</h2>
//                 <div className="songContainer">
//                 <Reaudio className="reaaudio" playlist={playlist} />
//                     </div>
//             </section>

// 	)
// }

		




// <audio>
//   <source src="../music/blockctrl1984.mp3" type="audio/mp3" />
//   <source src="../music/blockctrl1984.ogg" type="audio/ogg" />
// </audio>