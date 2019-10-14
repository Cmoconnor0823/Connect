import React, { Component } from "react";
import axios from 'axios';
import { Card, CardBody, CardTitle} from "reactstrap";
import { Input, FormBtn } from "../Form";
import "./style.css";
class LOGCard extends Component {
  state = {
    profile: [],
		userName: "",
		password: "",
		loggedin:false,
		projectKey: ""
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

		axios.post("/api/login",
		{
			userName:this.state.userName,
			password:this.state.password
		})
		.then((res) => {
			console.log('res is ', typeof res.data)
			if (res.data !== ""){
				console.log(res)
				// Set the local storage item to {msg:success}
				// localStorage.setItem('loggedin', 'success');
				sessionStorage.setItem("loggedin", "success")
				console.log(sessionStorage.loggedin)
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
					<CardTitle size="md-6">
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
							type="password"
							name="password"
							placeholder="Password (required)"
						/>
						{/* <Input
								value={this.state.projectKey}
								onChange={this.handleInputChange}
								name="projectKey"
								placeholder="Project key"
							/>
						{/* <TextArea
                					value={this.state.synopsis}
                					onChange={this.handleInputChange}
                					name="synopsis"
                					placeholder="Synopsis (Optional)"
								/> */}

						<FormBtn
							enabled={!(this.state.userName && this.state.password)}
							onClick={this.handleFormSubmit}
						> 
						{/* Above needs to also handle the project key on submit*/}
							Log-In
              			</FormBtn>
					</form>

				</CardBody>
			</Card>
		);
	}
}
    
export default LOGCard;