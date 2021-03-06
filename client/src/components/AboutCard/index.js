import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import "./style.css";

class AboutCard extends Component {

	state = {

	};


	render() {
		return (
			<Card id="aboutCard">
				<CardTitle>
					<h2 className="storyHead"> KonnectD is a site application to manage and organize projects in house. Complete with Project Contact-Info, Google Calendar integration, Messaging and More! </h2>
				</CardTitle>
				<CardBody>
					<br></br>
					<h2 className="storyHead"> We are commited to giving back to the open source community! Because of this KonnectD is free for small groups and is available at several different pricing plans for larger projects. Contact us @ konnectd123@gmail.com for details.</h2>
					<br></br>
					<h5>Our Story</h5>
					<h6>KonnectD was built to fill a need we saw in our own project managment needs, and we wanted to provide a all in one site to be able to keep your project organized with the tools you need to succeed.</h6>
					
				</CardBody>
				<CardFooter>
					Questions, Comments, Concerns? Contact us @ konnectd123@gmail.com
				</CardFooter>
			</Card>
		);
	}
}

export default AboutCard;