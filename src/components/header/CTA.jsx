import React from "react";
import './header.css';

// PUBLIC_URL resolves to the `homepage` base path ("/torreno-portfolio"), so
// this works both on the dev server and on GitHub Pages. A plain download link
// also avoids the fetch/blob route, which silently saved the SPA fallback
// index.html as a .pdf whenever the path resolved wrong.
const CV_URL = `${process.env.PUBLIC_URL}/Torreno_CV.pdf`;

const CTA = () =>{
    return(
        <div className="cta">
            <a
                href={CV_URL}
                className='btn'
                download="Whil-Lourd-Torreno-CV.pdf"
            >
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA
