import React, { Component } from "react";
import axios from 'axios';
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Input, FormBtn } from "../Form";

class LOGCard extends Component {
  state = {
    profile: [],
		userName: "",
		password: "",
		loggedin:false  
	};

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value

		})
	}

	handleFormSubmit = (event) => {
		//alert('A list was submitted: ' + this.state.formvalue);
		event.preventDefault();
		// const { history } = this.props;

	  
		axios.post("/api/users",
		{
			userName:this.state.userName,
			password:this.state.password
		})
		.then((res) => {
			console.log('res is ', typeof res.data)
			if (res.data !== ""){
				console.log('success!')
				
				// <Redirect to="/Home" />
				this.props.routeHome();
                this.setState({ loggedin:true });
			}
			else {
				alert("please enter a correct username/password")
			}
			});
		}
	render() {
		return (
			<Card id="logCard">
				<CardBody>
					<CardTitle>
						<Row>
							<Col size="md-6">
								<h1> This will be the Log In page</h1>
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