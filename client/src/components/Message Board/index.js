import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { FormBtn, Input, TextArea } from "../Form";
import "./style.css";
import axios from 'axios';

class MessageCards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			author: "",
			subject: "",
			newMessage: "",
			messages: [],


		};
	}

	componentDidMount() {
		axios.get("/api/messages")
			.then((res) => {
				// console.log(users)
				console.log("request sent")
				console.log(res.data);
				this.setState({
					messages: res.data
				})
			});
	}
	handleNewMessage = event => {
		// event.preventDefault();
		console.log("clicked")
		axios.post("/api/createMessage",
			{
				message: this.state.newMessage,
				author: this.state.author,
				subject: this.state.subject
			})
			.then((res) => {
				console.log("new Message created")
				this.setState({
					newMessage: "",
					author: "",
					subject: "",
				})
			})
	}
	//https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
	//Check the above link to continue?

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<Card id="messCard">
				<CardTitle>
					<h4> Message Board </h4>
				</CardTitle>
				<CardBody>
					<Table hover responsive="sm">
						{/* <thead>
                            <tr>
                                <th>Created on</th>
                                <th>Author</th>
                                <th>subject</th>
                                <th>Message</th>
                            </tr>
                        </thead> */}

						
						{this.state.messages.map(messages =>

						<Card>
						<tbody key ={messages.id}>
                        
								{/* <tr>{this.state.messages.id} */}
								{/* <th>Date Due</th> */}
								<tr><th>Created on</th><td>{messages.createdAt}</td></tr>
                                <tr><th>Author</th><td>{messages.author}</td></tr>
                                <tr><th>Subject</th><td>{messages.subject}</td></tr>
								{/* <td>{messages.deadline}</td> */}
								<tr><th>Message</th><td>{messages.message}</td></tr>
						</tbody>
						</Card>
						)}	

					</Table>
                    <Input
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        name="author"
                        placeholder="Author (Optional)"
						/>
                    <Input
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                        name="subject"
                        placeholder="Subject (Optional)"
                    />
					 <Input
						value={this.state.newMessage}
						onChange={this.handleInputChange}
						name="newMessage"
						placeholder="Write a message to your team (Optional)"
					/>
					
					<FormBtn 
						enabled={!(this.state.message)}
						onClick={this.handleNewMessage}
					> Add a new Message</FormBtn>
				</CardBody>
			</Card>
		);
	}
}

export default MessageCards;