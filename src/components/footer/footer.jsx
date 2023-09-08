import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import './footer.css'

const footer = () => {
    return(
        <section id='footer'>
            <footer>
                <p className='footerLogo'>WHLLRDTRRN</p>
                <ul className='footerLink'>
                    <li><a href="#header" className='footerItem'>Home</a></li>
                    <li><a href="#about" className='footerItem'>About</a></li>
                    <li><a href="#experience" className='footerItem'>Experience</a></li>
                    {/*<li><a href="#service" className='footerItem'>Service</a></li>*/}
                    <li><a href="#portfolio" className='footerItem'>Portfolio</a></li>
                    {/*<li><a href="#testimonials" className='footerItem'>Testimonials</a></li>*/}
                    <li><a href="#contact" className='footerItem'>Contact</a></li>
                </ul>
                <div className="socialFooter">
                    <p><AiFillFacebook /></p>
                    <p><AiFillInstagram /></p>
                    <p><AiFillTwitterSquare /></p>
                </div>
                <div className="footerCopy">
                    <small>&copy; WHLLRDTRRN Portfolio. All rights reserved.</small>
                </div>
            </footer>
        </section>
    )
}
export default footer