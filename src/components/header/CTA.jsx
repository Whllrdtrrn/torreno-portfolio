import React from "react";
import './header.css';

const CTA = () =>{
        // Function will execute on click of button
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('Torreno_CV.pdf').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
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