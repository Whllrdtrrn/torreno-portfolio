import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import SkillsSection from './SkillsSection'
import './experience.css'


// ============ Work Experience — matched to resume ============
const workHistory = [
    {
        role: 'Full Stack Developer',
        company: 'Razza Consulting',
        period: '10/2025 - 10/2026',
        location: 'Remote',
        points: [
            'Maintained and enhanced a production e-commerce platform within a monorepo architecture with containerized development.',
            'Developed and integrated cross-platform REST APIs using OAuth2 for secure communication between two separate codebases.',
            'Built a real-time session tracking and event logging system for user analytics across the storefront.',
            'Developed custom plugins for service logging, quality checking, and design file management.',
            'Integrated e-commerce REST API with internal backend for order processing, shipping, and inventory management.',
            'Deployed updates to production via CI/CD pipelines with staging and production branch workflow.'
        ]
    },
    {
        role: 'Web Developer',
        company: 'DesignBlue Manila Corp',
        period: '10/2023 - 10/2025',
        points: [
            'Developed responsive web interfaces and built web applications for 9+ enterprise clients.',
            'Converted design mockups into pixel-perfect, responsive web pages across all device sizes.',
            'Built custom CMS for corporate websites, allowing clients to manage content without developer intervention.',
            'Developed and integrated databases and REST APIs for dynamic content and data management.',
            'Optimized database queries and application performance to improve efficiency and maintainability.',
            'Managed cloud deployments and performed debugging, code reviews, and performance improvements.'
        ]
    },
    {
        role: 'Web Developer',
        company: 'Sun Moon Technology',
        period: '05/2022 - 03/2023',
        points: [
            'Developed full-stack web applications with admin dashboards, CRUD modules, and content management.',
            'Designed normalized database schemas and wrote optimized queries for reporting and data retrieval.',
            'Built RESTful APIs with authentication for frontend and third-party consumption.',
            'Managed cloud server infrastructure and deployment workflows for secure production hosting.',
            'Conducted code reviews, debugging, and performance profiling to resolve bottlenecks.'
        ]
    }
]

// ============ Education — matched to resume ============
const education = [
    {
        degree: 'BS Computer Science - Major in Application Development',
        school: 'University of Makati',
        period: '2019 - 2023',
        location: 'Makati City, Philippines'
    },
    {
        degree: 'Senior High School',
        school: 'University of Makati',
        period: '2017 - 2019',
        location: 'Makati City, Philippines'
    },
]


const experience = () => {
    return(
        <section id='experience'>
            <div className="container">
                <div className="exHeader">
                    <span className="sectionLabel">My Experience</span>
                    <h2 className="exHeading">Skills &amp; Technologies</h2>
                    <p className="exSubtext">
                        Technologies and tools I use to bring products to life.
                    </p>
                </div>

                <SkillsSection />

                <div className="exTimelineContainer">
                    <div className="exSectionHeader">
                        <span className="sectionLabel">Work Experience</span>
                        <h2 className="exHeading">Where I've Worked</h2>
                        <p className="exSubtext">
                            Companies and projects I've contributed to.
                        </p>
                    </div>
                    <div className="workMarquee">
                        <div className="workTrack">
                            {/* Duplicate cards for seamless loop */}
                            {[...workHistory, ...workHistory].map((job, index) => (
                                <article className='workCard' key={index}>
                                    <div className="workCardTop">
                                        <span className="workIndex">0{(index % workHistory.length) + 1}</span>
                                        <span className="workPeriod">
                                            {job.period}{job.location ? ` · ${job.location}` : ''}
                                        </span>
                                    </div>
                                    <h4 className="workRole">{job.role}</h4>
                                    <span className="workCompany">{job.company}</span>
                                    <div className="workDivider"></div>
                                    <ul className='workList'>
                                        {job.points.map((point, i) => (
                                            <li key={i}>
                                                <BsFillPatchCheckFill className='workCheckIcon' />
                                                <p>{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="exTimelineContainer">
                    <div className="exSectionHeader">
                        <span className="sectionLabel">Education</span>
                        <h2 className="exHeading">Educational Background</h2>
                    </div>
                    <div className="eduTimeline">
                        {education.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div className={`eduRow ${isLeft ? 'eduRowLeft eduFromLeft' : 'eduRowRight eduFromRight'}`} key={index}>
                                    <div className="eduCard">
                                        <span className="eduYear">{item.period}</span>
                                        <h4>{item.degree}</h4>
                                        <h5 className='text-light'>{item.school}</h5>
                                        {item.location && <span className="eduLocation">{item.location}</span>}
                                    </div>
                                    <div className="eduCenter">
                                        <span className="eduDot"></span>
                                    </div>
                                    <div className="eduEmpty"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience
