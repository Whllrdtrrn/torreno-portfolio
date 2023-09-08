import React from 'react'
import ME from '../../assets/ww.jpg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscRootFolderOpened} from 'react-icons/vsc'
import './about.css'

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">

                <div className="aboutMe">
                    <div className="aboutImage">
                        <img src={ME} alt="..." />
                    </div>
                </div>

                <div className="aboutContent">
                    {/*<div className="aboutCards">

                        <article className='aboutCard'>
                            <FaAward className='aboutIcon' />
                            <h5>Experience</h5>
                            <small>0 Years Working</small>
                        </article>


                        <article className='aboutCard'>
                            <FiUsers className='aboutIcon' />
                            <h5>Clients</h5>
                            <small>0 Worldwide</small>
                        </article>

                        <article className='aboutCard'>
                            <VscRootFolderOpened className='aboutIcon' />
                            <h5>Project</h5>
                            <small>0 Completed</small>
                        </article>
                    </div>*/}
                    <p>
                         I want to be a web developer with an amazing ability to develop
                         websites that are both functional and beautiful.
                         I want to enhance my knowledge of programming. 
                         I am also passionate about creating websites. 
                         I am confident in my ability to contribute to any project. 
                         I am looking for an opportunity to use my skills and experience to become a good programmer.
                    </p>

                    <button className='btn btn-primary'>Let's Talk</button>
                </div>
            </div>
        </section>
        
    )
}
export default About