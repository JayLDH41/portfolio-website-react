import React from "react";
import "./about.css";
import Logo from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Logo} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Lee Ding Heng, a web developer from Johor, Malaysia. I have
              rich knowledge in web design and building. My familiar framework
              is ReactJS.
            </p>
            <a
              href="https://drive.google.com/file/d/1-y-h3wj4XhFpDru5zcC1FqXs_1VPTxMP/view?usp=sharing"
              className="btn"
            >
              Download Resume
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX Design</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Photography</h3>
                <span className="skills_number">60%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
