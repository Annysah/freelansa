import React from "react";
import styled from "styled-components";

const Section = styled.section`
  .roadmap {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
      height: 2px;
    }
    .map {
      min-width: 300px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        height: 100%;
        width: 120%;
        z-index: -1;
        border-top: 1px solid var(--text-blue);
        opacity: 0.5;
      }
      .icon {
        background-color: var(--primary);
        color: var(--background);
        padding: 1rem 1.2rem;
        border-radius: 100%;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;

    .roadmap {
      overflow: initial;
      padding-bottom: 2rem;
      .map {
        min-width: 100%;
      }
      .map::after {
        border-top: none;
      }
    }
  }
`;


export default function Roadmap() {
  const data = [
    {
      name: "Create an Account",
      description:
        "With our platform you can kickstart your journey by either creating an account as a talent or as company looking to hire",
      icon: "1." ,
    },
    {
      name: "Take the Assessment",
      description:
        "As a talent, you must take the assessment test. This will help us determine what's best fit for you and match you with the right company.",
      icon: "2.",
    },
    {
      name: "Update your Profile",
      description:
        "After passing the assessment tests which is the minimum requirement, you can now proceed to updating your profile on the dashboard.",
      icon: "3.",
    },
    {
      name: "Get Matched",
      description:
        "Once all the previous steps are completed, we then match you with the company that suits your skillsets highlihted on your dahsboard.",
      icon: "4.",
    },
  ];
  return (
    <Section className="flex column gap">
      <div className="title-container text-center">
        <div className="title">
          <h2>Roadmap to Getting Started</h2>
        </div>
      </div>
      <div className="roadmap flex gap">
        {data.map(({ name, description, icon }, index) => {
          return (
            <div className="map flex column gap-1 a-start" key={index}>
              <div className="icon flex j-center a-center">{icon}</div>
              <h3 className="name">{name}</h3>
              <p className="description subdue">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

