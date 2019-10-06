import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Col, Row } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import CreatePCard from "../components/CreatePCard";
// include TextArea above if a large input field is needed


class CreateUser extends Component {

	render() {
		return (
			<div>
				<Header></Header>
				<Wrapper>
<<<<<<< HEAD
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
=======
				<Container>
					<Col>
					<Row>
						<CreatePCard>
							
						</CreatePCard>

					</Row>
					</Col>	
>>>>>>> 8e1aa6285aa15c62b2c99d2af399500a7f84b2cb

					</Container>
				</Wrapper>
			</div>
		);
	}
}

export default CreateUser;