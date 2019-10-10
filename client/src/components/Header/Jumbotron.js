import React from "react";
import image from "../../assets/img/logoclearbackground.png";

import { Jumbotron, Container, Col, Row } from "reactstrap";
import './style.css';

const Jumbo = (props) => {
	return (
		<Jumbotron>
			<Row>
			{/*  Try applying this to the image
			"backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' */}
				<Col size="3">
					<img src={image} alt="Logo" ></img>
				</Col>
				<Col size="9">
					<Container>
						<h3 className="text-center p-5">Welcome To KonnectD, a Bussiness Management Tool for Scheduling and employee records.</h3>
					</Container>
				</Col>
			</Row>
		</Jumbotron>
	);
};

export default Jumbo;