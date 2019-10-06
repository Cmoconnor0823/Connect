import React from "react";
import image from "../../assets/img/logoclearbackground.png";

import { Jumbotron, Col, Row } from "reactstrap";
import './style.css';

const Jumbo = (props) => {
	return (
		<Jumbotron>
				<Row>
					<Col size="6">

			<img className="logo-pic" src={image} alt="Logo"></img>
					</Col>
				</Row>
			<Col size="6">
				 Welcome To KonnectD, a Bussiness Management Tool for Scheduling and employee records.
			</Col>
		</Jumbotron>
	);
};

export default Jumbo;