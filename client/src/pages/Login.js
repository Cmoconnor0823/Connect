import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Col, Row } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import AboutCard from "../components/AboutCard";
import LOGCard from "../components/LOGCard/index.js"
// import { Input, FormBtn } from "../components/Form";
// import Footer from "../components/Footer/Footer";
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';

class Login extends Component {
	routeHome = () => {
		this.props.history.push("/home")
	}
	render() {
		return (
			<div>
				<Header></Header>
				<Wrapper>
					<Container>
						<Row>
							<Col lg="12">
								<AboutCard></AboutCard>

							</Col>
						</Row>
						<Row>
							<Col lg="12">

								<LOGCard routeHome={this.routeHome}>
								</LOGCard>
							</Col>
						</Row>

					</Container>
				</Wrapper>
			</div>
		);
	}
}

export default Login;
