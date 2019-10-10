import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
import { Card, CardBody, CardTitle, CardFooter, Table } from "reactstrap";
import "./style.css";

import ApiCalendar from "react-google-calendar-api";

class SchedCard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      clicked: false,
      sign: false,
      fullName: null
    };

    ApiCalendar.onLoad(() => {
      ApiCalendar.listenSign(this.signUpdate);
    });
  }

  componentDidMount() {
    this.listEvents();
  }

  signUpdate = sign => {
    this.setState({ sign });
  };

  handleItemClick = (event, name) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
      console.log("tell user they are signed in!");
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
      this.setState({ clicked: true });
    }
  };

  listEvents = (event, name) => {
    console.log("HEEEINEIN");
    console.log(this.state);
    if (ApiCalendar.sign) {
      ApiCalendar.listUpcomingEvents(10).then(result => {
        // console.log(result.items);
        this.setState({ events: result.result.items });
      });
    }

    // console.log(stuff);
  };

  act = () => {
    const eventFromNow: object = {
      summary: "Poc Dev From Now",
      time: 480
    };

    ApiCalendar.createEventFromNow(eventFromNow)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate() {
    if (ApiCalendar.sign !== this.state.sign) {
      this.setState({ sign: ApiCalendar.sign }, () => {
        console.log(this.state);
        if (ApiCalendar.sign) {
          this.listEvents();
        }
      });
      return false;
    } else {
      return false;
    }
  }

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

  //----------------code for form to send to api -------------------
  handleSubmit = event => {
    event.preventDefault();
  };
  handleInputChange = () => {};
  //----------------code for form to send to api -------------------
  render() {
    //----------------code for form to send to api -------------------
		const {fullName} = this.state
    //----------------code for form to send to api -------------------

    return (
      //----------------code for form to send to api -------------

      <Card id="schedCard">
        <div>
          <h1> Forms and inputs</h1>
		  <p>full Name is {fullName}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                placeholder="Your Name"
                name="firstName"
              ></input>
            </p>
            <p>
              <button>send Message</button>
            </p>
          </form>
        </div>
        {/* //----------------code for form to send to api ------------------- */}

        <CardTitle>
          <button onClick={e => this.handleItemClick(e, "sign-in")}>
            sign-in
          </button>
          <button onClick={e => this.handleItemClick(e, "sign-out")}>
            sign-out
          </button>
          <button onClick={e => this.listEvents(e, "sign-out")}>
            My schedule!
          </button>
          <h4> This will be the card that holds our Schedule</h4>
        </CardTitle>
        <CardBody>
          <h5>
            Do we want this to appear always or have it set to a trigger on off
            function? Also do we want to display the events found in this box or
            should it appear elsewhere?
          </h5>
          <h6>
            Enter the information below to create an event on google callender
          </h6>

          <Table>
            <div>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Name</th>
                  <th>Event Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* {
			this.state.events.map(stuff =>
			(<div> 
			<td>{stuff.start.dateTime}</td>
			</div>)
			)
		} */}
                  <th scope="row">
                    {this.state.events.map(stuff => (
                      <div>
                        <th>{stuff.index}</th>
                      </div>
                    ))}
                  </th>
                  {this.state.events.map(stuff => (
                    <div>
                      <td>{stuff.summary}</td>
                      <td>{stuff.start.dateTime}</td>
                    </div>
                  ))}
                </tr>
                {/* <tr>
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
          </tr> */}
              </tbody>
            </div>
          </Table>

          {/* <Table hover>
		<div>
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
		</div>
		
      </Table> */}
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
              Check the box below if you want to create a reminder using your
              default prefereces below.
              <Input type="checkbox" id="remind" name="remind" value="false" />
            </CardFooter>
            {/* Look into adding a way to better capure a time input for start and end time
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
					<Table hover responsive="md">
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
							placeholder="Location (required)"
						/>
						<TextArea
							value={this.state.description}
							onChange={this.handleInputChange}
							name="description"
							placeholder="Event Description (Optional)"
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
							<h6 className="m-3">Check the box below if you want to create a reminder using your default preferences below.</h6>
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
