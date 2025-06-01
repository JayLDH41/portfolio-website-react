import React from "react";
import "./home.css";
const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://www.linkedin.com/in/ding-heng-lee-a17474291/"
        className="home_social-link"
        target="_blank"
        rel="noopener noreferrer" // prevents reverse tabnabbing (suggested by ESLint)
      >
        <i className="fa fa-linkedin-square"></i>
      </a>

      <a
        href="https://github.com/JayLDH41"
        className="home_social-link"
        target="_blank"
        rel="noopener noreferrer" // prevents reverse tabnabbing (suggested by ESLint)
      >
        <i className="fa fa-github-square"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
