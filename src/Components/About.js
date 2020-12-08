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
          My experience as a video artist and musician attracts me to multimedia
          and interactive projects on the web.
        </p>
        <figure>
          <img src={Me} alt="portrait of the programmer" />
          <figcaption>Here I am!</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
