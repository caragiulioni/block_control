import React from "react"
import { Player } from "video-react"
import { useStaticQuery, graphql } from "gatsby"
import "./videoplayer.css"
import "../video-react.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion"
import "./sitemain.css"
import "./layout.css"



export default function Videoplayer () {
	const data = useStaticQuery(graphql`
		query VideoQuery{
		  allContentfulVideo {
		    edges {
		      node {
		        video {
		          file {
		            url
		          }
		          description
		          id
		        }
		        videoposter {
		          file {
		            url
		          }
		        }
		      }
		    }
		  }
		}
	`
	)
	return (		
	<section id="video">
	<div className="h2margin headingStyle "><h2><span>Video</span></h2></div>	
		<div className="accordionContainer margin">
		<h3>Promo Clip 01</h3>
        <Accordion allowZeroExpanded="true">
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton className="skillsButton mediaAccordionButton" alt="Skills details.">
            </AccordionItemButton>
            </AccordionItemHeading>
                <AccordionItemPanel>
					<div className="videoPlayer">
					{data.allContentfulVideo.edges.map(({node:data}) => ( 
					<Player playsInline poster={data.videoposter.file.url} key={data.video.id} src={data.video.file.url} alt={data.video.description} />
					))}
					</div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
	</section>

	)
}

		