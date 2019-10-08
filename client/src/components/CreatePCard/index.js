import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import "./style.css";
import axios from 'axios';

// import { timingSafeEqual } from "crypto";

class CreatePCard extends Component {
	state = {
		profile: [],
		userName: "",
		password: "",
		firstName: "",
		lastName: "",
		admin: "",
	};
	handleNewUser = event => {
		event.preventDefault();
		// const { history } = this.props;
		axios.post("/api/createUser",
		{
			userName:this.state.userName,
			password:this.state.password,
			firstName:this.state.firstName,
			lastName:this.state.lastName,
			email:this.state.email,
			phoneNumber:this.state.phoneNumber,
			position:this.state.position
		})
		.then((res) => {
			console.log("user data sent!")
			alert("Account Succesfully Created")
			this.props.routeLogin();
			
			});
		}
	
	

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
							value={this.state.firstName}
							onChange={this.handleInputChange}
							name="firstName"
							placeholder="First Name (required)"
						/>
						<Input
							value={this.state.lastName}
							onChange={this.handleInputChange}
							name="lastName"
							placeholder="Last Name (required)"
						/>
						<Input
							value={this.state.posistion}
							onChange={this.handleInputChange}
							name="posistion"
							placeholder="Job Posistion (required)"
						/>
						<Input
							value={this.state.phoneNumber}
							onChange={this.handleInputChange}
							name="phoneNumber"
							placeholder="Phone Number (required)"
						/>
						<Input
							value={this.state.email}
							onChange={this.handleInputChange}
							name="email"
							placeholder="Email address (required)"
						/>
						<Input
							value={this.state.position}
							onChange={this.handleInputChange}
							name="position"
							placeholder="Job title/position (required)"
						/>
						<div className="card-footer">
							Check the box below if you want to create a new project. This will make you admin of the project.
							If you already have a project enter your project key below
						<Input
								type="checkbox"
								id="admin"
								name="Admin"
								value={this.state.admin}
							/>
							<Input
								value={this.state.projectKey}
								onChange={this.handleInputChange}
								name="projectKey"
								placeholder="Project key (required)"
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
							onClick={this.handleNewUser}
						>
							Create Account
              					</FormBtn>
					</form>
				</CardBody>
			</Card>
		);
	}
}

export default CreatePCard;