import React from "react";
import "../Contact/Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-connect">
        <h1>Let's Connect!!!</h1>
      </div>
      <div className="contact-findme">
        <h3>
          Find Me On
        </h3>

        <div className="social-container">
          <a
            href="https://github.com/imnayakshubham"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-github"
              style={{ padding: 0, width: 50, fontSize: 30 }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/imnayakshubham/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin"
              style={{ padding: 0, width: 50, fontSize: 30 }}
            ></i>
          </a>
          <a
            href="https://twitter.com/imnayakshubham"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-twitter"
              style={{ padding: 0, width: 50, fontSize: 30 }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
