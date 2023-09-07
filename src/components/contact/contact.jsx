import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'

const contact = () => {
    const form = UseRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zql2vxp', 'template_yeihh9j', form.current, '15qco3130O5weNdD7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contactContainer">
                <div className="leftContact">
                    <article className='details'>
                        <MdOutlineEmail className='contactIcon' />
                        <h4>Email</h4>
                        <h5>whllrdtrrn@gmail.com</h5>
                        <a href="mailto:whillourdtorreno@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className='details'>
                        <RiFacebookBoxFill className='contactIcon' />
                        <h4>facebook</h4>
                        <h5>Whillourd Torreno</h5>
                        <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className='details'>
                        <BsFillTelephoneFill className='contactIcon' />
                        <h4>phone</h4>
                        <h5>+63-967-213-5477</h5>
                        <a href="https://www.facebook.com/whllrdtrrn/" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                <div className="rightContact">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default contact