import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row/";
import Col from "../components/Col/";
import Wrapper from "../components/Wrapper/";
//import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    profile: [],
		userName: "",
		password: "",  
    };

  handleBtnClick = event => {
  }

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
						</Row>

              </Container>
              </Wrapper>
          </div>

      );
  }
}
  
    export default Login;