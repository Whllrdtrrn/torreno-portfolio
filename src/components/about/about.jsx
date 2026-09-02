import React from "react";
import ME from "../../assets/about.webp";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutImageWrap">
            <img src={ME} alt="Whillourd Torreno" />
          </div>
        </div>

        <div className="aboutContent">
          <span className="sectionLabel">About Me</span>

          <h2 className="aboutHeading">
            Building creative &amp; impactful digital solutions
          </h2>

          <p>
            Full Stack Web Developer with 3+ years of experience building
            responsive web applications and REST APIs using React, Next.js,
            Vue.js, Laravel, PHP, and JavaScript. Experienced in frontend and
            backend development, database management, API integrations, and
            third-party services, with knowledge of workflow automation.
          </p>
          <p>
            I've successfully delivered multiple projects, including a full-stack
            pet platform with Stripe payments and real-time chat, corporate web
            applications for property and banking clients, and custom CMS
            solutions.
          </p>

        </div>
      </div>
    </section>
  );
};
export default About;
