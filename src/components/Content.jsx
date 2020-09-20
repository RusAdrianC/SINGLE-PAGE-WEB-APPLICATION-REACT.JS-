import React from "react";
import {Jumbotron, Container} from "react-bootstrap";
function Content(props) {
    return (
        <Jumbotron className="jumbo" fluid>
            <Container>
                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Content;