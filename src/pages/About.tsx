import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "../img/avatar.png";

export const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src={avatar}
            roundedCircle
            fluid
            alt="Person's Image in About Page"
          />
          <h1>A little bit about me!</h1>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
