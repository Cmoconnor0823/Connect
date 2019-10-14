import React, { Component } from "react";
import { TextArea } from "../Form";
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import "./style.css";

// import reactMoment from 'react-moment';
// import 'moment-timezone';

import Moment from "react-moment";
import "moment-timezone";

import ApiCalendar from "react-google-calendar-api";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import moment from 'moment'

// import Moment from 'react-moment';
// import 'moment-timezone';
import moment from "moment";

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
      endDate: new Date(),
      isToggleOn: false,
      isToggleFormOn: false,
      isModalVisible: true,
      isModalOpen: false,
      isSignInModVisible: true,
      isSignInModOpen: false
    };

    ApiCalendar.onLoad(() => {
      ApiCalendar.listenSign(this.signUpdate);
    });
  }

  componentDidMount() {
    this.listEvents();
  }

  toggleModalAlert = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  toggle = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  toggleForm = () => {
    this.setState({
      isToggleFormOn: !this.state.isToggleFormOn
    });
  };

  signUpdate = sign => {
    this.setState({ sign });
  };

  handleItemClick = (event, name) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
      console.log("tell user they are signed in!");
    } else if (name === "sign-out") {
      console.log("tell user they have signed out!");
      ApiCalendar.handleSignoutClick();
      this.setState({ clicked: true });
    }
  };

  listEvents = (event, name) => {
    // console.log(this.state);
    if (ApiCalendar.sign) {
      ApiCalendar.listUpcomingEvents(10).then(result => {
        var test2 = result.result.items;
        console.log(test2);

        var test1 = result.result.items[0].end.dateTime;

        var dateAndTime = moment(test1).format("MMMM Do YYYY, h:mm:ss a");
        console.log(dateAndTime);
        var res1 = dateAndTime.split(",");
        console.log(res1);
        console.log(res1[0]);
        console.log(res1[1]);

        // date = res1[0];

        // time = res1[1];

        // result.items[""0""].start.dateTime

        // result.items[""0""].htmlLink
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
        this.toggleModal();
      })
      .catch(error => {
        console.log(error);
      });

    // toggleModal = () =>{
    //   this.setState({
    //     isModalOpen: !this.state.isModalOpen
    //   })
    // }
  };

  componentDidUpdate() {
    if (ApiCalendar.sign !== this.state.sign) {
      this.setState({ sign: ApiCalendar.sign }, () => {
        // console.log(this.state);
        if (ApiCalendar.sign) {
          this.listEvents();
        }
      });
      return false;
    } else {
      return false;
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  handleInputChange = event => {
    let stateName = event.target.name;
    this.setState({ [stateName]: event.target.value });
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleChange2 = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    const { summary } = this.state;

    return (
      <Card id="schedCard">
        {/*------------------- code for modal below this------------- */}
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Hey there!{" "}
          </ModalHeader>
          <ModalBody>Your event has been created!</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>
              yay!
            </Button>
          </ModalFooter>
        </Modal>
        {/*------------------- code for modal above this------------- */}

        {/*------------------- code for sign in modal below this------------- */}
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Hey there!{" "}
          </ModalHeader>
          <ModalBody>Your event has been created!</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>
              yay!
            </Button>
          </ModalFooter>
        </Modal>
        {/*------------------- code for sign in modal above this------------- */}
        <CardTitle>
          <h4>
            To view your events in Google Calendar, be sure to sign in to your
            gmail account first! <br></br>
            <button
              className="btn m-2 cssaltbtn font-weight-bold"
              id="#cssBtn"
              onClick={e => this.handleItemClick(e, "sign-in")}
            >
              Sign-In
            </button>
          </h4>
        </CardTitle>
        <CardBody>
          <h5>Click the button below to create a new event.</h5>
          <button
            className="btn m-2 cssaltbtn font-weight-bold"
            onClick={this.toggleForm}
          >
            Show/Hide Create Event Form
          </button>
          <div>
            {this.state.isToggleFormOn && (
              <form onSubmit={this.handleSubmit}>
                <TextArea
                  type="text"
                  placeholder="Enter a Summary or Description of your event"
                  name="summary"
                  onChange={this.handleInputChange}
                  value={this.state.summary}
                />
                <div>
                  <h6>Starting time and date!</h6>
                </div>
                <div className="m-3">
                  <DatePicker
                    showTimeSelect
                    dateFormat="Pp"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <h6>Ending time and date!</h6>
                </div>
                <div className="m-3">
                  <DatePicker
                    showTimeSelect
                    dateFormat="Pp"
                    selected={this.state.endDate}
                    onChange={this.handleChange2}
                  />
                </div>
                <button
                  className="btn m-2 cssbtn font-weight-bold"
                  onClick={this.act}
                >
                  Create Event
                </button>
              </form>
            )}
          </div>
          {/* //----------------code for form to send to api ------------------- */}
          <button
            className="btn m-2 cssbtn font-weight-bold"
            onClick={e => this.handleItemClick(e, "sign-out")}
          >
            Sign-Out
          </button>

          <button
            className="btn m-2 cssaltbtn font-weight-bold"
            onClick={this.toggle}
          >
            Show/Hide Goolgle Calendar Events
          </button>
          <button
            className="btn m-2 cssbtn font-weight-bold"
            onClick={this.listEvents}
          >
            Update My Schedule!
          </button>
          <CardFooter>
            <div>
              {this.state.isToggleOn && <div>here is what you got going!</div>}
              <Table className="table table-hover">
                <thead>
                  <tr>
                    <th>Event name</th>
                    <th>time and date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.events.map(stuff => (
                    <tr>
                      <td>{stuff.summary} </td>
                      {/* <td>{stuff.start.dateTime}</td> */}

                      <td>
                        <Moment date ={stuff.start.dateTime} />
                        </td>

                      {/* <td>{member.bloodGroup}</td>
                        <td>{member.phone_number}</td>
                        <td><a>Edit</a>|<a>Delete</a></td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default SchedCard;
