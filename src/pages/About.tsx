import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import avatar from "../img/avatar.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import react from "../img/react.png";
import html from "../img/html.png";
import css from "../img/css.png";
import bs from "../img/bs.png";
import { useNavigate } from "react-router";



export const About = () => {

  let navigate = useNavigate();
  
  const handleBack = () => { 
    navigate(-1);
  }

  const handleForward = () => {
    navigate(1);
  }
  

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
          <Button onClick={handleBack} variant="link">Back</Button>
          <Button onClick={handleForward} variant="link">Next</Button>
        </Col>
        <Col>
        <h2>My Stack</h2>
        <Row><Image src={js} alt="JavaScript Logo" /></Row>
        <Row><Image src={ts} alt="TypeScript Logo" /></Row>
        <Row><Image src={react} alt="React Logo" /></Row>
        <Row><Image src={html} alt="HTML Logo" /></Row>
        <Row><Image src={css} alt="CSS Logo"/></Row>
        <Row><Image src={bs} alt="Bootstrap Logo"/></Row>
        <Row><Image /></Row>
        <Row><Image /></Row>
        </Col>
        
      </Row>
      
        
        
      
    </Container>
  );
};
