import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgAS from "../../assets/image/l6/png/l6-download-appstore.png";
import imgGP from "../../assets/image/l6/png/l6-download-gplay.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-17 pt-lg-21">
        <Container>
          <div className="footer-top pb-lg-14">
            <Row>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Company</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Press
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Product</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        News
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Help desk
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Legal</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/#"
                        className="gr-text-9 gr-text-color gr-hover-text-red"
                      >
                        Return Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3" className="offset-lg-2">
                <div className="single-footer mb-13 mb-lg-9">
                  <div className="download-block">
                    <p className="download-title gr-text-11 mb-9">
                      Download Our App
                    </p>
                    <div className="download-btns">
                      <Link to="/#">
                        <img
                          src={imgAS}
                          alt=""
                          className="mb-5 w-100 w-xs-auto"
                        />
                      </Link>
                      <Link to="/#">
                        <img src={imgGP} alt="" className="w-100 w-xs-auto" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p className="copyright-text gr-text-11 mb-6 mb-lg-0 gr-text-color text-center text-lg-left">
                  © 2020 Copyright, All Right Reserved, Made by Grayic with
                  <i className="icon icon-heart-2-2 text-red align-middle ml-2"></i>
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ml-7">
                    <Link to="/#" className="gr-text-color gr-hover-text-red">
                      <i className="icon icon-logo-twitter"></i>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link to="/#" className="gr-text-color gr-hover-text-red">
                      <i className="icon icon-logo-facebook"></i>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link to="/#" className="gr-text-color gr-hover-text-red">
                      <i className="icon icon-instant-camera-2"></i>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link to="/#" className="gr-text-color gr-hover-text-red">
                      <i className="icon icon-logo-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
