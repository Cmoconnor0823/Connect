import React, { Component } from "react";
//import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import "./style.css";

class AboutCard extends Component {

	state = {

	};


	// state = {
	// 	books: []
	//   };

	//   componentDidMount() {
	// 	this.loadBooks();
	//   }

	//   loadBooks = () => {
	// 	API.getBooks()
	// 	  .then(res => this.setState({ books: res.data }))
	// 	  .catch(err => console.log(err));
	//   };

	render() {
		return (
			<Card id="aboutCard">
				<CardTitle>
					<h4> This will be the card that Tell the story and About of our app </h4>
				</CardTitle>
				<CardBody>
					<h1> Here is where we should tell what the app is designed to do</h1>
					<h3>Here is where we tell the app's story</h3>
					<h6>Here is where we list features to come</h6>
					
				</CardBody>
				<CardFooter></CardFooter>
			</Card>
		);
	}
}

export default AboutCard;