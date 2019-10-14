import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { FormBtn, Input, TextArea } from "../Form";
import "./style.css";
import axios from 'axios';

class ToDoCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todos:[],
			newTodo:"",
			deadline:""
			};
		}
	
		componentDidMount() {
			axios.get("/api/todos")
			.then((res) => {
				// console.log(users)
				this.setState({
					todos:res.data
				})
			});
			}
		handleNewTodo = event => {
			// event.preventDefault();
			// console.log("clicked")
			axios.post("/api/createTodo",
			{
				post: this.state.newTodo,
				deadline: this.state.deadline
			})
			.then((res)=> {
				console.log("new Todo created")
				this.setState({
					newTodo:"",
					deadline:""
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
			<Card id="toDoCard">
				<CardTitle>
					<h4> This will be the card that holds our to do </h4>
				</CardTitle>
				<CardBody>
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>#</th>
								{/* <th>deadline</th> */}
								<th>Task</th>
								
							</tr>
						</thead>
						<tbody>
						
								{/* {this.state.todos.id} */}
								{/* <th>Date Due</th> */}
								{this.state.todos.map(todos =>
								<tr key ={todos.id}>
								<td>{todos.id}</td>
								<td>{todos.deadline}</td>
								<td>{todos.post}</td>
								</tr>
							
						)}	

							
					
						</tbody>
					</Table>
					 <Input
						value={this.state.newTodo}
						onChange={this.handleInputChange}
						name="newTodo"
						placeholder="Add a item to your ToDo list (Optional)"
					/>
					<Input
							value={this.state.deadline}
							onChange={this.handleInputChange}
							name="deadline"
							placeholder="deadline (optional)"
						/>
					<FormBtn 
						enabled={!(this.state.toDo)}
						onClick={this.handleNewTodo}
						> Add to your To Do's</FormBtn>
				</CardBody>
			</Card>
		);
	}
}

export default ToDoCard;