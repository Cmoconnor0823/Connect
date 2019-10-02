import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import Card from "../components/Card";
import ToDoCard from "../components/ToDoCard";
import SchedCard from "../components/SchedCard";


class Home extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Wrapper>
                    <Container>
                        <Col>
                            <Row>

                                <SchedCard>

                                </SchedCard>
                            </Row>
                        </Col>
                        <Col>
                            <Row>

                                <ToDoCard>

                                </ToDoCard>
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