import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
//import { List, ListItem } from "../List";
import { Card, CardBody, CardTitle, Table, } from "reactstrap";
import "./style.css";

class MessageCard extends Component {

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
								<td>10/7/19</td>

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
							value={this.state.title}
							onChange={this.handleInputChange}
							name="messageTitle"
							placeholder="Message Title (required)"
						/>
						<TextArea
							value={this.state.message}
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
							disabled={!(this.state.title && this.state.message)}
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