import React from "react";
import Me from "../images/me2.jpg";

const About = () => {
  return (
    <section id="about">
      <div id="aboutText">
        <p>Hello, this is Nathan. I am a web developer living in Berlin.</p>
        <p id="skills">
          Technologies I am familiar with and use include:
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>ES6</li>
            <li>SASS</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Ruby on Rails</li>
            <li>Wordpress</li>
            <li>Git</li>
            <li>Adobe Creative Cloud</li>
          </ul>
        </p>
        <p>
          I also have skills as a designer, photographer, composer, and
          videographer.
        </p>
        <p>
          Experience as a video artist and musician draws me toward multimedia
          delivery and interactivity on the web.
        </p>
        <img src={Me} />
        <p>
          My interest in web development began in the mid-90s when I was
          carefully plotting layouts with tables and uploading the results to
          Geocities. Back then Glassdog was a frequent browse for web design
          inspiration and Adobe Flash was the go to for animation and multimedia
          projects. Remember those days? Maybe not...
        </p>
      </div>
    </section>
  );
};

export default About;
