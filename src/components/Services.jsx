import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;

export default function Services() {
  const servicesData = [
    {
      image: service1,
      title: "Software Development Courses",
      descrption:
        "We offer a variety of courses from frontend, backend, fullstack and mobile app development courses.",
    },
    {
      image: service2,
      title: "Find Jobs",
      descrption:
        "As a talent from Africa you can access a variety of jos based on your skillset and interest.",
    },
    {
      image: service3,
      title: "Hire Talents",
      descrption:
        "Companies can hire talented developers for their projects directly from our platform without stress.",
    },
  ];
  return (
    <Section className="flex column j-center a-center gap">
      <div className="title-container flex column gap-1">
        <div className="title text-center ">
          <h2>Services</h2>
        </div>
        <div className="subtitle text-center subdue">
          <h3>
            We at Freelansa have a variety of services we offer
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {servicesData.map(({ image, title, descrption }) => {
          return (
            <div className="service text-center flex column gap-1" key={title}>
              <div className="image">
                <img src={image} alt="servive" />
              </div>
              <h3 className="title">{title}</h3>
              <p className="description subdue">{descrption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
