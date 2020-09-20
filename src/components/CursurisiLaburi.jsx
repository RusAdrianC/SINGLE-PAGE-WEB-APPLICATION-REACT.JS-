import React, { Component } from "react";
import Load from "./Load";
import { getCursuri } from "../services/mock-data";
import Content from "./Content";
import Curs from "./curs";
import { getLaburi } from "../services/mock-data";
import Lab from "./Lab";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

class CursurisiLaburi extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Link to="/Materiale">
              <Button className="LicentaB" variant="primary" size="lg">
                Inapoi la "Materiale"
              </Button>
            </Link>
          </Row>

          <Content title="Cursuri" />

          <Row>
            <div className="CursuriSiLaboratoare">
              <Load source={getCursuri}>
                {({ value, loading }) => (
                  <>
                    {!loading
                      ? value.map((curs) => <Curs title={curs.nume} />)
                      : "Loading"}
                  </>
                )}
              </Load>
            </div>
          </Row>

          <Content title="Laboratoare" />

          <Row>
            <div className="CursuriSiLaboratoare">
              <Load source={getLaburi}>
                {({ value, loading }) => (
                  <>
                    {!loading
                      ? value.map((lab) => <Lab title={lab.nume} />)
                      : "Loading"}
                  </>
                )}
              </Load>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
export default CursurisiLaburi;
