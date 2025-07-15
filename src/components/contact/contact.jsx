import React, {useState, useEffect} from "react";
import {MdOutlineEmail} from "react-icons/md";
import {RiFacebookBoxFill} from "react-icons/ri";
import {BsFillTelephoneFill} from "react-icons/bs";
import {useRef} from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const sendEmail = e => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_zql2vxp",
        "template_4c6bm0j",
        form.current,
        "mvZVume8_7FiYJFXF"
      )
      .then(result => {
        setMessage("Message sent successfully! I'll get back to you soon.");
        setIsLoading(false);
        e.target.reset();
      })
      .catch(error => {
        setMessage("Failed to send message. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="leftContact">
          <article className="details">
            <MdOutlineEmail className="contactIcon" />
            <h4>Email</h4>
            <h5>whillourdtorreno@gmail.com</h5>
            <a
              href="mailto:whillourdtorreno@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="details">
            <RiFacebookBoxFill className="contactIcon" />
            <h4>Facebook</h4>
            <h5>Whillourd Torreno</h5>
            <a
              href="https://www.facebook.com/whllrdtrrn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="details">
            <BsFillTelephoneFill className="contactIcon" />
            <h4>Phone</h4>
            <h5>+63-967-213-5477</h5>
            <a href="tel:+639672135477">Call me</a>
          </article>
        </div>

        <div className="rightContact">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {message && (
            <div
              className={`status-message ${
                message.includes("successfully") ? "success" : "error"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
