import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import avatar from "../img/avatar.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import react from "../img/react.png";
import html from "../img/html.png";
import css from "../img/css.png";
import bs from "../img/bs.png";
import mui from "../img/mui.png";
import { useNavigate } from "react-router";

export const About = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container className="about-container">
      <Row className="about-body">
        <Col>
          <Image
            src={avatar}
            roundedCircle
            fluid
            alt="Person's Image in About Page"
            className="avatar"
          />
          <h1>A little bit about me!</h1>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <div className="back-next-button">
            <Button onClick={handleBack} variant="link">
              Back
            </Button>
          </div>
        </Col>
        <Col className="stack-column">
          <Row>
            <Image src={js} alt="JavaScript Logo" className="about-images" />
          </Row>
          <Row>
            <Image src={ts} alt="TypeScript Logo" className="about-images" />
          </Row>
          <Row>
            <a href="https://reactjs.org/">
              <Image src={react} alt="React Logo" className="about-images" />
            </a>
          </Row>
          <Row>
            <Image src={html} alt="HTML Logo" className="about-images" />
          </Row>
          <Row>
            <Image src={css} alt="CSS Logo" className="about-images" />
          </Row>
          <Row>
            <Image src={bs} alt="Bootstrap Logo" className="about-images" />
          </Row>
          <Row>
            <Image src={mui} alt="Material Ui logo" className="about-images" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
