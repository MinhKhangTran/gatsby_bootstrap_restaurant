import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHome,
  FaClock,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row className="pt-5 pb-4 footer_container mb-4">
          <Col lg={8}>
            <h3 className="text-white">미당 - Midang</h3>
          </Col>
          <Col lg={2}>
            <p className="fw-bold d-flex align-items-center text-white">
              <FaHome className="me-2" size="1em" />
              Adresse
            </p>
            <ul className="list-unstyled text-white">
              <li>Usastraße 25</li>
              <li>61440 Oberursel</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p className="fw-bold d-flex align-items-center text-white">
              <FaClock className="me-2" size="1em" />
              Öffnungszeiten
            </p>
            <ul className="list-unstyled text-white">
              <li className="d-flex justify-content-between">
                <p className="mb-1">Mo</p>
                <div className="zeiten">
                  <p className="mb-1">12:00 - 14:30 Uhr</p>
                  <p className="mb-1">18:00 - 22:30 Uhr</p>
                </div>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-1">Di</p>
                <div className="zeiten">
                  <p className="mb-1">Ruhetag</p>
                </div>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-1">Mi - So</p>
                <div className="zeiten">
                  <p className="mb-1">12:00 - 14:30 Uhr</p>
                  <p className="mb-1">18:00 - 22:30 Uhr</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer_socials pb-4 d-flex justify-content-between align-items-center">
          <span className="lead text-white">
            &copy; {new Date().getFullYear()}, MKT. All rights reserved
          </span>
          <div className="socials text-white">
            <a href="https://twitter.com/">
              <FaTwitter className="social_icon" />
              <span className="visually-hidden">Twitter</span>
            </a>
            <a href="https://github.com/">
              <FaInstagram className="social_icon" />
              <span className="visually-hidden">Instagram</span>
            </a>
            <a href="https://github.com/">
              <FaFacebook className="social_icon" />
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
