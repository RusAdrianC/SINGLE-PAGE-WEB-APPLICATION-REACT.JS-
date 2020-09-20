import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Info(props) {
  return (
    <Card.Body className="educatie-body">
      <Card.Title>
        <h2>{props.title}</h2>
      </Card.Title>
      <Card.Text>{props.content.substring(0, 200)}</Card.Text>

      <Link to={props.Lucru}>
        {" "}
        <Button variant="primary">Mai multe...</Button>
      </Link>
    </Card.Body>
  );
}

export default Info;
