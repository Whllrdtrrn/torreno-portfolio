import React from 'react'
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiVuedotjs, SiNuxtdotjs, SiReact, SiNextdotjs, SiAngular,
    SiTailwindcss, SiSass, SiBootstrap, SiJquery, SiMaterialui,
    SiDjango, SiWordpress,
    SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiPrisma,
    SiPython, SiSpringboot, SiCsharp,
    SiMysql, SiPostgresql,
    SiDocker, SiGit, SiGithub, SiGitlab, SiBitbucket,
    SiPostman, SiJira,
    SiDigitalocean, SiVercel, SiNetlify,
    SiStripe, SiSocketdotio
} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

// ============ Skills — matched to Resume_Whil_2026.pdf ============

// WEB TECHNOLOGIES & DATABASES
const frontendSkills = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'SCSS', icon: SiSass, color: '#CC6699' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Material UI', icon: SiMaterialui, color: '#007FFF' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
]

// PROGRAMMING & FRAMEWORKS
const programmingSkills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'C#', icon: SiCsharp, color: '#512BD4' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
]

// TOOLS & DEVOPS
const toolSkills = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
    { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
    { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Jira', icon: SiJira, color: '#0052CC' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
]

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
    {
        degree: 'Junior High School',
        school: 'Benigno "Ninoy" S. Aquino High School',
        period: '2013 - 2017'
    },
    {
        degree: 'Primary',
        school: 'Pembo Elementary School',
        period: '2006 - 2013'
    }
]

const SkillGrid = ({ title, skills }) => (
    <>
        <h3 className="skillGroupTitle">{title}</h3>
        <div className="skillGrid">
            {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                    <div className="skillCard" key={index}>
                        <Icon className="skillCardIcon" style={{color: skill.color}} />
                        <span className="skillCardName">{skill.name}</span>
                    </div>
                )
            })}
        </div>
    </>
)

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

                <SkillGrid title="Web Technologies &amp; Databases" skills={frontendSkills} />
                <SkillGrid title="Programming &amp; Frameworks" skills={programmingSkills} />
                <SkillGrid title="Tools &amp; DevOps" skills={toolSkills} />

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
