import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./style.css";

class MessageCard extends Component {

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
				<Card id="messCard">
					<CardTitle>
						<h4> This will be the card that holds Message Post Board </h4>
					</CardTitle>
					<CardBody>
						<h5>Do we want this to appear always or have it set to a trigger on off function? Also do we want to display all current messages found in this box or should it appear elsewhere?</h5>
						<h6>Enter the information below to post a message to your project</h6>
						<form>
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name="messageTitle"
								placeholder="Message Title (required)"
							/>
							<TextArea
								value={this.state.message}
								onChange={this.handleInputChange}
								name="message"
								placeholder="Message (Optional)"
							/>
							{/* <TextArea
                					value={this.state.synopsis}
                					onChange={this.handleInputChange}
                					name="synopsis"
                					placeholder="Synopsis (Optional)"
								/> */}
							
							<FormBtn
								disabled={!(this.state.userName && this.state.password)}
								onClick={this.handleFormSubmit}
							>
								Post Message
              					</FormBtn>
						</form>
					</CardBody>
				</Card>
		);
	}
}

export default MessageCard;