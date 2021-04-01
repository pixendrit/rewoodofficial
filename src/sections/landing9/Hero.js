import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgP from "../../assets/image/main.svg";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative pt-25 pt-lg-31 pb-15 pb-lg-27 bg-gray-910">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xl="8"
              lg="9"
              md="11"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <div className="hero-content text-center">
                <div className="hero-img mb-12">
                  <img src={imgP} alt="" className=" rounded-8" />
                </div>
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-9">
                FURNITURE
                </h4>
                
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
