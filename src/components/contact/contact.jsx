import React, {useState, useEffect} from "react";
import {MdOutlineEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaFacebookMessenger} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "./contact.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_zql2vxp";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4c6bm0j";
const PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "mvZVume8_7FiYJFXF";

const EMPTY_FORM = {name: "", email: "", message: ""};

const Contact = () => {
  const [fields, setFields] = useState(EMPTY_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 8000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = e => {
    const {name, value} = e.target;
    setFields(prev => ({...prev, [name]: value}));
  };

  const sendEmail = async e => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: fields.name,
          from_name: fields.name,
          email: fields.email,
          reply_to: fields.email,
          message: fields.message,
        },
        {publicKey: PUBLIC_KEY}
      );
      setStatus({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });
      setFields(EMPTY_FORM);
    } catch (error) {
      console.error("EmailJS error:", error?.status, error?.text || error);
      const detail = error?.text || error?.message || "";
      setStatus({
        type: "error",
        text: detail
          ? `Failed to send message: ${detail}`
          : "Failed to send message. Please email me directly at whillourdtorreno@gmail.com.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container contactLayout">
        {/* Left side — heading + info cards */}
        <div className="contactLeft">
          <span className="sectionLabel">Contact</span>
          <h2 className="contactHeading">
            Get In Touch<br />
            <span className="contactHeadingLight">With Me</span>
          </h2>
          <p className="contactSubtext">
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <div className="contactCards">
            <div className="contactInfoCard">
              <HiLocationMarker className="contactInfoIcon" />
              <div>
                <h4>Location</h4>
                <p>Cavite City, Philippines</p>
              </div>
            </div>
            <div className="contactInfoCard">
              <BsFillTelephoneFill className="contactInfoIcon" />
              <div>
                <h4>Phone</h4>
                <p>+63 967 213 5477</p>
              </div>
            </div>
            <div className="contactInfoCard">
              <MdOutlineEmail className="contactInfoIcon" />
              <div>
                <h4>Email</h4>
                <p>whillourdtorreno@gmail.com</p>
              </div>
            </div>
            <div className="contactInfoCard">
              <FaFacebookMessenger className="contactInfoIcon" />
              <div>
                <h4>Messenger</h4>
                <p>Whillourd Torreno</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side — form */}
        <div className="contactRight">
          <form onSubmit={sendEmail} className="contactForm">
            <div className="contactFormRow">
              <div className="contactFormGroup">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="contactFormGroup">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contactFormGroup">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                value={fields.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary contactSubmitBtn"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {status && (
        <div
          className={`status-message ${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.text}
        </div>
      )}
    </section>
  );
};

export default Contact;
