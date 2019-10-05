import React, { Component } from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper/";
import Card from "../components/Card";
import Footer from "../components/Footer/Footer";

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
              </Container>
              </Wrapper>
              <Footer></Footer>
          </div>

      );
  }
}
  
    export default Home;