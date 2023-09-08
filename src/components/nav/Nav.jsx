import React from 'react'
 import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience"onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
            <a href="#portfolio"onClick={() => setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact"onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
        </nav>
    )
}
export default Nav