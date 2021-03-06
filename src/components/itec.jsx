import React from "react";
import SlideShow from "./Carousel";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Content from "./Content";

function ITEC() {
  return (
    <>
      <Container>
        <Row>
          <Link to="/Cercetare">
            <Button className="LicentaB" variant="primary" size="lg">
              Inapoi la "Cercetare"
            </Button>
          </Link>
        </Row>

        <Row>
          <Col>
            <h1
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                textAlign: "center  ",
              }}
            >
              ITEC
            </h1>
          </Col>
        </Row>

        <SlideShow
          img1="https://img3.stockfresh.com/files/p/pressmaster/m/55/101971_stock-photo-project.jpg"
          img2="https://img3.stockfresh.com/files/p/pressmaster/m/55/101971_stock-photo-project.jpg"
          img3="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
          img4="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
          img5="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
          label1="Slide label 1"
          label2="Slide label 2"
          label3="Slide label 3"
          label4="Slide label 4"
          label5="Slide label 5"
        />
        <Content
          title=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque. Massa ultricies mi quis hendrerit. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Imperdiet proin fermentum leo vel. Id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit. Convallis convallis tellus id interdum velit laoreet id. Dolor purus non enim praesent elementum facilisis. Nisl purus in mollis nunc sed. Auctor eu augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla."
        />
      </Container>
    </>
  );
}
export default ITEC;
