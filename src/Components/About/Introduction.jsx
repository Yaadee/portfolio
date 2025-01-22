import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/1212.jpg";
export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
              I’m a developer passionate about developing web applications and data engineering. I specialize in creating, insightfull visualizations for 
              data-driven applications and building machine learning models.  
              My favorite work lies at the 
              intersection of design and development, creating experiences
               that not only look great but are meticulously built for performance and usability.{" "}
              </h4>
              <h4>
                
                I have graduated in  Computer Science and Engineering
                from{" "}
                <span className="different">
                  Adama Science and Technology  University. 
                </span>
                </h4>
                <h4>
                Currently, I'm a Senior Full stack Engineer at Ethiopian Artificial Intlligence Institute  <span className="different"> EAII</span>, specializing in DDD, Hexagonal develoment with Spring boot and Angularjs.
              </h4>
              
  
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
