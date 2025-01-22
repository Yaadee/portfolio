import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import pic from "../../assets/p1.png";
import Ecom from "../../assets/Ecom.jpg"
import { Si1Password } from 'react-icons/si'; 

import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={pic}
                    alt="EAII Project management system"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ethiopian Artificial intelligence Institute Customs Smart Border management System</h2>
                <p>
                Smart Border Management System is a web-based application which is built with Spring Boot and Angular js leveraging the 
                power of Artificial Intelligence. DDD and Hexagonal development is used.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <Si1Password />
                </div>
                <div>
                  <a
                    href="https://github.com/AbdiElos/PMS-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Ecom}
                    alt="ERRP"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> Electronic Retailer rival platform</h2>
                <p>
                  
The Electronic Retailer Rival Platform is a dynamic e-commerce solution developed using the MERN stack (MongoDB, Express.js, React, Node.js). It is designed to compete with leading online retailers by offering a seamless shopping experience, robust product management, and secure transaction processing. This platform integrates modern web technologies to provide a scalable and efficient solution for electronic retail businesses.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://github.com/AbdiElos/finalErp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      
    </>
  );
};
