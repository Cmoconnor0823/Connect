import React, { Component } from "react";
//import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import "./style.css";

class AboutCard extends Component {

	state = {

	};


	render() {
		return (
			<Card id="aboutCard">
				<CardTitle>
					<h2 className="storyHead"> Konnectd is a site application to manage and organize projects in house. Complete with User Contact-Info Search, Google Calendar integration, and more! </h2>
				</CardTitle>
				<CardBody>
					<br></br>
					<h2 className="storyHead"> We are commited to giving back to the open source community! Because of this Konnectd is free for small groups and available at several different pricing plans for larger projects. Contact us @ konnectd123@gmail.com for details.</h2>
					<br></br>
					<h5>Our Story</h5>
					<h6> Konnectd was built to fill a need we saw in our own project managment needs and we wanted to provide a all in one site to be able to keep your project organized with the tools you need to suceed.</h6>
					
				</CardBody>
				<CardFooter>
					Questions, Comments, Concerns? Contact us @ konnectd123@gmail.com
				</CardFooter>
			</Card>
		);
	}
}

export default AboutCard;