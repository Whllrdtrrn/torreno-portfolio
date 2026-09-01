import React, {useEffect, useRef, useState} from 'react'
import './header.css'
import ME from '../../assets/Togapic.jpg'
import {FaGithub, FaLinkedinIn, FaBehance, FaFacebookF} from 'react-icons/fa'
import * as THREE from 'three'

const GREETING = "HELLO! I'M"

const Header = () => {
    const vantaRef = useRef(null)
    const vantaEffect = useRef(null)
    const [typed, setTyped] = useState("")

    useEffect(() => {
        let cancelled = false

        const initVanta = async () => {
            const GLOBE = (await import('vanta/dist/vanta.globe.min')).default
            if (cancelled || !vantaRef.current) return

            vantaEffect.current = GLOBE({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x4db5ff,
                color2: 0x1a1a2e,
                backgroundColor: 0x0b0b0b,
                size: 1.2,
                points: 10,
                maxDistance: 23,
                spacing: 16,
            })
        }

        initVanta()

        // Typewriter effect — starts after preloader (~3s)
        const startDelay = setTimeout(() => {
            let i = 0
            const typeInterval = setInterval(() => {
                i++
                setTyped(GREETING.slice(0, i))
                if (i >= GREETING.length) clearInterval(typeInterval)
            }, 80)
        }, 3200)

        return () => {
            clearTimeout(startDelay)
            cancelled = true
            if (vantaEffect.current) vantaEffect.current.destroy()
        }
    }, [])

    return(
        <header id='header' ref={vantaRef}>
            <div className="container heroContainer">
                <div className="heroLeft">
                    <span className="sectionLabel">Welcome To My Portfolio</span>

                    <h1 className="heroTitle">
                        <span className="heroGreeting">{typed || "\u00A0"}</span>
                        <br/>
                        <span className="heroName">WHIL LOURD TORRENO</span>
                    </h1>

                    <div className="heroBottom">
                        <div className="heroInfo">
                            <div className="heroAvailable">
                                <span className="heroDot"></span>
                                Available for Freelance
                            </div>
                            <p className="heroDesc">
                                I design and build web applications that are fast,
                                accessible, and built to last.
                            </p>
                            <div className="heroSocials">
                                <a href="https://github.com/Whllrdtrrn" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub/></a>
                                <a href="https://www.linkedin.com/in/whillourd-torreno-74429527b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn/></a>
                                <a href="https://www.behance.net/whilloutorreno/projects" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance/></a>
                                <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF/></a>
                            </div>
                        </div>

                        <div className="heroCards">
                            <div className="heroCardCta glass">
                                <h4>Start a Project</h4>
                                <p>Stay updated with my latest projects and design insights.</p>
                                <a href="#contact" className="btn btn-primary heroHireBtn">
                                    Let's Work Together <span className="heroArrow">→</span>
                                </a>
                            </div>
                            <div className="heroCardPhoto glass">
                                <img src={ME} alt="Whil Lourd Torreno" />
                                <span className="heroPhotoName">WHIL T.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA moved to About section */}
        </header>
    )
}
export default Header
