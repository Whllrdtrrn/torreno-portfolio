import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const experience = () => {
    // Dynamic data arrays
    const frontendSkills = [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'Vue.js', level: 'Advanced' },
        { name: 'Nuxt 3', level: 'Advanced' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'SCSS', level: 'Intermediate' },
        { name: 'Stylus', level: 'Intermediate' },
        { name: 'Bootstrap', level: 'Advanced' },
        { name: 'jQuery', level: 'Intermediate' }
    ];

    const backendSkills = [
        { name: 'Laravel', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'MySQL', level: 'Advanced' }
    ];

    const developmentTools = [
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'Git Bash', level: 'Advanced' },
        { name: 'Visual Studio Code', level: 'Advanced' },
        { name: 'XAMPP', level: 'Advanced' },
        { name: 'Digital Ocean', level: 'Intermediate' }
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
        </section>
    )
}

export default experience