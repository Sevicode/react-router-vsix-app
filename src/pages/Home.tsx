import React from "react";
import { Container, Card, Row, Col} from "react-bootstrap";


export const Home = () => {
  return (
    <div className="home-body">
    <Container>
      <Row className="home-main-row">
        <Col>
          <Card style={{ width: "800px" }}>
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
        </Col>
      </Row>
    </Container>
    </div>
  );
};
