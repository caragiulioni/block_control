import React from "react"
import LazyLoad from "react-lazy-load"
import { useStaticQuery, graphql } from "gatsby"
import "./header.css"
import "./gallery.css"

export default function Gallery () {
	const data = useStaticQuery(graphql`
		query GalleryQuery{
			allContentfulPhotos {
			      edges {
			        node {
			          image {
			            id
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
		<section className="">
			<div className="h2margin headingStyle"><h2><span>Photography</span></h2></div>
			<LazyLoad className="lazyload">
				<div className="photos">
					{data.allContentfulPhotos.edges.map(({node:data}) => (
					<div id="photos" className="masonry">
						{data.image.map(image => (
						<div className="brick" key={image.id} >
      						<img alt={image.description} src={image.file.url} />
      					</div>
    					))}								
					</div>
					))}
				</div>
			</LazyLoad>
		</section>
	)
}

