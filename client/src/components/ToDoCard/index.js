import React, { Component } from "react";
import { Col, Card, CardTitle } from "reactstrap";
import "./style.css";

class ToDoCard extends Component {

	state = {

	};


	// When the form is submitted, use the API.saveProfile?? method to save the proile data
	// Then reload profiles from the database
	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	if (this.state.userName && this.state.password) {
	// 		API.saveProfile({
	// 			userName: this.state.userName,
	// 			password: this.state.password,
	// 			realName: this.state.realName,
	// 			position: this.state.position
	// 		})
	// 			.then(res => this.loadProfile())
	// 			.catch(err => console.log(err));
	// 	}
	// };
	render() {
		return (
			<Col sm="6" md="4">
			<Card body>
				<CardTitle>
					<h4> This will be the card that holds our to do </h4>
				</CardTitle>
			</Card>
			</Col>
		);
	}
}

export default ToDoCard;