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
            Full Stack Developer with 4+ years of experience delivering production web applications, e-commerce platforms, and SaaS products for enterprise and corporate clients.
          </p>
          <p>
            I build across the full stack — from database design and API development to responsive UI implementation and cloud deployment. I've shipped platforms with payment integrations, real-time features, AI-powered systems, and CI/CD pipelines for both enterprise clients and personal projects.
          </p>

        </div>
      </div>
    </section>
  );
};
export default About;
