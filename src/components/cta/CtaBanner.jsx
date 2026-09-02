import React from 'react'
import './cta-banner.css'

const CtaBanner = () => {
    return (
        <section id="cta-banner">
            <div className="container ctaContainer">
                <div className="ctaContent">
                    <h2 className="ctaHeading">
                        Have a project in mind?<br />
                        <span className="ctaHighlight">Let's build it together.</span>
                    </h2>
                    <p className="ctaText">
                        Whether you need a full-stack application, a responsive website,
                        or ongoing development support — I'm ready to help.
                    </p>
                    <div className="ctaActions">
                        <a href="#contact" className="btn btn-primary ctaBtn">
                            Get In Touch →
                        </a>
                        <a href="mailto:whillourdtorreno@gmail.com" className="btn ctaBtnOutline">
                            whillourdtorreno@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaBanner
