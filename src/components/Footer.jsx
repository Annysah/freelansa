import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const FooterStyles = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .spacemen {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
`;


export default function Footer() {
  const firstLinkSection = [
    "About",
    "Careers",
    "Blog",
    "Legal & Privacy",
    "Cookie policy",
  ];

  const secondLinkSection = [
    "Courses",
    "Tips & Turoials",
    "What is freelanceing?",
    "How to become a freelance software developer",
    "Portfolio project ideas for freelance developers",
  ];

  const thirdLinkSection = [
    "How to Hire Talents from Africa",
    "Direct Contract",
    "Visit our Marketplace",
    "Payroll Services",
  ];
  const socialMedia = [<BsFacebook />, <BsTwitter />, <BsInstagram />];
  return (
    <FooterStyles className="flex column gap">
      <div className="upper-footer">
        <div className=" flex column gap-1">
          <div className="brand">
            <h2>Freelansa</h2>
          </div>
          <div className="address">
            <p>10 Adeola Street, 4th Floor, Victoria Island, Lagos.</p>
          </div>
          <div className="info">
            <span>Telephone : +234-802-000-0000</span><br />
            <span>Email : hello@traceafrica.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialMedia.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {firstLinkSection.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>For Talent</h3>
          </div>
          <ul className="flex column gap-half">
            {secondLinkSection.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>

        <div className=" flex column gap-1">
          <div className="title">
            <h3>For Client</h3>
          </div>
          <ul className="flex column gap-half">
            {thirdLinkSection.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="col1">
          <span>&copy;2022 Freelansa</span>
        </div>
        <div className="col2 flex a-center gap">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </FooterStyles>
  );
}

