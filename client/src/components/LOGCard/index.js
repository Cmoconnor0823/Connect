import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./style.css";

class LOGCard extends Component {

	state = {
		profile: [],
		userName: "",
		password: "",
	};
	handleBtnClick = event => {
	}
	// Handles updating component state when the user
	// types into the input field
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		return (
			<Card id="logCard">
				<CardBody>
					<CardTitle>
						<h1> This will be the Log In page</h1>
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

export default LOGCard;