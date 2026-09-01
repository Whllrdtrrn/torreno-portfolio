import React from "react";

const CV_URL = `${process.env.PUBLIC_URL}/Torreno_CV.pdf`;

const CTA = () =>{
    return(
        <div className="cta">
            <a href={CV_URL} className='btn' download="Whil-Lourd-Torreno-CV.pdf">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA
