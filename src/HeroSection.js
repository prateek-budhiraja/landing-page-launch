import React, { useState } from "react";
import { Col, Row, InputGroup, Button, Input } from "reactstrap";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  return (
    <Row>
      <Col className="p-4 col-12 col-sm-12 col-md-6 col-lg-6">
        <img className="apple-image" src="./images/apple.jpg" />
      </Col>
      <Col className="p-4 col-12 col-sm-12 col-md-6 col-lg-6">
        <h1 className="mb-5">Out of league.</h1>
        <h4>
          I don't even want to think about what life would be like without
          appleeeee. You too?
          <br /> <br />
          Signup with your email to never get any appleeeee photos to make your
          day bright! ☀️
        </h4>
        <InputGroup className="form mt-5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter you email"
          />
          <Button
            className="btn bg-transparent btn-outline-danger"
            onClick={() => setEmail("")}
          >
            Sign Up
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default HeroSection;
