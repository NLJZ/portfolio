import React from "react";
import Me from "../images/me2.jpg";

const About = () => {
  return (
    <section id="about">
      <div id="aboutText">
        <p>Hello, this is Nathan. I am a web developer living in Berlin.</p>
        <p id="skills">
          Technologies I am familiar with and use include: React, Node, MongoDB,
          ES6, SASS, CSS3, HTML5, Ruby on Rails, Wordpress, Git, Adobe Creative
          Cloud.
        </p>
        <p>
          I also have skills as a designer, photographer, composer, and
          videographer.
        </p>
        <p>
          Experience as a video artist and musician draws me toward multimedia
          delivery and interactivity on the web.
        </p>
        <img src={Me} alt="portrait of the programmer" />
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
