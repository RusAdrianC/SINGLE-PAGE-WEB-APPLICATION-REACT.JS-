import React from "react";
import Content from "./Content";
import Profesor from "./Profesor";
import { Row, Col, Container } from "react-bootstrap";

function Personal() {
  return (
    <>
      <Content title="Personal" />
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="4" md="4" sm="4" xs="4">
            <Profesor
              Departament="Departamentul de electronica"
              img="https://static1.squarespace.com/static/5602c473e4b0a65d125ef0dc/5619305ce4b0de0a9247f5de/5a58dedb53450a75579ae7d7/1515773804061/English+Teacher.jpg?format=1500w"
              functie="Prof. dr. ing. Prenume NUME"
              email="email@prof.com"
              telefon="0742153213"
              adresa=""
            />
          </Col>
        </Row>
        <Content title="Profesori" />
        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <Profesor
              Departament="Departamentul de electronica"
              img="https://static1.squarespace.com/static/5602c473e4b0a65d125ef0dc/5619305ce4b0de0a9247f5de/5a58dedb53450a75579ae7d7/1515773804061/English+Teacher.jpg?format=1500w"
              functie="Prof. dr. ing. Prenume NUME"
              email="email@prof.com"
              telefon="0742153213"
              adresa=""
            />
          </Col>

          <Col lg="4" md="4" sm="" xs="4">
            <Profesor
              Departament="Departamentul de electronica"
              img="https://static1.squarespace.com/static/5602c473e4b0a65d125ef0dc/5619305ce4b0de0a9247f5de/5a58dedb53450a75579ae7d7/1515773804061/English+Teacher.jpg?format=1500w"
              functie="Prof. dr. ing. Prenume NUME"
              email="email@prof.com"
              telefon="0742153213"
              adresa=""
            />
          </Col>

          <Col lg="4" md="4" sm="4" xs="4">
            <Profesor
              Departament="Departamentul de electronica"
              img="https://static1.squarespace.com/static/5602c473e4b0a65d125ef0dc/5619305ce4b0de0a9247f5de/5a58dedb53450a75579ae7d7/1515773804061/English+Teacher.jpg?format=1500w"
              functie="Prof. dr. ing. Prenume NUME"
              email="email@prof.com"
              telefon="0742153213"
              adresa=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Personal;
