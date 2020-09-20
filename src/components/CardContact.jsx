import React from "react";
import { Card } from "react-bootstrap";
function CardContact(props) {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#d9d9d9",
        border: "none",
        marginLeft: "20px",
        textAlign: "center",
      }}
    >
      <Card.Body className="card-contact">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardContact;
