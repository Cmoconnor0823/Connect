import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";

class Login extends Component {
    state = {
      
    };
    // When the component mounts, load the "thing" to be displayed
  componentDidMount() {
    this.loadThisThing();
  }

  handleBtnClick = event => {
  }

  render() {
      return (
          <div>
              <Container>
              <Card>

              </Card>
              </Container>
          </div>

      );
  }
}
  
    export default Login;