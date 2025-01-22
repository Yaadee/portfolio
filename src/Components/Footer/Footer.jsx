import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import { FaLinkedin, FaMedium, FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <footer className={`footer section ${themename}`}>
      <div className="footer_container">
        <h2 className="footer_title">Yadasa Tarafa</h2>

        <p className="footer_copy">
          © {new Date().getFullYear()} Yadasa Tarafa. All Rights Reserved. Built with ❤️ and dedication.
        </p>

        <div className="footer_links">
          <a
            href="https://www.linkedin.com/in/yadasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Yaadee"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://medium.com/@yadasat437"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon medium"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
          <a
            href="https://twitter.com/Yaadeek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon twitter"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
