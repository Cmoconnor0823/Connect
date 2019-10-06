import React, { Component } from "react";
import {  Card, CardTitle, CardBody } from "reactstrap";
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
			<Card id="toDoCard"> 		
				<CardTitle>
					<h4> This will be the card that holds our to do </h4>
				</CardTitle>
				<CardBody> 
					
					This is the body of the card  
					(it appears like we loose 3 columns if the cards are not big enough to justify 3 rows)
					 Integer pellentesque, diam vitae blandit congue, 
					mi lacus rutrum lacus, sed convallis ante enim vitae magna. Nulla finibus erat nisi, eget accumsan ex congue vitae.
					 Duis vel molestie odio, vitae laoreet magna. Ut finibus mauris non dui feugiat volutpat. 
					 In consectetur ipsum sed ultricies porttitor. Ut feugiat feugiat nulla, vehicula pulvinar mi finibus at. </CardBody>
			</Card>
		);
	}
}

export default ToDoCard;