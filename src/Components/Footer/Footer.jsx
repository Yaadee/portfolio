
import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

import { Footer as FlowbiteFooter } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsMedium,
} from "react-icons/bs";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <FlowbiteFooter container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Yadasa's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#" target="_blank" rel="noopener noreferrer">
                  Data Science projects
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="/about" target="_blank" rel="noopener noreferrer">
                  Yadasa's Blog
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="https://www.github.com/Yaadee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="https://www.linkedin.com/in/yadasa">LinkedIn</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="https://medium.com/@yadasat437">Medium</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="#"
            by="Yadasa's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsLinkedin} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="https://github.com/Yaadee" icon={BsGithub} />
            <FlowbiteFooter.Icon href="#" icon={BsMedium} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};
