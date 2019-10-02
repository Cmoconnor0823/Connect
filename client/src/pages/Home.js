import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
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
                        <Col>
                            <Row>

                                <Card>

                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>

                                <Card>

                                </Card>
                            </Row>
                        </Col>
                    </Container>
                </Wrapper>
            </div>

        );
    }
}

export default Home;