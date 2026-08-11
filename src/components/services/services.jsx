import React from 'react'
import{BsCheckLg} from 'react-icons/bs'
import './services.css'

const servicesData = [
    {
        title: 'Frontend Development',
        items: [
            'Responsive, mobile-first interfaces with Tailwind CSS, SCSS, and Bootstrap',
            'Single-page and server-rendered apps with React, Vue.js, Nuxt 3, and Next.js',
            'Adobe XD and Figma designs converted into pixel-accurate, functional interfaces',
            'Reusable component libraries and maintainable, well-structured codebases',
            'Performance optimization: bundle size, lazy loading, and Core Web Vitals',
            'Cross-browser and cross-device testing for consistent behavior',
            'Accessible markup and semantic HTML5 throughout'
        ]
    },
    {
        title: 'Backend & API Development',
        items: [
            'REST APIs with Laravel, Express.js, and Node.js',
            'Normalized database schemas in MySQL and PostgreSQL',
            'Optimized SQL queries for faster data retrieval and lower load',
            'Prisma ORM data models, migrations, and type-safe queries',
            'Stripe integration: checkout sessions, payment intents, subscriptions, and webhooks',
            'Real-time features with Socket.io for chat and live updates',
            'Authentication, authorization, and role-based access control'
        ]
    },
    {
        title: 'Full-Stack Delivery',
        items: [
            'End-to-end product build-out from database design to deployed UI',
            'Custom CMS development and third-party system integration',
            'Deployment and hosting on DigitalOcean and Hostinger',
            'Dockerized environments for consistent local and production setups',
            'Code reviews, debugging, and performance tuning',
            'Git-based workflows with clear branching and release practices',
            'Ongoing maintenance, bug fixes, and feature enhancements'
        ]
    }
];

const services = () => {
    return(
        <section id='service'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container servicesContainer">
                {servicesData.map((service, index) => (
                    <article className='serviceCard' key={index}>
                        <div className="serviceHead">
                            <h3>{service.title}</h3>
                        </div>
                        <ul className='serviceList'>
                            {service.items.map((item, i) => (
                                <li key={i}>
                                    <BsCheckLg className='serviceIcon' />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default services
