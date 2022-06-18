import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import jobs from "../assets/jobs.png";
import Button from "./Button";

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;

export default function AboutUs() {
  return (
    <Section className="flex a-center gap">
      <div className="content flex column gap">
        <div className="title-container flex column j-center a-center gap-1">
          <div className="subtitle subdue">
            <h3>About Us</h3>
          </div>
          <div className="title">
            <h2>Why would You Choose Freelansa?</h2>
          </div>
        </div>
        <div className="flex gap">
          <div className="info flex column gap a-start j-center">
            <p className="subdue">Flexible Platform –</p>
            <p className="subdue">
              With Freelansa you can get started with finding freelance developers jobs, internships and gigs in minutes as a freelancer from Africa.
              All you need to do is to create an account and take the assessment tests.
              <br />
              <br />
              We also do the matching of talents with companies and take away the hassle of hiring processes for companies.
            </p>
            <Button text="Get Started" icon={<FaChevronCircleRight />} />
          </div>
          <div className="image">
            <img src={jobs} alt="about" className="half-width" />
          </div>
        </div>
      </div>
    </Section>
  );
}
