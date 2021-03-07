// Gatsby supports TypeScript natively!
import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import PageHeader from "../components/pageheader"
import Sitenav from "../components/sitenav"
import Videoplayer from "../components/videoplayer"
import Musicplayer from "../components/musicplayer"
import Sitefooter from "../components/sitefooter"
import "../components/layout.css"



const Photos = ({ data }) => {
	return (
		<div className="">
		<SEO title="Media" />
			<PageHeader />
			<div className="wrapper">
				<Musicplayer />
				<Videoplayer />
				<Gallery />
				<Sitenav />
			</div>
			<Sitefooter />
		</div>
		)

};

export default Photos;






