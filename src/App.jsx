import React from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import CustomCursor from './components/cursor/CustomCursor'
import Preloader from './components/preloader/Preloader'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Services from './components/services/services'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Approach from './components/approach/Approach'
import CtaBanner from './components/cta/CtaBanner'
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
            <Services/>
            <Experience/>
            <Portfolio/>
            <Approach/>
            <CtaBanner/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
