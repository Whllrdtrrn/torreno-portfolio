import React from "react";
import ME from "../../assets/about.jpg";
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscRootFolderOpened} from 'react-icons/vsc'
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="aboutMe">
          <div className="aboutImage">
            <img src={ME} alt="..." />
          </div>
        </div>

        <div className="aboutContent">
          <p>
            Web Developer with 3+ years of experience building modern,
            responsive web applications and content management systems. I
            specialize in Vue.js, Nuxt 3, React, and Laravel, with expertise in
            CMS development and integration.
            <br></br>
            <br></br>
            I've successfully delivered multiple projects, including
            international e-commerce platforms, corporate web applications, and
            custom CMS solutions. My approach combines technical expertise with
            creative problem-solving to build solutions that are both functional
            and beautiful.
            <br></br>
            <br></br>
            When I'm not coding, I'm learning new technologies, contributing to
            the developer community, and always looking for the next exciting
            challenge to tackle.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
