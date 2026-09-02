import React, {useState} from 'react'
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiAngular,
    SiTailwindcss, SiSass, SiBootstrap, SiMaterialui, SiJquery,
    SiPhp, SiLaravel, SiNodedotjs, SiDjango, SiSpringboot,
    SiPython, SiCsharp, SiWordpress,
    SiMysql, SiPostgresql,
    SiGit, SiGithub, SiGitlab, SiBitbucket, SiDocker,
    SiPostman, SiJira, SiDigitalocean, SiVercel, SiNetlify
} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {HiViewGrid} from 'react-icons/hi'
import {FaCode, FaPaintBrush, FaServer, FaDatabase, FaTools} from 'react-icons/fa'

const skills = [
    // Programming
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Programming', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Programming', level: 85 },
    { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Programming', level: 85 },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Programming', level: 65 },
    { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Programming', level: 60 },
    { name: 'C#', icon: SiCsharp, color: '#512BD4', category: 'Programming', level: 55 },

    // Frontend
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend', level: 95 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend', level: 95 },
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend', level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Frontend', level: 80 },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend', level: 90 },
    { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82', category: 'Frontend', level: 90 },
    { name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend', level: 60 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend', level: 95 },
    { name: 'SCSS', icon: SiSass, color: '#CC6699', category: 'Frontend', level: 75 },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend', level: 80 },
    { name: 'Material UI', icon: SiMaterialui, color: '#007FFF', category: 'Frontend', level: 70 },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend', level: 75 },

    // Backend
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', category: 'Backend', level: 90 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend', level: 85 },
    { name: 'Django', icon: SiDjango, color: '#092E20', category: 'Backend', level: 55 },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', category: 'Backend', level: 55 },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B', category: 'Backend', level: 70 },

    // Database
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database', level: 85 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database', level: 85 },

    // Tools
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools', level: 90 },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff', category: 'Tools', level: 90 },
    { name: 'GitLab', icon: SiGitlab, color: '#FC6D26', category: 'Tools', level: 75 },
    { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC', category: 'Tools', level: 70 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Tools', level: 70 },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'Tools', level: 85 },
    { name: 'Jira', icon: SiJira, color: '#0052CC', category: 'Tools', level: 75 },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF', category: 'Tools', level: 75 },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff', category: 'Tools', level: 80 },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', category: 'Tools', level: 80 },
]

const tabs = [
    { label: 'All', icon: HiViewGrid, filter: null },
    { label: 'Programming', icon: FaCode, filter: 'Programming' },
    { label: 'Frontend', icon: FaPaintBrush, filter: 'Frontend' },
    { label: 'Backend', icon: FaServer, filter: 'Backend' },
    { label: 'Database', icon: FaDatabase, filter: 'Database' },
    { label: 'Tools', icon: FaTools, filter: 'Tools' },
]

const SkillsSection = () => {
    const [active, setActive] = useState('Programming')

    const filtered = active
        ? skills.filter(s => s.category === active)
        : skills

    return (
        <>
            <div className="skillTabs">
                {tabs.map(tab => {
                    const Icon = tab.icon
                    return (
                        <button
                            key={tab.label}
                            className={`skillTab ${active === tab.filter ? 'skillTabActive' : ''}`}
                            onClick={() => setActive(tab.filter)}
                        >
                            <Icon className="skillTabIcon" />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            <div className="skillGrid">
                {filtered.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                        <div className="skillCard" key={`${skill.name}-${index}`}>
                            <div className="skillCardRow">
                                <div className="skillCardLeft">
                                    <Icon className="skillCardIcon" style={{color: skill.color}} />
                                    <div>
                                        <span className="skillCardName">{skill.name}</span>
                                        <span className="skillCardCat">{skill.category}</span>
                                    </div>
                                </div>
                                <span className="skillCardPercent" style={{color: skill.color}}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="skillBar">
                                <div
                                    className="skillBarFill"
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillsSection
