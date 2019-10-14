import React, {Component} from 'react';
import { NavLink } from 'reactstrap';
import { FormBtn } from "../Form";
export default class LoginControl extends Component {
    constructor(props) {
      super(props);
    //   this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.state = {isLoggedIn: false};
    }
    handleLogout() {
      this.setState({isLoggedIn: false});
      sessionStorage.setItem("loggedin", "")
      
    }
    render() {
       
        if(sessionStorage.loggedin === "success"){
        return (
            <FormBtn onClick={this.handleLogout}> Log Out </FormBtn>
        )
        }
        else{
            return (
            <NavLink href="/login">Log In</NavLink>
            )    
    }
  }
}
 