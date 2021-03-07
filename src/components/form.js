import React from 'react'
import Submit from './submit'
import './form.css'
import './layout.css'

const Form = () => (
	<section className="connect wrapper">
	<div className="headingStyle "><h2><span>Connect</span></h2></div>
		<div className="formContainer">
			<form name="contactform" method="POST" data-netlify="true" action="/success">
				 <input type="hidden" name="form-name" value="contactform" />
				<div className="input"><label>Name:<input placeholder="Your name..." name="name" required /></label></div>
		  		<div className="input"><label>Your Email:<input name="email" placeholder="yourname@anymail.com" required /></label></div>
		  		<div className="input"><label>Your message:<textarea name="message" cols="45" rows="5" required placeholder="A long time ago in a galaxy far, far away..." required></textarea></label></div>
		  		<div className="button input"><Submit /></div>
			</form>
			<p>*all fields are required</p>
		</div>
	</section>
)

export default Form









