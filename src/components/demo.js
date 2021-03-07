import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./demo.css"

export default function Demo() {
  const data = useStaticQuery(graphql`
	query DemosQuery{
		allContentfulDemo {
			edges {
			  node {
			    body {
			      body
			    }
			    image {
			      file {
			        url
			      }
			      description
			    }
			    git
			    url
			    title
			    id
			  }
			}
		}
	}
  `) 

	return (
		<section className="demos wrapper">
			{data.allContentfulDemo.edges.map(({node:data}) => (
			<div className="demo-wrapper">
				<div className="h2margin headingStyle"><h2><span>{data.title}</span></h2></div>
				<div key={data.id} className="demo padding sectionMargin">
					<div className="demoContent sectionMargin">
					<img alt={data.image.description} src={data.image.file.url} />
					<p className="padding">{data.body.body}</p>
					<div className="demoButtons">
						<a href={data.git}>View on Github</a>
						{data.url && <a href={data.url}>View in Browser</a>
						}
					</div>
					</div>
				</div>
			</div>
			))}
		</section>
  )
}


