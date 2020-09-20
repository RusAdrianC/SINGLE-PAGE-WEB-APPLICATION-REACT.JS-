import React from "react";
import Content from "./Content";
import Specializare from "./Specializare";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cercetare() {
  return (
    <>
      <Content
        title="Cercetare"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque. Massa ultricies mi quis hendrerit. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Imperdiet proin fermentum leo vel. Id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit. Convallis convallis tellus id interdum velit laoreet id. Dolor purus non enim praesent elementum facilisis. Nisl purus in mollis nunc sed. Auctor eu augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla."
      />
      <Container>
        <Row>
          <Col lg="6">
            <Link className="LinkDisciplina" to="/Itec">
              <Specializare
                title="ITEC"
                continut="Lorem ipsumm ipsum sum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididunt"
              />
            </Link>
          </Col>
          <Col lg="6">
            <Link className="LinkDisciplina" to="/Gcer">
              <Specializare
                title="GCER"
                continut="Lorem ipsumm ipsum sum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididuntm ipsum dolor sit a consectetur adipiscing elit sed do eiusmod tempor incididunt"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Cercetare;
