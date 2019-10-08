import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
import { Card, CardBody, CardTitle, CardFooter, Table } from "reactstrap";
import "./style.css";

class SchedCard extends Component {

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
			<Card id="schedCard">
				<CardTitle>
					<h4> This will be the card that holds our Schedule </h4>
				</CardTitle>
				<CardBody>
					<h5>Do we want this to appear always or have it set to a trigger on off function? Also do we want to display the events found in this box or should it appear elsewhere?</h5>
					<h6>Enter the information below to create an event on google callender</h6>
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
					<form>
						<Input
							value={this.state.ueventName}
							onChange={this.handleInputChange}
							name="eventName"
							placeholder="Event Name (required)"
						/>
						<Input
							value={this.state.location}
							onChange={this.handleInputChange}
							name="location"
							placeholder="location (required)"
						/>
						<TextArea
							value={this.state.description}
							onChange={this.handleInputChange}
							name="description"
							placeholder="description (Optional)"
						/>
						<Input
							value={this.state.start}
							onChange={this.handleInputChange}
							name="eventStart"
							placeholder="Event Start Time (required)"
						/>
						<Input
							value={this.state.end}
							onChange={this.handleInputChange}
							name="eventEnd"
							placeholder="Event End Time (required)"
						/>
						<Input
							value={this.state.attendees}
							onChange={this.handleInputChange}
							name="attendees"
							placeholder="Enter the email of who you would like to invite to the event (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="email"
							placeholder="Email address (required)"
						/>
						<CardFooter>
							Check the box below if you want to create a reminder using your default prefereces below.
						<Input
								type="checkbox"
								id="remind"
								name="remind"
								value="false"
							/>
						</CardFooter>
						{/* Look into adding a way to better capure a time input for start and end time
								Create a way to input a drop down frequency reminder and a number input box or a drop down for how many times to recurre an event
								Look into how to capture more than one email for sending the event request too
								Look into how to caputure user information the overrides array 'overrides': [
     										{'method': 'email', 'minutes': 24 * 60},
      										{'method': 'popup', 'minutes': 10}
   														 ]

								 */}
						{/* <TextArea
                					value={this.state.synopsis}
                					onChange={this.handleInputChange}
                					name="synopsis"
                					placeholder="Synopsis (Optional)"
								/> */}

						<FormBtn
							disabled={!(this.state.userName && this.state.password)}
							onClick={this.handleFormSubmit}
						>
							Create Event
              					</FormBtn>
					</form>
				</CardBody>
			</Card>
		);
	}
}

export default SchedCard;