import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/photo.jpg";


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
                Hi Everyone, My name is{" "}
                <span className="different">Yadasa Tarafa </span> from{" "}
                <span className="different">
                  {" "}
                  Addis Ababa Ethiopia
                </span>
                Graduated in  Computer Science and Engineering
                from{" "}
                <span className="different">
                  Adama Science and Technology  University
                </span> AI and Geospatial Researcher at Ethiopian Artificial Intelligence Institute
               
               
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Junior Data Analyst and Engineer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Machine learning Enthusiast{" "}
              </h4>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
