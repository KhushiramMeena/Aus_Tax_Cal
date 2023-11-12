"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Image from "next/image";

function Section1_header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-light">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/images/logo.svg"
            width={100}
            height={50}
            alt="Picture of the author new"
          />

          <sup>
            <b style={{ fontSize: "10px" }}>TM</b>
          </sup>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          {/* nav-links */}
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#Exchanges">Exchanges</Nav.Link>
            <Nav.Link href="#works">How it Works?</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>

            <Nav>
              {/* <Button variant="outline-success" className='button-block'>Success</Button>{' '} */}
              <button style={{ color: "blue" }} className="button button1">
                Sign-in
              </button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Section1_header;
