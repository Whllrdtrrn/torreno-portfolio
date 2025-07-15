import React from "react";
import './header.css';

const CTA = () =>{
        const onButtonClick = () => {
            fetch('Torreno_CV.pdf').then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Torreno-CV-2023.pdf';
                    alink.click();
                })
            })
        }
    return(
        <div className="cta">
            <button onClick={onButtonClick} className='btn'>Download CV</button>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA