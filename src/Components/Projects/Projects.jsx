import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import pic from "../../assets/applicatio.jpg";
import pic2 from "../../assets/nova.png";
import Ecom from "../../assets/one.jpg"
import { Si1Password } from 'react-icons/si'; 

import {
  SiHtml5,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiAngularjs,
  SiSpringboot,
  SGitlabi,
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
                  <img className="csbms"
                    src={pic}
                    alt="Customs Smart Border management System"
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
                  <SiPostgresql />
                  <SiSpringboot />
                  <SiAngularjs />
                  <SiDocker />
                  <SiJenkins />
                  
                </div>
                <div>
                  {/* <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>

            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">

<div className="project">
  <div className="project_videocontainer">
    <div>
      <img
        src={pic2}
        alt="Finance Data analysis"
      />
    </div>
  </div>
  <div className="project_information">
    <h2>Nova Financial solutions </h2>
    <p>
    This project focuses on the detailed analysis of a large corpus of financial news data to discover 
    correlations between news sentiment and stock market movements, aims to enhance its predictive analytics capabilities to significantly boost its financial forecasting accuracy and operational efficiency through advanced data analysis.
     As a Data Analyst at Nova Financial Solutions,  my primary task is to conduct a rigorous analysis of the financial news dataset.
    </p>
    <div>
      <SiPostgresql />
      <SiSpringboot />
      <SiAngularjs />
      <SiDocker />
      <SiJenkins />
      
    </div>
    <div>
      <a
        href="https://github.com/Yaadee/Finance_Data_Analysis"
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
                  <img className="project_img"
                    src={Ecom}
                    alt="Samrt Irrigation System"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> <span className="different"> Smart Irrigation system</span> </h2>
                <p>
                  
                       Smart Irrigation System is AI incorporated system that helps farms to manage and automate irrigation system with the help of IoT. It is developed with 
                       Arduino, Nodejs,WIFI module, Express, React, and MongoDB. It is designed to give water according to real data from farm based on plant type and growth level of that specific plant.
                       Based on the trained model and real time data the system either give water tp the palnt or reschedule for the next measurement through sensors and feeds the data to the model as well as to the user through the smart phone.
                </p>
                <div>
                  <SiExpress />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <SiNodedotjs />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://github.com/Yaadee/SmartIrrigation"
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
