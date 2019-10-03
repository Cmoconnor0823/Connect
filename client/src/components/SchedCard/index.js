import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import "./style.css";

class SchedCard extends Component {

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
			<Card body>
				<CardTitle>
					<h4> This will be the card that holds our Scheduler </h4>
				</CardTitle>
			</Card>
		);
	}
}

export default SchedCard;