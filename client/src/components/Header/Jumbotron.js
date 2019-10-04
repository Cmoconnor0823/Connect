import React from "react";
import image from "./jumbo-pic.jpg";
import { Container } from "reactstrap";
import './style.css';

function Jumbotron({ children }) {
	return (
		<Container>

		<div className="jumbotron">
				<img className ="jumbo-pic" src={image} alt="Logo"></img>
			 Welcome To KonnectD, a Bussiness Management Tool for Scheduling and employee records.
			{children}
		</div>
		</Container>
	);
}

export default Jumbotron;