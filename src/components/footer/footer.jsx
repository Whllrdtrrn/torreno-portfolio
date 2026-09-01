import React from 'react'
import {FaGithub, FaLinkedinIn, FaBehance, FaFacebookF} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import './footer.css'

const Footer = () => {
    return(
        <footer id='footer'>
            <div className="container footerContainer">
                {/* Brand column */}
                <div className="footerBrand">
                    <p className='footerLogo'>Whil.</p>
                    <p className='footerTagline'>
                        Full Stack Web Developer building fast, accessible, and lasting web experiences.
                    </p>
                    <div className="footerSocials">
                        <a href="https://github.com/Whllrdtrrn" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/whillourd-torreno-74429527b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="https://www.behance.net/whilloutorreno/projects" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
                        <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                    </div>
                </div>

                {/* Quick links */}
                <div className="footerCol">
                    <h4 className="footerColTitle">Quick Links</h4>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="footerCol">
                    <h4 className="footerColTitle">Contact</h4>
                    <ul className="footerContactList">
                        <li>
                            <MdOutlineEmail className="footerContactIcon" />
                            <span>whillourdtorreno@gmail.com</span>
                        </li>
                        <li>
                            <BsFillTelephoneFill className="footerContactIcon" />
                            <span>+63 967 213 5477</span>
                        </li>
                        <li>
                            <HiLocationMarker className="footerContactIcon" />
                            <span>Cavite City, Philippines</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footerBottom">
                <div className="container footerBottomInner">
                    <small>&copy; {new Date().getFullYear()} Whil Lourd Torreno. All rights reserved.</small>
                    <small className="footerCredit">Designed &amp; Built by Whil.</small>
                </div>
            </div>
        </footer>
    )
}
export default Footer
