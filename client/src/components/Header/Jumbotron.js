import React from "react";
import image from "./jumbo-pic.jpg";

function Jumbotron({ children }) {
	return (
		<div
			style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
			className="jumbotron">
				<img className ="jumbo-pic" src={image}></img>
			 Welcome To KonnectD, a Bussiness Management Tool for Scheduling and employee records.
			{children}
		</div>
	);
}

export default Jumbotron;