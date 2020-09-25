import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/NLJZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nathan-johnson-860436146/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>&#169;Nathan Johnson</li>
        <li>{year}</li>
      </ul>
    </footer>
  );
};

export default Footer;
