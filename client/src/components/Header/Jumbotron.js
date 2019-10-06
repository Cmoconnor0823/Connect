import React from "react";
import image from "../../assets/img/logoclearbackground.png";

import { Jumbotron, Container, Col, Row } from "reactstrap";
import './style.css';

const Jumbo = (props) => {
	return (
		<Jumbotron>
				<Row>
					<Col size="4">

			<img className="logo-pic" src={image} alt="Logo"></img>
					</Col>
			<Col size="6">
				<Container>
				 <h3>Welcome To KonnectD, a Bussiness Management Tool for Scheduling and employee records.</h3>
				 </Container>
			</Col>
				</Row>
		</Jumbotron>
	);
};

export default Jumbo;