import React from "react";
import { Col } from "reactstrap";

import "./style.css";

function Card(props) {
    return (
        <Col size="md-6">
            <div className="card">
                <div className="card-header">
                    <h1> This is a template card</h1>
                </div>

            </div>
        </Col>
    );
}

export default Card;