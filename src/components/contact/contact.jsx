import React, {useState, useEffect} from "react";
import {MdOutlineEmail} from "react-icons/md";
import {RiFacebookBoxFill} from "react-icons/ri";
import {BsFillTelephoneFill} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./contact.css";

// EmailJS config. These are public-by-design identifiers (the "public key" is
// safe to ship in the bundle). Override per-environment via .env if needed:
//   REACT_APP_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_zql2vxp";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4c6bm0j";
const PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "mvZVume8_7FiYJFXF";

const EMPTY_FORM = {name: "", email: "", message: ""};

const Contact = () => {
  const [fields, setFields] = useState(EMPTY_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }

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
      // Both naming conventions are sent so the EmailJS template works whether
      // its fields reference {{name}}/{{email}} or {{from_name}}/{{reply_to}}.
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
      // EmailJS rejects with an EmailJSResponseStatus ({ status, text }).
      // Log it so the real cause (bad key, missing template, quota, blocked
      // origin) is visible in the console instead of being swallowed.
      console.error("EmailJS error:", error?.status, error?.text || error);

      const detail = error?.text || error?.message || "";
      if (/strict mode/i.test(detail)) {
        console.error(
          'EmailJS strict mode is on. Uncheck "Use Private Key" at ' +
            "https://dashboard.emailjs.com/admin/account/security — a private " +
            "key must never be shipped in frontend code."
        );
      }
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
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              value={fields.message}
              onChange={handleChange}
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

          {status && (
            <div
              className={`status-message ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
