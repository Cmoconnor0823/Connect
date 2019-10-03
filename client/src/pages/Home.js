import React, { Component } from "react";
import { Card, CardTitle, CardColumns } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import ToDoCard from "../components/ToDoCard";
import SchedCard from "../components/SchedCard";


class Home extends Component {
    state = {

    };
    render() {
        return (
            <Wrapper>
                <CardColumns>
                    <SchedCard></SchedCard>
                    <ToDoCard></ToDoCard>
                    <Card>
                        <CardTitle>
                            <h4>This is an example of a card that is not a called in component</h4>
                        </CardTitle>
                    </Card>
                </CardColumns>
                </Wrapper>
        );
    }
}

export default Home;