import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const experience = () => {
    // Dynamic data arrays
    const frontendSkills = [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Vue.js', level: 'Advanced' },
        { name: 'Nuxt 3', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'Angular', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'SCSS', level: 'Intermediate' },
        { name: 'Stylus', level: 'Intermediate' },
        { name: 'Bootstrap', level: 'Advanced' },
        { name: 'jQuery', level: 'Intermediate' }
    ];

    const backendSkills = [
        { name: 'PHP', level: 'Advanced' },
        { name: 'Laravel', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'Prisma ORM', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'Spring Boot', level: 'Intermediate' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' }
    ];

    const developmentTools = [
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'Git Bash', level: 'Advanced' },
        { name: 'Visual Studio Code', level: 'Advanced' },
        { name: 'XAMPP', level: 'Advanced' },
        { name: 'Digital Ocean', level: 'Intermediate' },
        { name: 'Hostinger', level: 'Intermediate' },
        { name: 'Stripe', level: 'Intermediate' },
        { name: 'Socket.io', level: 'Intermediate' }
    ];

    const workHistory = [
        {
            role: 'Fullstack Developer',
            company: 'Petora (Remote)',
            period: 'Nov. 2025 - Aug. 2026',
            points: [
                'Developed a full-stack pet platform using React 18 with Vite and Tailwind CSS for the web frontend, and Express.js with Prisma ORM and PostgreSQL for the backend API.',
                'Integrated Stripe payment gateway for checkout sessions, payment intents, subscription billing, marketplace commissions, and webhook handling.',
                'Built features including marketplace, vet booking, pet hotel reservations, adoption system, community feed, events, and real-time chat using Socket.io.'
            ]
        },
        {
            role: 'Web Developer',
            company: 'DesignBlue Manila Corp',
            period: 'Oct. 2023 - Oct. 2025',
            points: [
                'Built responsive UI with Tailwind CSS.',
                'Developed web apps with Laravel (backend) and Nuxt 3 (frontend).',
                'Converted Adobe XD designs into responsive, functional web interfaces using Nuxt, Tailwind CSS, and JavaScript.',
                'Optimized performance and ensured maintainable code.'
            ]
        },
        {
            role: 'Web Developer',
            company: 'Sun Moon Technology',
            period: 'May 2022 - Mar. 2023',
            points: [
                'Developed full-stack solutions, including database design and API development.',
                'Designed normalized database schemas and implemented optimized SQL queries to enhance data retrieval speed and application performance.',
                'Managed DigitalOcean deployments for secure and reliable hosting.',
                'Conducted code reviews, debugging, and performance tuning to ensure high-quality deliverables.'
            ]
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Makati',
            period: '2019 - 2023'
        },
        {
            degree: 'Senior High School',
            school: 'University of Makati',
            period: '2017 - 2019'
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
    ];

    const SkillItem = ({ skill }) => (
        <article className='exDetails'>
            <BsFillPatchCheckFill className='exIcon' />
            <div>
                <h4>{skill.name}</h4>
                <small className='text-light'>{skill.level}</small>
            </div>
        </article>
    );

    const SkillSection = ({ title, skills, className }) => (
        <div className={className}>
            <h3>{title}</h3>
            <div className={`ex${title.split(' ')[0]}`}>
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </div>
    );

    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container exContainer">
                <SkillSection
                    title="Frontend Development"
                    skills={frontendSkills}
                    className="frontendCard"
                />
                <SkillSection
                    title="Backend Development"
                    skills={backendSkills}
                    className="backendCard"
                />
            </div>

            <div className="container exContainer" style={{marginTop: '3rem'}}>
                <SkillSection
                    title="Development Tools"
                    skills={developmentTools}
                    className="toolsCard"
                />
            </div>

            <div className="container exTimelineContainer">
                <h3 className='exTimelineTitle'>Work Experience</h3>
                <div className="exTimeline">
                    {workHistory.map((job, index) => (
                        <article className='exTimelineItem' key={index}>
                            <span className='exTimelinePeriod'>{job.period}</span>
                            <h4>{job.role}</h4>
                            <h5 className='text-light'>{job.company}</h5>
                            <ul className='exTimelineList'>
                                {job.points.map((point, i) => (
                                    <li key={i}>
                                        <BsFillPatchCheckFill className='exIcon' />
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>

            <div className="container exTimelineContainer">
                <h3 className='exTimelineTitle'>Education</h3>
                <div className="exEducation">
                    {education.map((item, index) => (
                        <article className='exEducationItem' key={index}>
                            <span className='exTimelinePeriod'>{item.period}</span>
                            <h4>{item.degree}</h4>
                            <h5 className='text-light'>{item.school}</h5>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default experience
