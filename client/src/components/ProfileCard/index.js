import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { FormBtn, DeleteBtn, TextArea } from "../Form";
import "./style.css";
import axios from 'axios';

class ProfileCard extends Component {
	constructor(props) {
        super(props)
		this.state = {
		users:[]
		};
	}

	componentDidMount() {
		console.log("clicked")
		axios.get("/api/getprofiles")
		// {users:this.state.users}
		
		.then((res) => {
			// console.log(users)
			console.log(res.data[0].firstName);
			this.setState({
				users:res.data
			})
		});
		}
		
	render() {
		return (
			<Card id="profileCard">
				<CardTitle>
					<h4> Project Member's Contact Info </h4>
				</CardTitle>
				<CardBody>
					This is the body of the card
					(it appears like we loose 3 columns if the cards are not big enough to justify 3 rows)
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Job Position</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
						{this.state.users.map(member =>
							<tr key ={member.id}>
								<td>{member.firstName}  {member.lastName} </td>
								<td>{member.email}</td>
								<td>{member.phoneNumber}</td>
								<td>{member.position}</td>
								<td><a>Edit</a>|<a>Delete</a></td>
							</tr>
						)}	
						</tbody>
					</Table>
					<FormBtn 
						onClick={this.handleClick}
						> Click me to display all profiles in the projects
					</FormBtn>
				</CardBody>
			</Card>
		);
	};
};

export default ProfileCard;