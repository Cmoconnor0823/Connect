import React, { Component } from "react";
import { Col, Row, CardColumns } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import ProfileCard from "../components/ProfileCard";
import WelcomeCard from "../components/WelcomeCard";



class About extends Component {
    state = {

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

export default About;