import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/Logo.jpg";

import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={`header center ${themename}`}>
        <div className="header-logo-container">
          <a href="#home" className="link">
            <img className="logo" src={Image} alt="logo" />
          </a>
        </div>
        <Navbar />
      </header>
    </>
  );
};
