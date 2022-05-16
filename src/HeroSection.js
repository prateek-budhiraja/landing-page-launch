import React from "react";
import { Col, Row, InputGroup, Button, Input, Container } from "reactstrap";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const HeroSection = () => {
  return (
    <Row className="">
      <Col className="col-lg-7 col-sm-12 col-12 col-md-12 imgcol">
        <img className="img-responsive" src="./images/apple.jpg" />
      </Col>
      <Col className="content col-lg-4 col-sm-12 col-12 col-md-12 textcol">
        <h1>Opening soon.</h1>
        <h4>
          Our flagship location is opening this fall. Signup with your email
          address to get notified.
        </h4>
        <InputGroup className="searchbox">
          <Input type="text" placeholder="Search you queary" />
          <Button>Sign up</Button>
        </InputGroup>
        <Row>
          <Col>
            <h3>Contact</h3>

            <p>
              <HiPhone /> +91 8898741577
            </p>
            <p>
              <HiOutlineMail /> Demo@yahooo.com
            </p>
          </Col>
          <Col>
            <h3>Location</h3>
            <p>
              <HiLocationMarker />
              123 Demo street, Nalashopara
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default HeroSection;
