import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const An = (props) => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="HeaderAn">{props.An}</h2>
        </Row>

        <Row className="BorduriLicentaMasterat">
          <Col className="StilScris">{props.disciplina}</Col>
          <Col className="StilScris">{props.specializare}</Col>
        </Row>
        <Row className="BorduriLicentaMasterat">
          <Col className="StilScrisSpecializari ">{props.disciplina1}</Col>
          <Col className="StilScrisSpecializari ">{props.specializare1}</Col>
        </Row>
        <Row className="BorduriLicentaMasterat">
          <Col className="StilScrisSpecializari ">{props.disciplina2}</Col>
          <Col className="StilScrisSpecializari ">{props.specializare2}</Col>
        </Row>
        <Row className="BorduriLicentaMasterat">
          <Col className="StilScrisSpecializari ">{props.disciplina3}</Col>
          <Col className="StilScrisSpecializari ">{props.specializare3}</Col>
        </Row>
        <Row className="BorduriLicentaMasterat">
          <Col className="StilScrisSpecializari ">{props.disciplina3}</Col>
          <Col className="StilScrisSpecializari ">{props.specializare3}</Col>
        </Row>
        <Row className="BorduriLicentaMasterat">
          <Col className="StilScrisSpecializari ">{props.disciplina4}</Col>
          <Col className="StilScrisSpecializari ">{props.specializare4}</Col>
        </Row>
      </Container>
    </>
  );
};
export default An;
