import React, {useState} from "react";
import IMG from "../../assets/Railway.webp";
import CrudPhp from "../../assets/crud-php.webp";
import Monitoring from "../../assets/monitoring.webp";
import Slmc from "../../assets/slmc-home.webp";
import Megaworld from "../../assets/megaworld-home.webp";
import Adb from "../../assets/Adb-home.webp";
import Cli from "../../assets/Cli-home.webp";
import AboitizLand from "../../assets/AboitizLand.webp";
import Aev from "../../assets/Aev.webp";
import Suntrust from "../../assets/Suntrust.webp";
import Petora from "../../assets/petora.webp";
import RideWrap from "../../assets/ridewrap.webp";
import Robinson from "../../assets/robinson.webp";
import Snaboitiz from "../../assets/snaboitiz.webp";
import CallbackCV from "../../assets/callbackcv.png";
import MateoDentalClinic from "../../assets/mateoclinic.png";
import Anvesso from "../../assets/anvesso.png";

import "./portfolio.css";



const data = [
  {
    id: 14,
    img: RideWrap,
    title: "RideWrap",
    description:
      "A production e-commerce platform for bike protection products, built on WordPress and Laravel within a monorepo architecture with Docker. Features integrated REST APIs, real-time session tracking, and WooCommerce for order processing, shipping, and inventory management.",
    categories: ["E-Commerce"],
    link: "https://www.ridewrap.com/",
  },
  {
    id: 15,
    img: CallbackCV,
    title: "CallbackCV",
    description: `A full-stack ATS-friendly resume builder for the Philippine job market. Features 76 designer 
    templates, live ATS scoring, tracked resume links, video intros with virtual backgrounds, cover   
    letters, email signatures, and a built-in PDF editor. Built with Next.js 15, React 19, TypeScript,
    Prisma + SQLite, Tailwind CSS, and Playwright for PDF generation. Payments via PayMongo (GCash,
    Maya, cards).`,
    categories: ["SaaS", "Resume Builder"],
    link: "https://web-production-fa8e2.up.railway.app/", // wala pang live link kasi local pa lang
  },
  {
    id: 16,
    img: MateoDentalClinic,
    title: "Mateo Dental Clinic",
    description: `A full-stack dental clinic management and online booking platform for Mateo
    Dental Clinic. Features appointment scheduling, patient records with dental charting,
    AI-powered chat receptionist, invoicing with PayMongo payments, SMS/email reminders,
    treatment plans, prescriptions, equipment tracking, and a customizable landing page CMS.
    Built with Next.js 15, React 19, TypeScript, Prisma + PostgreSQL, Tailwind CSS, and
    Anthropic Claude AI. Single-tenant deployment of the Petora Smile SaaS platform.`,
    categories: ["SaaS", "Healthcare"],
    link: "https://mateo-dental.vercel.app/",
  },
  {
    id: 17,
    img: Anvesso,
    title: "FitPass (Anvesso)",
    description: `AI-powered active lifestyle platform for the Philippines. Discover and book gyms,
    studios, courts, coaches, and recovery services nearby — then track workouts, nutrition,
    and body progress in one app. Built with NestJS, React Native (Expo), Next.js, PostgreSQL +
    PostGIS, and Redis.`,
    categories: ["Health & Fitness", "SaaS"],
    link: "https://fitpass-web-jade.vercel.app/",
  },
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
    noLink: true,
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
    noLink: true,
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
    noLink: true,
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

const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(visibleProjects.length / ITEMS_PER_PAGE);

  // Build pages array
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(visibleProjects.slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE));
  }

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

        <div className="portSlideshow">
          <div
            className="portTrack"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((pageProjects, pageIdx) => (
              <div className="portSlide" key={pageIdx}>
                <div className="portGrid">
                  {pageProjects.map(project => (
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
                          {project.link ? (
                            <a
                              href={project.link}
                              className="portVisit"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              Visit ↗
                            </a>
                          ) : project.noLink ? (
                            <span className="portNoLink">Not yet deployed</span>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="portNav">
            <button
              className="portNavBtn"
              onClick={() => setPage(p => p - 1)}
              disabled={page === 0}
            >
              ← Prev
            </button>
            <div className="portDots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`portDot ${i === page ? 'portDotActive' : ''}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
            <button
              className="portNavBtn"
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages - 1}
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>
            <div className="modal-scroll">
              <div className="modal-image-container">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-footer">
                  <div className="portTags">
                    {selectedProject.categories.map((cat, i) => (
                      <span className="portTag" key={i}>{cat}</span>
                    ))}
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{fontSize: '0.85rem', padding: '0.6rem 1.2rem'}}
                    >
                      Visit Site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
