import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
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
                    <a href="https://github.com/Whllrdtrrn" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/whillourd-torreno-74429527b" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a href="https://www.behance.net/whilloutorreno/projects" target="_blank" rel="noopener noreferrer"><AiFillBehanceSquare /></a>
                    <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                </div>
                <div className="footerCopy">
                    <small>&copy; WHLLRDTRRN Portfolio. All rights reserved.</small>
                </div>
            </footer>
        </section>
    )
}
export default footer