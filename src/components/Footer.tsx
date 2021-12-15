import React from "react";
import { Row, Image } from "react-bootstrap";

import twitter from "../img/twitter.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export const Footer = () => {
  return (
    <div>
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
    </div>
  );
};
