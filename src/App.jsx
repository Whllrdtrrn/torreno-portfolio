import React from 'react'
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
    return (
        <>
            <Nav/>
            <Header/>
            <About/>
            <Experience/>
            {/* <Services/> */}
            <Portfolio/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>         
        </>
        
    )
}
export default App