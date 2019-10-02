import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Col, Row } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import LOGCard from "../components/LOGCard";


class Login extends Component {

	render() {
		return (
			<div>
				<Header></Header>
				<Wrapper>
					<Container>
					<Col>
					<Row>
						<LOGCard>
							
						</LOGCard>

					</Row>
					</Col>	

					</Container>
				</Wrapper>
			</div>

		);
	}
}

export default Login;