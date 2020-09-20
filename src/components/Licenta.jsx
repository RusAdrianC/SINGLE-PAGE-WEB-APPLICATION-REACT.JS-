import React from "react";
import Content from "./Content";
import { Button, Container, Row, Col } from "react-bootstrap";
import An from "./An";
import { Link } from "react-router-dom";
function Licenta() {
  return (
    <>
      <Container>
        <Row>
          <Link to="/Educatie">
            {" "}
            <Button className="LicentaB" variant="primary" size="lg">
              {" "}
              Inapoi la "Educatie"{" "}
            </Button>{" "}
          </Link>
        </Row>
        <Row>
          <Content
            title="Licenta"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque. Massa ultricies mi quis hendrerit. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Imperdiet proin fermentum leo vel. Id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit. Convallis convallis tellus id interdum velit laoreet id. Dolor purus non enim praesent elementum facilisis. Nisl purus in mollis nunc sed. Auctor eu augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla."
          />
        </Row>
        <An
          An="Anul1"
          disciplina1="CEF"
          disciplina2="TIC"
          disciplina3="TW"
          disciplina4="DE"
          disciplina="Disciplina"
          specializare="Specializare"
          specializare1="IE"
          specializare2="IETEEC"
          specializare3="Specializare"
          specializare4="IEE"
        />
        <An
          An="Anul2"
          disciplina1="CEF"
          disciplina2="TIC"
          disciplina3="TW"
          disciplina4="DE"
          disciplina="Disciplina"
          specializare="Specializare"
          specializare1="IE"
          specializare2="IETEEC"
          specializare3="Specializare"
          specializare4="IEE"
        />
      </Container>
    </>
  );
}
export default Licenta;
