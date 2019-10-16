import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table,  } from "reactstrap";
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
			isBoardToggleOn:false
			


		};
	}
	

	boardToggle = () => {
		this.setState({
			isBoardToggleOn: !this.state.isBoardToggleOn
		});
	};

	

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
			<Card className="messCard">
				<CardTitle>
					<h4> Message Board </h4>
					<button
            className="btn m-2 cssbtn font-weight-bold"
            onClick={this.boardToggle}
          >Show/Hide Message Form</button>
				</CardTitle>
				{this.state.isBoardToggleOn &&
				<div>
				<CardBody>
						<Table hover responsive="sm" className="table-responsive">
							{/* 
						{/*This is a horizontal table that runs off the page
							<tr>
								<th>Created on</th>
								<th>Author</th>
								<th>Subject</th>
								<th>Message</th>
							</tr>
						</thead> 
						 <tbody>
							{/* <tr>{this.state.messages.id}
							{/* <th>Date Due</th> 
							{this.state.messages.map(messages =>
								<tr key={messages.id}>
									<td>{messages.createdAt}</td>
									<td>{messages.author}</td>
									<td>{messages.subject}</td>
									{/* <td>{messages.deadline}</td> 
									<td>{messages.message}</td>
								</tr>
							)}
						</tbody> */}
							{this.state.messages.map(messages =>
								
									<tbody key={messages.id}>

										{/* <tr>{this.state.messages.id} */}
										{/* <th>Date Due</th> */}
										<tr><th>Created on</th><td>{messages.createdAt}</td></tr>
										<tr><th>Author</th><td>{messages.author}</td></tr>
										<tr><th>Subject</th><td>{messages.subject}</td></tr>
										{/* <td>{messages.deadline}</td> */}
										<tr><th>Message</th><td>{messages.message}</td></tr>
									</tbody>
							
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
					<TextArea
						type="text"
						placeholder="Write a message to your team (Optional)"
						name="newMessage"
						onChange={this.handleInputChange}
						value={this.state.newMessage}
					/>
					{/* <Input
						value={this.state.newMessage}
						onChange={this.handleInputChange}
						name="newMessage"
						placeholder="Write a message to your team(Optional)"
					/> */}

					<FormBtn
						enabled={!(this.state.message)}
						onClick={this.handleNewMessage}
					> Add a new Message</FormBtn>
				</CardBody>
				</div>}

				
			</Card>
		);
	}
}

export default MessageCards;