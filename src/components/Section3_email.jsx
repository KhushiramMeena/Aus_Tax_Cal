"use client";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React, { useState, useEffect } from "react";

const Section3_email = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile && (
        <>
          <Card body>
            <Row
              style={{
                backgroundColor: "#0052FE",
                border: "1px #0052FE",
                borderRadius: "5px",
              }}
              className="my-5 mx-5"
            >
              <Col className="text-center my-2" sm={4}>
                <img src="../images/email.png" alt="" />
              </Col>
              <Col sm={8} className="text-light mt-4 my-2">
                <Row>
                  <h4>
                    Stay up to date with latest crypto news and events.
                    Subscribe to our newsletter
                  </h4>
                </Row>
                <Row>
                  <form className="form-inline  d-flex">
                    <div style={{ width: "500px" }} className="form-group ">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                      />
                    </div>
                    <button
                      style={{ width: "80px" }}
                      type="submit"
                      className="btn bg-warning"
                    >
                      Submit
                    </button>
                  </form>
                </Row>
              </Col>
            </Row>
          </Card>
        </>
      )}
    </div>
  );
};

export default Section3_email;
