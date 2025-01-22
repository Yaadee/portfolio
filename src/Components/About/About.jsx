import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { BsMedium } from "react-icons/bs";
import { Introduction } from "./Introduction";

import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Yadasa Tarafa</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Junior Data Engineer, MERN Full Stack Developer, Java Full Stack developer.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Yaadee/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:yadasat437@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+251927463201"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/yadasa/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://medium.com/@yadasat437"
            aria-label="Medium"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <BsMedium/>
          </a>
        </div>

      </div>
      <Introduction />
      
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
