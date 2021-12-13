import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "500px" }}>
            <Card.Body>
              <Card.Title>
                <h1>John Doe</h1>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h2>Full Stack Developer</h2>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget ex euismod, porttitor nunc eu, tincidunt nunc. Nullam
                  euismod, nisi eget tincidunt euismod, nisi nunc interdum nisi,
                  sed tincidunt nunc nisl euismod nunc.
                </p>
              </Card.Text>
              <Card.Link href="/about">More about me</Card.Link>
              <Card.Link href="/portfolio">My portfolio</Card.Link>
            </Card.Body>
          </Card>
          <Row className="social-media">
            <ul>
              <li>
                <a href="www.linkedin.com">
                  <Image src={linkedin} />
                </a>
              </li>

              <li>
                <a href="www.Github.com">
                  <Image src={github} />
                </a>
              </li>

              <li>
                <a href="www.Twitter.com">
                  <Image src={twitter} />
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
