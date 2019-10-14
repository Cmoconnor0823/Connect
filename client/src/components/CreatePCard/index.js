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
		position:"",
		admin: "",
	};
	//do we need to add a second state for the password retype?
	// also does it need a post request or a if "retype-password" is = to password then poast
	// if else append an error "password doesn't match" to the page


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
							type ="password"
							placeholder="Password (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="retypePassword"
							placeholder="Retype Your Password (required)"
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
							value={this.state.position}
							onChange={this.handleInputChange}
							name="position"
							placeholder="Job Position (required)"
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
							{/* The below button needs to check for any altered state in the form not just the userName and Password */}
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