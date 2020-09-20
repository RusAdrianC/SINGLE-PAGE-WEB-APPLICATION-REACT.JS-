import Content from "./Content";
import Disciplina from "./Disciplina";
import React, { Component } from "react";
import Load from "./Load";
import { getDiscipline } from "../services/mock-data";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Materiale extends Component {
  render() {
    return (
      <>
        <Container>
          <Content title="Materiale didactice" />

          {/* partea de loading  */}

          <div className="Materiale">
            <Load source={getDiscipline}>
              {({ value, loading }) => (
                <>
                  {!loading
                    ? value.map((disciplina) => (
                        <Link className="LinkDisciplina" to="/Cursuri">
                          <Disciplina title={disciplina.nume} />
                        </Link>
                      ))
                    : "Loading"}
                </>
              )}
            </Load>
          </div>
        </Container>

        {/* partea de loading  */}

        {/* <div className="container">
          <div className="row justify-content-start rand">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 01" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 02" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 03" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 04" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 05" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 06" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 07" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 08" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Disciplina title="Disciplina 09" />
            </div>
          </div>
        </div> */}
      </>
    );
  }
}
export default Materiale;
