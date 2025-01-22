import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service id", 
        "template id", 
        form.current,
        "your-public-key" 
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset(); 
  };

  return (
    <div className="contact-section">
      <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
      <div className="contact-card">
        {/* Social Links */}
        <div className="social-links">
          <a href="https://medium.com/@yadasat437" target="_blank" rel="noreferrer">
            <FaMedium className="icon medium" />
          </a>
          <a href="https://github.com/Yaadee" target="_blank" rel="noreferrer">
            <FaGithub className="icon github" />
          </a>
          <a href="https://www.linkedin.com/in/yadasa/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name  </label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email  </label>
            <input type="email" id="email" name="email" required placeholder="Your Email Address" />
          </div>
          <div className="form-group">
            
            <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
