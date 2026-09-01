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
import Petora from "../../assets/petora.png";
import Robinson from "../../assets/robinson.png";


import "./portfolio.css";

const data = [
  {
    id: 1,
    img: Petora,
    title: "Petora",
    subtitle: "Full-Stack Pet Platform",
    tag: "React · Express · PostgreSQL",
    link: "https://www.petora.com.ph/",
    description:
      "A full-stack pet platform built with React 18, Vite, and Tailwind CSS on the frontend, and Express.js with Prisma ORM and PostgreSQL on the backend. Includes a marketplace, vet booking, pet hotel reservations, an adoption system, community feed, and events. Stripe powers checkout sessions, payment intents, subscription billing, marketplace commissions, and webhook handling, while Socket.io drives real-time chat.",
    /* featured: true, */
  },
  {
    id: 12,
    img: Robinson,
    title: "Robinsons Department Store",
    subtitle: "Custom Website",
    tag: "Laravel · Nuxt · Tailwind",
    link: "https://robinsonsdepartmentstore.com.ph",
    description:
      "A digital flagship for Robinsons Department Store, one of the Philippines' most recognized retail chains. The website was redesigned to enhance product discovery, promotions visibility, and branch information for millions of monthly shoppers.",
  },
  {
    id: 2,
    img: Slmc,
    title: "St. Luke's Medical Center",
    subtitle: "Healthcare Website",
    tag: "Nuxt · Laravel · Tailwind",
    description:
      "St. Luke's Medical Center (SLMC) is a leading healthcare institution in the Philippines, known for world-class medical services, advanced technology, and highly skilled specialists, with hospitals in Quezon City and Bonifacio Global City.",
  },
  {
    id: 3,
    img: Megaworld,
    title: "Megaworld",
    subtitle: "Real Estate Website",
    tag: "Nuxt · Laravel · Tailwind",
    link: "https://www.megaworldcorp.com/",
    description:
      "Megaworld, founded by Dr. Andrew L. Tan in 1989, develops high-end residential and commercial properties. It pioneered the live-work-play township concept in the Philippines, with projects nationwide from Pampanga to Davao.",
  },
  {
    id: 4,
    img: Adb,
    title: "Asian Development Bank",
    subtitle: "Financial Institution Website",
    tag: "Nuxt · Laravel · Tailwind",
    description:
      "ADB is a leading multilateral development bank promoting sustainable and inclusive growth in Asia and the Pacific. Founded in 1966, it works with 69 members to deliver innovative solutions, build quality infrastructure, and protect the environment.",
  },
  {
    id: 5,
    img: Cli,
    title: "Cebu Landmasters, Inc.",
    subtitle: "Real Estate Website",
    tag: "Nuxt · Laravel · Tailwind",
    link: "https://www.cebulandmasters.com",
    description:
      "Cebu Landmasters, Inc. (CLI) is a leading Visayas and Mindanao developer specializing in residential, commercial, and township projects. Founded in 2003, CLI is known for its strong customer focus and commitment to community.",
  },
  {
    id: 6,
    img: AboitizLand,
    title: "Aboitiz Land",
    subtitle: "Real Estate Website",
    tag: "Nuxt · Laravel · Tailwind",
    link: "https://www.aboitizland.com",
    description:
      "Aboitiz Land, the real estate arm of the Aboitiz Group, was founded in 1994. Known for well-planned, high-quality communities, it pioneered projects like North Town Homes in Cebu and Seafront Residences in Batangas.",
  },
  {
    id: 7,
    img: Aev,
    title: "Aboitiz Equity Ventures",
    subtitle: "Conglomerate Website",
    tag: "Nuxt · Laravel · Tailwind",
    description:
      "Aboitiz Equity Ventures Inc. (PSE: AEV) is the public holding company of the Aboitiz Group with major investments in power, banking and financial services, food, infrastructure, land, and data science and artificial intelligence (DSAI).",
  },
  {
    id: 8,
    img: Suntrust,
    title: "Suntrust Properties Inc.",
    subtitle: "Real Estate Website",
    tag: "Nuxt · Laravel · Tailwind",
    link: "https://www.suntrust.com.ph",
    description:
      "Suntrust Properties, Inc. (SPI), a wholly-owned subsidiary of Megaworld, has been developing residential communities across Luzon, Visayas, and Mindanao since 1997.",
  },
  {
    id: 9,
    hidden: true,
    img: Monitoring,
    title: "Vaccimo",
    subtitle: "K-means Monitoring System",
    tag: "Python · Machine Learning",
    description:
      "Machine learning application for monitoring vaccine side effects using K-means clustering.",
  },
  {
    id: 10,
    hidden: true,
    img: IMG,
    title: "The Railway",
    subtitle: "Ticketing System",
    tag: "PHP · MySQL",
    description:
      "Online ticketing system for railway transportation with booking management.",
  },
  {
    id: 11,
    hidden: true,
    img: CrudPhp,
    title: "PHP CRUD",
    subtitle: "Full CRUD Application",
    tag: "PHP · MySQL",
    description:
      "Full CRUD operations application built with PHP and MySQL.",
  },
];

const visibleProjects = data.filter(project => !project.hidden);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio">
      <div className="container portContainer">
        <div className="portHeader">
          <span className="sectionLabel">Portfolio</span>
          <h2 className="portHeading">Projects I've Worked On</h2>
          <p className="portSubtext">
            Web applications and platforms I built for companies I've worked with.
          </p>
        </div>

        <div className="portCardBody">
          {visibleProjects.map(project => (
            <article
              key={project.id}
              className={`portCard ${project.featured ? "portCardFeatured" : ""}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-img-container">
                <img className="portfolio-img" src={project.img} alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="portfolio-subtitle">{project.subtitle}</p>
                <div className="portfolio-actions">
                  <span className="portfolio-link">
                    View Details <span>→</span>
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      className="portfolio-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      Visit Site ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>
            <div className="modal-image-container">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
