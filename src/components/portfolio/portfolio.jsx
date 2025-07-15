import React, {useState} from "react";
import IMG from "../../assets/Railway.JPG";
import CrudPhp from "../../assets/crud-php.jpg";
import Monitoring from "../../assets/monitoring.JPG";
import Slmc from "../../assets/slmc-home.png";
import Megaworld from "../../assets/megaworld-home.png";
import Adb from "../../assets/Adb-home.png";
import Cli from "../../assets/Cli-home.png";
import AboitizLand from "../../assets/AboitizLand.png";
import Aev from "../../assets/Aev.png";
import Suntrust from "../../assets/Suntrust.png";

import "./portfolio.css";

const data = [
  {
    id: 1,
    img: Slmc,
    title: `St. Luke's Medical Center (SLMC)`,
    description:
      "St. Luke’s Medical Center (SLMC) is a leading healthcare institution in the Philippines, known for world-class medical services, advanced technology, and highly skilled specialists, with hospitals in Quezon City and Bonifacio Global City.",
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 2,
    img: Megaworld,
    title: "Megaworld",
    description: "Megaworld, founded by Dr. Andrew L. Tan in 1989, develops high-end residential and commercial properties. It pioneered the live-work-play township concept in the Philippines, with projects nationwide from Pampanga to Davao.",
    git: "https://github.com/Whllrdtrrn/The-RailWay.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 3,
    img: Adb,
    title: "Asian Development Bank (ADB)",
    description: "ADB is a leading multilateral development bank promoting sustainable and inclusive growth in Asia and the Pacific. Founded in 1966, it works with 69 members to deliver innovative solutions, build quality infrastructure, and protect the environment.",
    git: "https://github.com/Whllrdtrrn/torreno-portfolio.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 4,
    img: Cli,
    title: "Cebu Landmasters, Inc. (CLI)",
    description: "Cebu Landmasters, Inc. (CLI) is a leading Visayas and Mindanao developer specializing in residential, commercial, and township projects. Founded in 2003, CLI is known for its strong customer focus and commitment to community.",
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 5,
    img: AboitizLand,
    title: "Aboitiz Land",
    description: "Aboitiz Land, the real estate arm of the Aboitiz Group, was founded in 1994. Known for well-planned, high-quality communities, it pioneered projects like North Town Homes in Cebu and Seafront Residences in Batangas. Expanding across Luzon and Visayas, Aboitiz Land continues to innovate to meet growing residential needs.",
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 6,
    img: Aev,
    title: "Aboitiz Equity Ventures Inc. (​​​​​AEV)",
    description: `Aboitiz Equity Ventures Inc. (PSE: AEV) is the public holding company of the Aboitiz Group with major investments in power, banking and financial services, food, infrastructure, land, and data science and artificial intelligence (DSAI).`,
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 7,
    img: Suntrust,
    title: "Suntrust Properties Inc.",
    description: `Suntrust Properties, Inc. (SPI), a wholly-owned subsidiary of Megaworld, has been developing residential communities across Luzon, Visayas, and Mindanao since 1997. With Stateland, Inc., it brings over 65 years of combined expertise in delivering quality homes to Filipino families.`,
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 8,
    img: Monitoring,
    title:
      "Implementation of K-means Algorithm on Vaccimo: An Adverse Side Effect Monitoring System for Covid-19 Vaccine",
    description:
      "Machine learning application for monitoring vaccine side effects using K-means clustering.",
    git: "https://github.com/Whllrdtrrn/Finals.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 9,
    img: IMG,
    title: "The Railway Ticketing System",
    description:
      "Online ticketing system for railway transportation with booking management.",
    git: "https://github.com/Whllrdtrrn/The-RailWay.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
  {
    id: 10,
    img: CrudPhp,
    title: "PHP Crud",
    description: "Full CRUD operations application built with PHP and MySQL.",
    git: "https://github.com/Whllrdtrrn/torreno-portfolio.git",
    drib: "https://dribbble.com/whllrdtrrn25?onboarding=true",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = project => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portContainer">
        <div className="portCardBody">
          {data.map(project => {
            const {id, img, title, git, drib} = project;
            return (
              <article
                key={id}
                className="portCard"
                onClick={() => openModal(project)}
              >
                <div className="portfolio-img-container">
                  <img className="portfolio-img" src={img} alt={title} />
                  <div className="portfolio-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-container">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              {/*<p>{selectedProject.description}</p>*/}
              <p dangerouslySetInnerHTML={{ __html: selectedProject.description }}></p>
              {/*<div className="modal-buttons">
                                <a href={selectedProject.git} className='btn' target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                                <a href={selectedProject.drib} className='btn btn-primary' target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </div>*/}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
