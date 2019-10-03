import React, { Component } from "react";
import { Container, Col, Row, Card, CardTitle } from "reactstrap";
import Wrapper from "../components/Wrapper/";
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
                        <Row>
                                <SchedCard></SchedCard>
                                <ToDoCard></ToDoCard>

                            <Col sm="6" md="4">

                                <Card body>
                                    <CardTitle>
                                        <h4>This is an example of a card that is not a called in component</h4>
                                    </CardTitle>

                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </div>

        );
    }
}

export default Home;