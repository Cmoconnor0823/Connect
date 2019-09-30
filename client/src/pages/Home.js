import React, { Component } from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper/";
import Card from "../components/Card";

class Home extends Component {
    state = {
      
    };
    // When the component mounts, load the "thing" to be displayed
//   componentDidMount() {
//     this.loadThisThing();
//   }

//   handleBtnClick = event => {
//   }

  render() {
      return (
          <div>
              <Wrapper>
              <Container>
              <Card>

              </Card>
              </Container>
              </Wrapper>
          </div>

      );
  }
}
  
    export default Home;