import React, { Component } from "react";
import { Col, Row, CardDeck} from "reactstrap";
import Wrapper from "../components/Wrapper/";
//import ProfileCard from "../components/ProfileCard";
import Jumbotron from "../components/Header";
import AboutCard from "../components/AboutCard";



class About extends Component {
    state = {

    };
    render() {
        return (
            <Wrapper>
                <Row>
                    <Col>
                    <Jumbotron></Jumbotron>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <CardDeck>
                                <AboutCard></AboutCard>

                                     {/* <Card>
                                     <CardBody>
                                        <CardTitle>
                                            <h4>This is an example of a card that is not a called in component</h4>
                                        </CardTitle>
                                        </CardBody>
                                    </Card>  */}
                            </CardDeck>
                        </Col>
                    </Row>
            </Wrapper>
        );
    }
}

export default About;