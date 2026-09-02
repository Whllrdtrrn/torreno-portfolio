import React from 'react'
import {HiCode, HiServer, HiDeviceMobile, HiCog} from 'react-icons/hi'
import './services.css'

const services = [
    {
        icon: HiCode,
        title: 'Frontend Development',
        description: 'Responsive, pixel-perfect interfaces built with React, Vue.js, Next.js, and Tailwind CSS. From design handoff to production-ready code.',
    },
    {
        icon: HiServer,
        title: 'Backend & API',
        description: 'Scalable REST APIs and server-side logic with Laravel, Node.js, and PostgreSQL. Authentication, payments, and third-party integrations.',
    },
    {
        icon: HiDeviceMobile,
        title: 'Full-Stack Applications',
        description: 'End-to-end web applications — database design, API development, frontend UI, deployment, and everything in between.',
    },
    {
        icon: HiCog,
        title: 'Maintenance & Support',
        description: 'Ongoing bug fixes, performance optimization, feature updates, and server management to keep your product running smoothly.',
    },
]

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="servicesHeader">
                    <span className="sectionLabel">Services</span>
                    <h2 className="servicesHeading">What I Can Do For You</h2>
                    <p className="servicesSubtext">
                        From concept to deployment — I handle every layer of web development.
                    </p>
                </div>

                <div className="servicesGrid">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <article className="serviceCard" key={index}>
                                <div className="serviceIconWrap">
                                    <Icon className="serviceIcon" />
                                </div>
                                <h3 className="serviceTitle">{service.title}</h3>
                                <p className="serviceDesc">{service.description}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
