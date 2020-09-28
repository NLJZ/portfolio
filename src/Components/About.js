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
        <p>
          Since the popularization of the Internet in the mid-90s I have kept up
          a bit with web technologies as a hobbyist. When a friend or family
          member needed help with a website I was their man. I built simple
          blogs, band pages, portfolios for photographers. Lately, with my eye
          on a career change, I have been significantly leveling up my
          programming skills. First with the{" "}
          <a
            href="https://careerfoundry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CareerFoundry
          </a>{" "}
          bootcamp (Ruby on Rails stack) and over the last year at the{" "}
          <a
            href="https://digitalcareerinstitute.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Career Institute
          </a>{" "}
          in Berlin (MERN stack: MongoDB, Express, React, Node).
        </p>
        <p>
          As browsers and web tech have become more sophisticated, memory and
          storage space has grown exponentially, and our daily lives - from
          shopping and communication all the way to how we consume art - have
          gone increasingly digital, I am more intrigued than ever about the
          possibilites of the web. My programming knowledge is growing daily. I
          am excited to learn more so that I can combine programming with my
          creative instincts to actualize fun and engaging web projects and
          features.
        </p>
      </div>
    </section>
  );
};

export default About;
