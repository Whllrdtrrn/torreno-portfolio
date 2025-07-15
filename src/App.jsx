import React, { useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
// import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])

    return (
        <>
            {/* TSParticles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#1e1e2e", // Keep your dark background
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            // Colors that match your portfolio theme
                            value: ["#4A90E2", "#5BA7F7", "#6BB6FF", "#7B68EE", "#9370DB", "#00CED1"],
                        },
                        links: {
                            color: "#4A90E2", // Blue color that matches your "Let's Talk" button
                            distance: 150,
                            enable: true,
                            opacity: 0.3, // Reduced opacity for subtle effect
                            width: 1,
                            triangles: {
                                enable: true,
                                opacity: 0.05, // Very subtle triangles
                            },
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1, // Slower, more elegant movement
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80, // Fewer particles for cleaner look
                        },
                        opacity: {
                            value: 0.4, // More subtle particles
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                                sync: false,
                            },
                        },
                        shape: {
                            type: ["circle"], // Keep circles for clean geometric look
                            options: {
                                polygon: {
                                    sides: 6,
                                },
                                star: {
                                    sides: 5,
                                },
                            },
                        },
                        size: {
                            value: { min: 1, max: 4 }, // Slightly smaller particles
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 0.1,
                                sync: false,
                            },
                        },
                        stroke: {
                            width: 1,
                            color: {
                                value: ["#4A90E2"], // Blue stroke to match theme
                            },
                        },
                        rotate: {
                            value: {
                                min: 0,
                                max: 360,
                            },
                            direction: "random",
                            animation: {
                                enable: true,
                                speed: 3, // Slower rotation for elegance
                                sync: false,
                            },
                        },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />
            
            {/* Main Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <Nav/>
                <Header/>
                <About/>
                <Experience/>
                {/* <Services/> */}
                <Portfolio/>
                {/* <Testimonials/> */}
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default App