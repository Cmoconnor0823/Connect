import React, { Component } from "react";
//import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, } from "reactstrap";
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
					<h4> This will be the card that Welcomes the user to the site </h4>
				</CardTitle>
				<CardBody>
					{/* or maybe try
						<List>
                {this.state.books.map(message => (
                  <ListItem key={message._id}>
                    <a href={"/message/" + message._id}>
                      <strong>
                        {message.title} by {message.body}
                      </strong>
                    </a>
                  </ListItem> */}
					
					
				</CardBody>
			</Card>
		);
	}
}

export default AboutCard;