import React from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import CustomCursor from './components/cursor/CustomCursor'
import Preloader from './components/preloader/Preloader'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    useScrollReveal()

    return (
        <>
            <CustomCursor/>
            <Preloader/>
            <Nav/>
            <Header/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
