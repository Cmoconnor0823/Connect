import React, { Component } from "react";
import { Input, TextArea } from "../Form";
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
      startDate: new Date(),
      endDate: new Date()
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
  };

  act = () => {
    const createEvent: object = {
      summary: this.state.summary,
      start: {
        dateTime: this.state.startDate
      },
      end: {
        dateTime: this.state.endDate
      }
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
    this.setState({
      startDate: date,
      // endDAte: utcDate2
    });
  };

  handleChange2 = date => {
    this.setState({
      endDate: date,
     
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
        <CardTitle>

          <h4>
              Enter the information below to create an event on google calendar
            </h4>
        </CardTitle>
        <CardBody>
          Your event summary is {summary}
          <form onSubmit={this.handleSubmit}>

            <TextArea
              type="text"
              placeholder="Enter a Summary or Description of your event"
              name="summary"
              onChange={this.handleInputChange}
              value={this.state.summary}
            />
            <div className="m-3">
               <DatePicker
			             showTimeSelect
 				            dateFormat="Pp"		
                selected={this.state.endDate}
                onChange={this.handleChange2}
              />
            </div>
            <p>
              <button className="btn m-2 cssbtn font-weight-bold" onClick={this.act}>Create Event</button>
            </p>
          </form>
          {/* //----------------code for form to send to api ------------------- */}

          
            <button className="btn m-2 cssbtn font-weight-bold" id="#cssBtn" onClick={e => this.handleItemClick(e, "sign-in")}>
              Sign-In
          </button>
            <button className="btn m-2 cssbtn font-weight-bold" onClick={e => this.handleItemClick(e, "sign-out")}>
              Sign-Out
          </button>
            <button className="btn m-2 cssbtn font-weight-bold" onClick={e => this.listEvents(e, "sign-out")}>
              My Schedule!
          </button>
          
          <CardFooter>
            <Table hover>
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
                </tbody>
            </Table>
            </CardFooter>
          </CardBody>
      </Card>
        );
      }
    }
    
export default SchedCard;