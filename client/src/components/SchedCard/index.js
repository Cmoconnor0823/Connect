import React, { Component } from "react";
//import { Input, FormBtn, TextArea } from "../Form";
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


            <input

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
            ></input>

             <DatePicker
			             showTimeSelect
 				            dateFormat="Pp"		
                selected={this.state.startDate}
                onChange={this.handleChange}
              /> 

               <DatePicker
			             showTimeSelect
 				            dateFormat="Pp"		
                selected={this.state.endDate}
                onChange={this.handleChange2}
              />


            <p>
              <button onClick={this.act}>create Event</button>
            </p>
          </form>
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
                </tbody>
              </div>
            </Table>
          </CardBody>
      </Card>
        );
      }
    }
    
export default SchedCard;