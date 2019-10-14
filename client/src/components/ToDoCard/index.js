import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { FormBtn, DeleteBtn, TextArea } from "../Form";
import "./style.css";

class ToDoCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  term: '',
		  items: []
		};
	  }
	// state changing is the "toDo" input
	handleInputChange = (event) => {
		this.setState({term: event.target.value});
	  }

	  onSubmit = (event) => {
		event.preventDefault()
		this.setState({
		  term: '',
		  items: [...this.state.items, this.state.term]
		});
	  }

		  //https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
		  //Check the above link to continue?




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
			<Card id="toDoCard">
				<CardTitle>
					<h4> This will be the card that holds our to do </h4>
				</CardTitle>
				<CardBody>
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Your To Do List</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>10/7/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
							<tr>
								<th scope="row">2</th>
								<td>10/14/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
							<tr>
								<th scope="row">3</th>
								<td>10/16/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
						</tbody>
					</Table>
					 <TextArea
						value={this.state.term}
						onChange={this.handleInputChange}
						name="toDo"
						placeholder="Add a item to your ToDo list (Optional)"
					/>
					<FormBtn 
						enabled={!(this.state.toDo)}
						onSubmit={this.handleFormSubmit}
						> Add to your To Do's</FormBtn>
				</CardBody>
			</Card>
		);
	}
}

export default ToDoCard;