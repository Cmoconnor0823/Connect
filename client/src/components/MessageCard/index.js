import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, Table, } from "reactstrap";
import "./style.css";

class MessageCard extends React.Component {

	constructor (props) {
        super(props);
        this.state = {
			thisMessage: "",
			thisTitle: "",
            chatMessages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

	addMessage() {
        // This is where you would normally do a call to your server endpoint which 
        // would commit the message to a database and then return ALL messages
        let today = new Date();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let time = `${hour}:${minutes}`;
        this.state.chatMessages.push([time, "Eric", this.state.thisMessage]);
        this.setState({thisMessage: ""});
        console.log(this.state.chatMessages);
    }

    handleInputChange(event) {
        this.setState({thisMessage: event.target.value});
    }

	render() {
		return (
			<Card id="messCard">
				<CardTitle>
					<h4> This will be the card that holds Message Post Board </h4>
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
                    <DeleteBtn />
                  </ListItem> */}
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Messages</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>data={this.state.chatMessages}</td>

							</tr>
							<tr>
								<th scope="row">2</th>
								<td>10/14/19</td>

							</tr>
							<tr>
								<th scope="row">3</th>
								<td>10/16/19</td>

							</tr>
						</tbody>
					</Table>
					<form>
						<Input
							type="text"
							value={this.state.thisTitle}
							onChange={this.handleInputChange}
							name="messageTitle"
							placeholder="Message Title (required)"
						/>
						<TextArea
							value={this.state.thisMessage}
							onChange={this.handleInputChange}
							name="message"
							placeholder="Message (Optional)"
						/>
						{/* <TextArea
                					value={this.state.synopsis}
                					onChange={this.handleInputChange}
                					name="synopsis"
                					placeholder="Synopsis (Optional)"
								/> */}

						<FormBtn
							enabled={!(this.state.title && this.state.chatmessage)}
							onClick={this.handleFormSubmit}
						>
							Post Message
              					</FormBtn>
					</form>
				</CardBody>
			</Card>
		);
	}
}

export default MessageCard;