import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Profesor(props) {
  return (
    <>
      <div className="RamaProfesor">
        <h4
          style={{
            fontSize: "2vw",
          }}
        >
          {props.Departament}
        </h4>
        <img src={props.img} alt="teacher" className="PozaProfesor"></img>
        <p
          style={{
            fontSize: "1vw",
          }}
        >
          {props.functie}
        </p>
        <ListGroup variant="flush">
          <ListGroup.Item
            className="ContacteProfesor"
            style={{
              fontSize: "1vw",
            }}
          >
            Email: {props.email}
          </ListGroup.Item>
          <ListGroup.Item
            className="ContacteProfesor"
            style={{
              fontSize: "1vw",
            }}
          >
            Telefon: {props.telefon}
          </ListGroup.Item>
          <ListGroup.Item
            className="ContacteProfesor"
            style={{
              fontSize: "1vw",
            }}
          >
            Adresa: {props.adresa}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
export default Profesor;
