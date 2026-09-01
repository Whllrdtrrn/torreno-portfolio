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
import Snaboitiz from "../../assets/snaboitiz.png";

import "./portfolio.css";



const data = [
  {
    id: 1,
    img: Petora,
    title: "Petora",
    description:
      "A full-stack pet platform with marketplace, vet booking, pet hotel reservations, adoption system, community feed, and real-time chat. Powered by Stripe payments and Socket.io.",
    categories: ["Pet Platform"],
    link: "https://www.petora.com.ph/",
  },
  {
    id: 12,
    img: Robinson,
    title: "Robinsons Department Store",
    description:
      "A digital flagship for one of the Philippines' most recognized retail chains. Redesigned to enhance product discovery, promotions visibility, and branch information.",
    categories: ["Retail", "Custom Website"],
    link: "https://robinsonsdepartmentstore.com.ph",
  },
  {
    id: 2,
    img: Slmc,
    title: "St. Luke's Medical Center",
    description:
      "Corporate website for a leading healthcare institution in the Philippines, known for world-class medical services and advanced technology.",
    categories: ["Healthcare"],
  },
  {
    id: 3,
    img: Megaworld,
    title: "Megaworld",
    description:
      "Website for one of the Philippines' largest real estate developers. Pioneered the live-work-play township concept with projects nationwide.",
    categories: ["Real Estate"],
    link: "https://www.megaworldcorp.com/",
  },
  {
    id: 4,
    img: Adb,
    title: "Asian Development Bank",
    description:
      "Website for a leading multilateral development bank promoting sustainable and inclusive growth in Asia and the Pacific.",
    categories: ["Finance"],
  },
  {
    id: 5,
    img: Cli,
    title: "Cebu Landmasters, Inc.",
    description:
      "Corporate site for a leading Visayas and Mindanao developer specializing in residential, commercial, and township projects.",
    categories: ["Real Estate"],
    link: "https://www.cebulandmasters.com",
  },
  {
    id: 6,
    img: AboitizLand,
    title: "Aboitiz Land",
    description:
      "Website for the real estate arm of the Aboitiz Group, known for well-planned, high-quality communities across Luzon and Visayas.",
    categories: ["Real Estate"],
    link: "https://www.aboitizland.com",
  },
  {
    id: 7,
    img: Aev,
    title: "Aboitiz Equity Ventures",
    description:
      "Corporate site for the public holding company of the Aboitiz Group with investments in power, banking, food, infrastructure, and DSAI.",
    categories: ["Conglomerate"],
  },
  {
    id: 13,
    img: Snaboitiz, // TODO: replace with SN Aboitiz Power screenshot (src/assets/snaboitiz.png)
    title: "SN Aboitiz Power",
    description:
      "A corporate digital presence for SN Aboitiz Power, a joint venture between SN Power and Aboitiz Power. The website communicates the company's commitment to renewable hydropower energy and its operations across the Philippines.",
    categories: ["Energy & Power"],
    link: "https://www.snaboitiz.com/",
  },
  {
    id: 8,
    img: Suntrust,
    title: "Suntrust Properties Inc.",
    description:
      "Website for a Megaworld subsidiary developing residential communities across Luzon, Visayas, and Mindanao since 1997.",
    categories: ["Real Estate"],
    link: "https://www.suntrust.com.ph",
  },
  {
    id: 9,
    hidden: true,
    img: Monitoring,
    title: "Vaccimo",
    description:
      "Machine learning application for monitoring vaccine side effects using K-means clustering.",
    categories: ["Machine Learning"],
  },
  {
    id: 10,
    hidden: true,
    img: IMG,
    title: "The Railway",
    description:
      "Online ticketing system for railway transportation with booking management.",
    categories: ["Web App"],
  },
  {
    id: 11,
    hidden: true,
    img: CrudPhp,
    title: "PHP CRUD",
    description:
      "Full CRUD operations application built with PHP and MySQL.",
    categories: ["Web App"],
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

        <div className="portGrid">
          {visibleProjects.map(project => (
            <article
              key={project.id}
              className="portCard"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portImgWrap">
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>
              <div className="portBody">
                <h3 className="portTitle">{project.title}</h3>
                <p className="portDesc">{project.description}</p>
                <div className="portFooter">
                  <div className="portTags">
                    {project.categories.map((cat, i) => (
                      <span className="portTag" key={i}>{cat}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      className="portVisit"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      Visit ↗
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
              <p>{selectedProject.description}</p>
              <div className="portTags" style={{marginTop: '1rem'}}>
                {selectedProject.categories.map((cat, i) => (
                  <span className="portTag" key={i}>{cat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
