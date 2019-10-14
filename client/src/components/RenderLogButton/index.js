
import React, {Component} from 'react';
import { NavLink, Button } from 'reactstrap';
//import { FormBtn } from "../Form";
import "./style.css";


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
    }
    
    render() {
        if(sessionStorage.loggedin === "success"){
        return (
            <Button className="logOut" onClick={this.handleLogout}> Log Out </Button>
        )
        }
        else {
            return (
                <NavLink href="/login">Log In</NavLink>
            )
        }
    }
}
