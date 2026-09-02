import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import SkillsSection from './SkillsSection'
import './experience.css'


// ============ Work Experience — matched to resume ============
const workHistory = [
    {
        role: 'Full Stack Developer',
        company: 'Petora (Project-Based)',
        period: '11/2025 - 08/2026',
        location: 'Remote',
        points: [
            'Developed a full-stack pet platform using React, Vite, and Tailwind CSS.',
            'Built backend services using Express.js, Prisma ORM, and PostgreSQL.',
            'Integrated Stripe for payments, subscriptions, marketplace commissions, and webhooks.',
            'Developed features including marketplace, veterinary booking, pet hotel, adoption, community feed, events, and real-time chat using Socket.io.'
        ]
    },
    {
        role: 'Web Developer',
        company: 'DesignBlue Manila Corp',
        period: '10/2023 - 10/2025',
        points: [
            'Developed responsive web interfaces using Tailwind CSS and JavaScript.',
            'Built web applications using Laravel and Nuxt 3.',
            'Converted Adobe XD designs into responsive and functional web pages.',
            'Developed and integrated databases and APIs.',
            'Optimized SQL queries and application performance to improve efficiency and maintainability.',
            'Managed DigitalOcean deployments and performed debugging, code reviews, and performance improvements.'
        ]
    },
    {
        role: 'Web Developer',
        company: 'Sun Moon Technology',
        period: '05/2022 - 03/2023',
        points: [
            'Developed full-stack solutions, including database design and API development.',
            'Designed normalized database schemas and implemented optimized SQL queries to improve data retrieval speed and application performance.',
            'Managed DigitalOcean deployments for secure and reliable hosting.',
            'Conducted code reviews, debugging, and performance tuning to ensure high-quality deliverables.'
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
