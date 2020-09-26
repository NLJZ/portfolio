import React from "react";
import HandMouse from "../images/differenthand.jpg";

const Contact = () => {
  return (
    <section>
      <p>
        I am interested in collaborations and work opportunites both as
        full-time employee at a company/organization and freelance.
      </p>
      <p>Email me: johnson.nathan.lee at gmail.com</p>
      <p>
        Find me on{" "}
        <a
          href="https://github.com/NLJZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/nathan-johnson-860436146/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <img src={HandMouse} alt="splash of hands typing" />
    </section>
  );
};

export default Contact;
