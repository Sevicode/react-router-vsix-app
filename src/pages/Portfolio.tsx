import React from "react";
import { Row, Col, Card, Container, ListGroup, Image } from "react-bootstrap";
import js1 from "../img/portfolio-img/js1.jpg";
import js2 from "../img/portfolio-img/js2.jpg";
import js3 from "../img/portfolio-img/js3.jpg";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

export const Portfolio = () => {
  return (
    <Container className="portfolio-container">
      <Row>
        <h1>JavaScript Projects</h1>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js1} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js1} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js1} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js1} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <h1>React Projects</h1>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js2} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js2} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js2} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js2} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <h1>TypeScript Projects</h1>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js3} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js3} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js3} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img variant="top" src={js3} />
            <Card.Body>
              <Card.Title>Project Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the Project Title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>link to the source code</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
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
    </Container>
  );
};
