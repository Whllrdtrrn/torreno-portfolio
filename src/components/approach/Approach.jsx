import React from 'react'
import './approach.css'

const cards = [
    {
        label: 'Understand',
        number: '01',
        heading: <><em>Why</em> before how.</>,
        description:
            'I start by understanding your goals, your users, and the problem we\'re solving. Clear requirements mean fewer revisions and a product that actually fits.',
    },
    {
        label: 'Build',
        number: '02',
        heading: <>Deliver in <em>iterations</em>.</>,
        description:
            'I work in short cycles with regular updates. You see real progress weekly — not a big reveal at the end. This keeps the project on track and on budget.',
    },
    {
        label: 'Optimize',
        number: '03',
        heading: <>Performance is a <em>feature</em>.</>,
        description:
            'Fast load times, responsive layouts, and clean code aren\'t extras — they\'re built into every project from day one. Your users notice the difference.',
    },
    {
        label: 'Support',
        number: '04',
        heading: <>Launch is just the <em>start</em>.</>,
        description:
            'After deployment, I stay available for bug fixes, updates, and improvements. A website that grows with your business is worth more than one that\'s just "done."',
    },
]

const Approach = () => {
    return (
        <section id="approach">
            <div className="approachMarquee">
                <div className="approachTrack">
                    {[...cards, ...cards].map((card, index) => (
                        <article className="approachCard" key={index}>
                            <span className="approachLabel">✦ {card.label.toUpperCase()}</span>
                            <span className="approachNumber">{card.number}</span>
                            <h3 className="approachTitle">{card.heading}</h3>
                            <p className="approachDesc">{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Approach
