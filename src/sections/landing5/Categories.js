import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l8/png/category-1.png";
import imgC2 from "../../assets/image/l8/png/category-2.png";
import imgC3 from "../../assets/image/l8/png/category-3.png";
import imgC4 from "../../assets/image/l8/png/category-4.png";
import imgC5 from "../../assets/image/l8/png/category-5.png";
import imgC6 from "../../assets/image/l8/png/category-6.png";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area --> */}
      <div className="category-area mt-n29 pb-19 pb-lg-21">
        <Container>
          <Row>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Kuzhina
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC4} alt="" className="" />
                  </div>
                </div>
              </Link>
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Shkallë druri
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC2} alt="" className="" />
                  </div>
                </div>
              </Link>
              

              
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
                 <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Tavolina
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC6} alt="" className="" />
                  </div>
                </div>
              </Link>
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Dhoma Gjumi
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC3} alt="" className="" />
                  </div>
                </div>
              </Link>
           
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Dhoma të ndejës
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC1} alt="" className="" />
                  </div>
                </div>
              </Link>
              
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                      Zyre
                    </h3>
                  </div>
                  <div className="category-img text-center">
                    <img src={imgC5} alt="" className="" />
                  </div>
                </div>
              </Link>
            </Col>
         
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
