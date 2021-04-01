import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import MapGoogle from "../components/MapGoogle";



const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
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
          <br />
          <br />
          <div
          className="google-map fluid-map-height position-relative overflow-hidden"
          id="googleMap"
          css={`
            position: relative;
            overflow: hidden;
          `}
        >
          <div
            css={`
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: rgb(229, 227, 223);
            `}
          >
            <MapGoogle />
          </div>
        </div>
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
