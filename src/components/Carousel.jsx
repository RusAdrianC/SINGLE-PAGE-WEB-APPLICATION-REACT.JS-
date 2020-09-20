import React from "react";
import { Carousel, Button } from "react-bootstrap";

function SlideShow(props) {
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={props.img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="description">{props.label1}</h3>
                    <Button variant="secondary" className="moreInfo">Mai multe...</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={props.img2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="description">{props.label2}</h3>
                    <Button variant="secondary" className="moreInfo">Mai multe...</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={props.img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="description">{props.label3}</h3>
                    <Button variant="secondary" className="moreInfo">Mai multe...</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={props.img4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="description">{props.label4}</h3>
                    <Button variant="secondary" className="moreInfo">Mai multe...</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={props.img5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="description">{props.label5}</h3>
                    <Button variant="secondary" className="moreInfo">Mai multe...</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;