import React from "react";

const CV_URL = `${process.env.PUBLIC_URL}/Torreno_CV.pdf`;

const CTA = () =>{
    return(
        <div className="cta">
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA
