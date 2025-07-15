import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Togapic.jpg'
import Headersocial from './headerSocial'

const Header = () => {
    return(
        <header id='header'>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Whillourd Torreno</h1>
                <h5 className='text-light'>Web Developer</h5>
                <CTA/>
                <Headersocial/>
                <div className="me">
                    <img src={ME} alt="me" /> 
                </div> 
                <div className='scroll__down'>
                <a href="#contact" >Scroll Down</a>
                </div>   
                    
            </div>
        </header>
    )
}
export default Header