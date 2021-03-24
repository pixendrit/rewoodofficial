import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/about-banner.png";
import imgC1 from "../assets/image/inner/about-content-1.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
           style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Ju mirëpresim!</h2>
                  <p className="gr-text-8 mb-0">
                    Mund të na vizitoni në showroomin tonë
                  </p>
                </div>
              </Col>
             
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    Magjistralja Prishtinë-Ferizaj-Shkup
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                  Nga zanati i vjetër e deri tek makinat më moderne të prodhimit, ne e ndryshojmë pamjen e shtëpisë tuaj & perspektivën e vizitorëve të saj.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              
              <Col
                lg="3"
                md="4"
                xs="6"
                className="mb-13 d-flex align-items-center"
              >
                <div className="mt-xs-n25">
                  <h3 className="gr-text-6">
                    Rezervoni takimin tuaj
                  </h3>
                  <a
                    href="tel:+38348222284"
                    className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-5"
                  >
                    Telefono në +383 48 222 284{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
