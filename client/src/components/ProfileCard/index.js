import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table, Button, Form } from "reactstrap";
import { Input} from "../Form";
import "./style.css";
import Modal from 'react-modal';
import axios from 'axios';

class ProfileCard extends Component {
	constructor(props) {
        super(props)
		this.state = {
		users:[],
		modalIsOpen: false,
		name:'',
		email:'',
		phoneNumber:'',
		msg:'',
		id:0
		}
		this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.handleEdit = this.handleEdit.bind(this); // Function where we submit data
	}
	openModal(member) {
        this.setState({
            modalIsOpen: true,
            name: member.name,
            email: member.email,
			id: member.id,
			phoneNumber: member.phoneNumber
        });
	}
	closeModal(){
		this.setState({
			modalIsOpen: false
		})
	}
	logChange(e) {
        this.setState({
            [e.target.name]: e.target.value //setting value edited by the admin in state.
        });
	}
	handleEdit(event) {
		event.preventDefault();
		axios.put("/api/edit/:id", 
		{
			name: this.state.name,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
			id: this.state.id
		})
		.then((res) => {
			console.log("profile edited")
			console.log(res.data)
		})
		
	}
	// handleDelete(member) {
	// 	axios.delete("/api/delete/:id",{
	// 		id:member.id
	// 	})
	// .then((res) => {
	// 	console.log("deleted")
	// })
	// }
	handleDelete(member) {
		var data = {
			id: member.id
		}
		fetch("/delete/", {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		}).then(function(response) {
			if (response.status >= 400) {
			  throw new Error("Bad response from server");
			}
			return response.json();
		}).then(function(data) {
			if(data === "success"){
			   this.setState({msg: "User has been deleted."});  
			}
		}).catch(function(err) {
			console.log(err)
		});
	}

	

	componentDidMount() {
	
		axios.get("/api/getprofiles")
		// {users:this.state.users}
		
		.then((res) => {
		
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
					<Table onChange = {this.logChange} hover responsive="sm" >
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
								<td>
									{/* <a onClick={() => this.openModal(member)}>Edit</a> */}
									<a onClick={() => this.handleDelete(member)}>Delete</a>
								</td>
							</tr>
						)}	
						{/* /* Modal to open editor */ }
						<Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal" >
                        <Form>
                            <label>Name</label>
                            <Input onChange={this.logChange} className="form-control" value={this.state.name} placeholder='John' name='name' />
                            <label>Email</label>
                            <Input onChange={this.logChange} className="form-control" value={this.state.email} placeholder='email@email.com' name='email'/>
							<label>Email</label>
                            <Input onChange={this.logChange} className="form-control" value={this.state.phoneNumber} placeholder='867-5309' name='phoneNumber'/>
                            <div className="submit-section">
                            <Button onClick = {this.handleEdit}   className="btn btn-uth-submit">Submit</Button>
							<Button onClick = {this.closeModal} className="btn btn-uth-cancelModal">cancel</Button>
                            </div>
                        </Form>
                        </Modal>
						</tbody>
					</Table>
					{/* <FormBtn 
						onClick={this.handleClick}
						> Click me to display all profiles in the projects
					</FormBtn> */}
				</CardBody>
			</Card>
		);
	};
};
export default ProfileCard;