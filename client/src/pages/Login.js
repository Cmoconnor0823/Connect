import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row/";
import Col from "../components/Col/";
import Wrapper from "../components/Wrapper/";
//import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
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
				// this.props.history.push('/home');
				// this.setState({ loggedin:true })
			}
			else {
				alert("please enter a correct username/password")
			}
			});
		}

	
// 		fetch('api/users', {
// 			method: 'GET',
// 			headers: {
// 			  'Accept': 'application/json',
// 			  'Content-Type': 'application/json'
// 			},
// 		   body: JSON.stringify( {
// 	   userName : this.state.userName,
// 	   Password:this.state.password,
// 	//    itemType: this.state.itemType
//    })
	//    }).then(res => res.json())
	//    .then(data => console.log(data))
	// //    .catch(err => console.log(err);
  render() {
      return (
          <div>
            <Wrapper>
            <Header></Header>
              <Container>
              	<Row>
					<Col size="md-6">
						<h1> This will be the Log In page</h1>
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
							<FormBtn
								disabled={!(this.state.userName && this.state.password)}
								onClick={this.handleFormSubmit}
							>
								Log-In
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
  
    export default Login;