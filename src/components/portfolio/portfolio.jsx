import React from 'react'
import IMG  from '../../assets/Railway.JPG'
import CrudPhp  from '../../assets/crud-php.jpg'
import Monitoring  from '../../assets/monitoring.JPG'
import './portfolio.css'

const data =[
    {
        id:1,
        img:Monitoring,
        title:'Implementation of K-means Algorithm on Vaccimo: An Adverse Side Effect Monitoring System for Covid-19 Vaccine',
        git:'https://github.com/Whllrdtrrn/Finals.git',
        drib:'https://dribbble.com/whllrdtrrn25?onboarding=true'
    },
    {
        id:2,
        img:IMG,
        title:'The Railway Ticketing system ',
        git:'https://github.com/Whllrdtrrn/The-RailWay.git',
        drib:'https://dribbble.com/whllrdtrrn25?onboarding=true'
    },
    {
        id:3,
        img:CrudPhp,
        title:'PHP Crud',
        git:'https://github.com/Whllrdtrrn/React-portfolio.git',
        drib:'https://dribbble.com/whllrdtrrn25?onboarding=true'
    }
]

const portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portContainer">
                <div className="portCardBody">
                {
                   data.map(({id,img,title,git,drib}) =>{
                        return(
                    <article key={id} className="portCard">
                        <img className='portfolio-img' src= {img} alt="" />
                        <div>
                            <h3>{title}</h3>
                            <div className="portButton">
                                <a href={git} className='btn'>Github</a>
                                {/*<a href={drib} className='btn btn-primary'>Live Demo</a>*/}
                            </div>
                        </div>
                    </article>
                        )
                   }) 
                } 
                </div>
            </div>
        </section>
    )
}
export default portfolio