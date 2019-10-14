import React, { Component } from "react";
//import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, } from "reactstrap";
import "./style.css";

class MessageCard extends Component {

	state = {

	};


	render() {
		return (
			<Card id="messCard">
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

export default MessageCard;