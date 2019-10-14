import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { FormBtn } from "../Form";
import Navbar from "../Navbar";

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        //   this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { loggedIn: {props} };
    }
    handleLogout() {
        this.setState({ loggedIn: false });
        sessionStorage.setItem("loggedin", "")
        // this.props.routeLog();
    }
    
    render() {
        if (sessionStorage.loggedin === "success") {
            return (
                <FormBtn onClick={this.handleLogout}> Log Out </FormBtn>
            )
        }
        else {
            return (
                <NavLink href="/login">Log In</NavLink>
            )
        }
    }
}
