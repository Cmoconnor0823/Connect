import React, { Component } from "react";
import { Col, Row, CardColumns } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import ToDoCard from "../components/ToDoCard";
import SchedCard from "../components/SchedCard";
import MessageCard from "../components/MessageCard";
import WelcomeCard from "../components/WelcomeCard";
import ProfileCard from "../components/ProfileCard";



class Home extends Component {
    state = {
        loggedin: true

    };
    render() {
        return (
            <Wrapper>
                <Row>
                    <Col>
                    <WelcomeCard></WelcomeCard>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                <SchedCard></SchedCard>
                                <ToDoCard></ToDoCard>
                                <MessageCard></MessageCard>
                                <ProfileCard></ProfileCard>
                                {/* This is a template to make a new card
                                     <Card>
                                     <CardBody>
                                        <CardTitle>
                                            <h4>This is an example of a card that is not a called in component</h4>
                                        </CardTitle>
                                        </CardBody>
                                    </Card> */}
                            </CardColumns>
                        </Col>
                    </Row>
            </Wrapper>
        );
    }
}

export default Home;