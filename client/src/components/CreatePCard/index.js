import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import "./style.css";

class CreatePCard extends Component {

	state = {
		profile: [],
		userName: "",
		password: "",
		firstName: "",
		lastName: "",
		admin: "",
	};
	handleBtnClick = event => {
	}
	// // When the component mounts, load all profiles and save them to this.state.profile
	// 	componentDidMount() {
	// 	this.loadProfile();
	// }
	// Handles updating component state when the user
	// types into the input field
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleCheckBoxChange = event => {
		const { admin } = event.target;
		this.setState({
			[admin]: "checked"
		})

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
			<Card id="cardLg">
				<CardBody>
					<CardTitle>
						<Row>
							<Col size="md-6">
								<h1> Enter your information below to create an account</h1>
							</Col>
						</Row>
					</CardTitle>
					<form>
						<Input
							value={this.state.userName}
							onChange={this.handleInputChange}
							name="userName"
							placeholder="User Name (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="password"
							placeholder="Password (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="firstName"
							placeholder="First Name (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="lastName"
							placeholder="Last Name (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="posistion"
							placeholder="Job Posistion (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="phoneNumber"
							placeholder="Phone Number (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="email"
							placeholder="Email address (required)"
						/>
						<div className="card-footer">
							Check the box below if your account needs admin status
						<Input
								type="checkbox"
								id="admin"
								name="Admin"
								value="false"
							/>
						</div>
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
							Log-In
              					</FormBtn>
					</form>
				</CardBody>
			</Card>
		);
	}
}

export default CreatePCard;