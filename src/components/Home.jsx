import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import free from "../assets/free.png";
import Button from "./Button";

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem 0;
      gap: 1rem;
    }
  }
`;

export default function Home() {
  return (
    <Section className="flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
        </div>
        <div className="title">
          <h1>The Easiest Way to Find and Hire Talented Freelancers</h1>
        </div>
        <div className="description">
          <p className="subdue">
            Work with the best freelance talents from Africa on our flexible
            platform
          </p>
        </div>
        <div className="buttons flex gap-1">
          <div> 
            <Button text="Join as a Freelancer" icon={<FaChevronCircleRight />} />
          </div>
          <Button
            text="Join as a Company"
            icon={<FaChevronCircleRight />}
            subduedButton
          />
        </div>
      </div>
      <div className="image">
        <img src={free} alt="home" className="half-width" />
      </div>
    </Section>
  );
}
