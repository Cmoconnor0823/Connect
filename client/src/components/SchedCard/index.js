import React, { Component } from "react";

import { Container, Col, Row } from "reactstrap";
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
			<Container>
				<div className="card m-2 p-3">
					<div className="card-header">
						<Row>
							<Col size="md-6">
								<h1> This will be the card that holds our scheduler</h1>
							</Col>
						</Row>
					</div>
				</div>
			</Container>
		);
	}
}

export default SchedCard;