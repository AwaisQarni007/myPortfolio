import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Awais Qarni </span>
            from <span className="purple"> Rawalpindi, Pakistan.</span>
            <br />I am a Software Engineer Currently Working in{" "}
            <span className="purple"> Pakistan Air Force</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball and Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Awais Qarni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
