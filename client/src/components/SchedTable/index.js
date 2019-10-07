import React, { Component } from "react";
import {  Card, CardTitle, CardBody, Table } from "reactstrap";
import "./style.css";

class TableCard extends Component {

	state = {

	};


	// When the form is submitted, use the API.saveProfile?? method to save the proile data
	// Then reload profiles from the database
	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	if (this.state.userName && this.state.password) {
	// 		API.saveProfile({
	// 			userName: this.state.userName,
	// 			password: this.state.password,
	// 			realName: this.state.realName,
	// 			position: this.state.position
	// 		})
	// 			.then(res => this.loadProfile())
	// 			.catch(err => console.log(err));
	// 	}
	// };
	render() {
		return (
			<Card id="tableCard"> 		
				<CardTitle>
					<h4> This will be the card that holds the table displaying the schedule </h4>
				</CardTitle>
				<CardBody> 
				<Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>10/7/19</td>
            <td>6 pm.</td>
            <td>Check Point</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10/14/19</td>
            <td>7 pm.</td>
            <td>Demo-Day</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>10/16/19</td>
            <td>5 pm.</td>
            <td>SimpleView</td>
          </tr>
        </tbody>
      </Table>
					
				 </CardBody>
			</Card>
		);
	}
}

export default TableCard;