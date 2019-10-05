import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row/";
import Col from "../components/Col/";
import Wrapper from "../components/Wrapper/";
// import Footer from "../components/Footer";
import { Input, FormBtn } from "../components/Form";
import Footer from "../components/Footer/Footer";
// include TextArea above if a large input field is needed


class CreateUser extends Component {

	// Setting our component's initial state
	state = {
		profile: [],
		userName: "",
		password: "",
		realName: ""
	};

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
			<div>
				<Wrapper>
					<Header></Header>
					<Container fluid>
						<Row>
							<Col size="md-6">
								<h1> This will be the create a profile page</h1>
							</Col>
						</Row>
						<Row>
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
									value={this.state.author}
									onChange={this.handleInputChange}
									name="realName"
									placeholder="Your First and Last Name (required)"
								/>
								<Input
									value={this.state.author}
									onChange={this.handleInputChange}
									name="position"
									placeholder="Job Position (required)"
								/>
								<FormBtn
									disabled={!(this.state.userName && this.state.password)}
									onClick={this.handleFormSubmit}
								>
									Submit profile
              </FormBtn>
							</form>

						</Row>
					</Container>

				</Wrapper>
				<Footer></Footer>
			</div>
		);
	}
}

export default CreateUser;