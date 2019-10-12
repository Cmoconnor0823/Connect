import React from "react";
import image from "../../assets/img/logonobackground.png";

import { Jumbotron, Col, Row } from "reactstrap";
import './style.css';

const Jumbo = (props) => {
	return (
		<Jumbotron>
			<Row>
			{/*  Try applying this to the image
			"backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' */}
				<Col>
				<h3 className="text-center p-5">
					<img src={image} className="img rounded pull-left" alt="Logo" ></img>
				
						Welcome To KonnectD, a Business Management Tool for Project Management and Records.</h3>
					
				</Col>
			</Row>
		</Jumbotron>
	);
};

export default Jumbo;