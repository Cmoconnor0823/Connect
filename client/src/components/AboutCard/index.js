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
					<h4> This will be the card that Tell the story and About of our app </h4>
				</CardTitle>
				<CardBody>
					<h2> Konnectd is an application to manage and organize projects of all types and scopes. Complete with messaging, Google Calendar integration, and more!</h2>
					<br></br>
					<h3> We are commited to giving back to the open source community! Because of this Konnectd is free for small groups and avaiable for larger groups for a fee.</h3>
					<br></br>
					<h6> Konnectd was built to fill a need we saw in our own project managment needs and we wanted to provide a all in one </h6>
					
				</CardBody>
				<CardFooter>
					Questions, Comments, Concerns? Contact us @ konnectd123@gmail.com
				</CardFooter>
			</Card>
		);
	}
}

export default AboutCard;