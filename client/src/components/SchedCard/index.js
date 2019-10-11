import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";
import { Card, CardBody, CardTitle, CardFooter, Table } from "reactstrap";
import "./style.css";

// import reactMoment from 'react-moment';
// import 'moment-timezone';

import Moment from 'react-moment';
import 'moment-timezone';


import ApiCalendar from "react-google-calendar-api";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

// import Moment from 'react-moment';
// import 'moment-timezone';

class SchedCard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      clicked: false,
      sign: false,
      summary: "",
      startTime: "",
	  endTime: "",
	  startDate: new Date()
	};
	
	// handleChange = date => {
	// 	this.setState({
	// 	  startDate: date
	// 	});
	//   };

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
  };

  // 	act = () => {
  // 		const createEvent: object = {
  // 		  summary: this.state.summary,
  // 		  time: this.state.startTime

  // 		};

  //     ApiCalendar.createcreateEvent(createEvent)
  //       .then(result => {
  //         console.log(result);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };

  // -------------practice for 'createEvent!'------------
  act = () => {
    const createEvent: object = {
      summary: this.state.summary,
      start: {
        dateTime: this.state.startTime
      },
      // end: {
      //   dateTime: this.state.endTime
      // }
    };

    ApiCalendar.createEvent(createEvent)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  // -------------practice for 'createEvent!'------------^^^

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

  //----------------code for form to send to api -------------------
  handleSubmit = event => {
    event.preventDefault();
  };
  handleInputChange = event => {
    let stateName = event.target.name;
    this.setState({ [stateName]: event.target.value });
  };

  handleChange = date => {
    
    // var date = moment(date).format();
    console.log(date)
    this.setState({
      startDate: date
    });
  };



  //----------------code for form to send to api -------------------
  render() {

    //----------------code for form to send to api -------------------
    const { summary } = this.state;
    //----------------code for form to send to api -------------------

    return (
      //----------------code for form to send to api -------------

      <Card id="schedCard">
        <div>
          <h1> Forms and inputs</h1>
          <p>summary of event is {summary}</p>
          <form onSubmit={this.handleSubmit}>
            
              <input
                type="text"
                placeholder="summary of event"
                name="summary"
                onChange={this.handleInputChange}
                value={this.state.summary}
              ></input>
              {/* <input
                type="text"
                placeholder="start time"
                name="startTime"
                onChange={this.handleInputChange}
                value={this.state.startTime}
              ></input>
              <input
                type="text"
                placeholder="end time"
                name="endTime"
                onChange={this.handleInputChange}
                value={this.state.endTime}
              ></input> */}
              <DatePicker
			  showTimeSelect
 				dateFormat="Pp"		
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            
            <p>
              <button onClick={this.act}>create Event</button>
            </p>
          </form>
		  </CardTitle>
        {/* //----------------code for form to send to api ------------------- */}

        <CardTitle>
          <button onClick={e => this.handleItemClick(e, "sign-in")}>
            sign-in
          </button>
          <button onClick={e => this.handleItemClick(e, "sign-out")}>
            sign-out
          </button>
          <button onClick={e => this.listEvents(e, "sign-out")}>
            My Schedule!
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
                      {/* <td>{stuff.start.dateTime}</td> */}
                     <td><Moment date={stuff.start.dateTime} /></td> 
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