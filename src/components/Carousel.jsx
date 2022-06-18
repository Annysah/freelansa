import React from "react";
import styled from "styled-components";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.png";

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;

const Carousel = () => {
  return (
    <>
      <Section className="flex column j-center a-center gap">
      <div className="title-container flex column gap-1">
        <div className="title text-center subdue">
          <h2>Trusted By</h2>
        </div>
      </div>
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img src={logo1} alt="" width="250" height="200" />
          </div>
          <div className="slide">
            <img src={logo2} alt="" width="250" height="200" />
          </div>
          <div className="slide">
            <img src={logo3} alt="" width="250" height="200" />
          </div>
          <div className="slide">
            <img src={logo4} alt="" width="250" height="200" />
          </div>
        </div>
      </div>
    </Section>
    </>
  );
};

export default Carousel;
