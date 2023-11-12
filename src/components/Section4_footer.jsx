"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
  faTelegram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import React, { useState, useEffect } from "react";

const Section4_footer = () => {
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
    <div className=" bg-dark">
      <div>
        <Container>
          {!isMobile && (
            <Row className="text-light">
              <Col className="my-3 ">
                <img src="../images/LogoWhite.svg" alt="" />
              </Col>
              <Col xs={5}> </Col>
              <Col className="my-3 social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="iconss" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="iconss" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="iconss" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="iconss" />
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} className="iconss" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="iconss" />
                </a>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogle} className="iconss" />
                </a>
              </Col>
              <hr />
            </Row>
          )}

          {isMobile && (
            <Row className="text-light">
              <Col xs lg="2">
                <h4 className="text-center ">KoinX</h4>
              </Col>
              <Col md="auto"></Col>
              <Col xs lg="2" className="text-center">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="iconss" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="iconss" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="iconss" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="iconss" />
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} className="iconss" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="iconss" />
                </a>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogle} className="iconss" />
                </a>
              </Col>
            </Row>
          )}

          {/* all-links */}
          <Row className="text-light">
            <Col>
              <ul className="list">
                <li className="my-2">
                  <b>Crypto Taxes for</b>
                </li>
                <li className="my-2">Individuals and investors</li>
                <li className="my-2">Tax Professionals and Accountants</li>
                <li className="my-2"> Exchanges and Web3 projects</li>
                {!isMobile && (
                  <li className="my-2">
                    <img src="../images/foot.png" alt="image!"></img>
                  </li>
                )}
              </ul>
            </Col>
            <Col>
              <ul className="list">
                <li className="my-2">
                  <b>Free Tools</b>
                </li>
                <li className="my-2">Crypto Prices Live</li>
                <li className="my-2">Crypto Tax Calculator</li>
                <li className="my-2"> Crypto Tax Saving Speculator</li>
                <li className="my-2">Crypto Profit Calculator</li>
                <li className="my-2">Crypto Convertor</li>
                <li className="my-2">Crypto Staking ROI Calculator</li>
              </ul>
            </Col>
            <Col>
              <ul className="list">
                <li className="my-2">
                  <b>Resource Center</b>
                </li>
                <li className="my-2">Crypto Tax Guides</li>
                <li className="my-2">Dumb Ways To Lose Money</li>
                <li className="my-2"> Crypto Tax Saving Guide</li>
                <li className="my-2">Blogs</li>
                <li className="my-2">Crypto Buying Guides</li>
                <li className="my-2">Crypto Staking Guides</li>
                <li className="my-2">Crypto Mining Guides</li>
                <li className="my-2">Crypto Price Predictions</li>
              </ul>
            </Col>
            <Col>
              <ul className="list">
                <li className="my-2">
                  <b>Help And Support</b>
                </li>
                <li className="my-2">Product Guides</li>
                <li className="my-2">How To Guides</li>
                <li className="my-2">Templates</li>
                <li className="my-2">Contact us</li>
              </ul>
            </Col>
            <Col>
              <Row>
                <Col>
                  <ul className="list">
                    <li className="my-2">
                      <b>Company</b>
                    </li>
                    <li className="my-2">About Us</li>
                    <li className="my-2">Backed by</li>
                    <li className="my-2">Media and Press</li>
                    <li className="my-2">
                      Careers
                      <Button href="#">
                        <b>We're hiring</b>
                      </Button>
                    </li>
                    <li className="my-2">Security</li>
                    <li className="my-2">Refund Policy</li>
                    <li className="my-2">Brand Assets</li>
                    <li className="my-2">Terms of use</li>
                    <li className="my-2">Privacy Policy</li>
                  </ul>
                </Col>
                {isMobile && (
                  <Col>
                    <ul className="list">
                      <li className="my-2">
                        <img
                          src="../images/foot.png"
                          width="120px"
                          height="120px"
                          alt="image!"
                        ></img>
                      </li>
                    </ul>
                  </Col>
                )}
              </Row>
            </Col>
            <hr />
            <p className="text-center">
              &copy; All rights reserved by Simplify Infotech Pvt. Ltd.
            </p>
          </Row>
        </Container>
      </div>
    </div>
  );
};

{
  /* <SocialIcon url="www.vimeo.com" />
// renders: meetup icon
<SocialIcon url="www.meetup.com" />
// renders: default icon
<SocialIcon url="www.pinterest.com" /> */
}

export default Section4_footer;
