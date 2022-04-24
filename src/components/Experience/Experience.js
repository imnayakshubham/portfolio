import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="work">
        <h1 className="Experience">Experience</h1>

        <h1>Actively Looking for an Opportunity.</h1>
        <p>If you like my Portfolio and love recuriting me. Contact me on</p>
        <br></br>

        <a
          href="https://www.linkedin.com/in/imnayakshubham/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-linkedin"
            style={{ padding: 0, width: 50, fontSize: 30 }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Experience;
