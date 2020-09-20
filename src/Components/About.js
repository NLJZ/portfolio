import React from "react";
import Me from "../images/me2.jpg";

const About = () => {
  return (
    <section id="about">
      <div id="aboutText">
        <p>Hello, this is Nathan. I am a web developer living in Berlin.</p>
        <p>
          My interest in web development began in the mid-90s when I was
          carefully plotting layouts with tables and uploading the results to
          Geocities. Back then Glassdog was a frequent browse for web design
          inspiration and Adobe Flash was the go to for animation and multimedia
          projects. Remember those days? Maybe not...
        </p>
      </div>
      <img src={Me} />
    </section>
  );
};

export default About;
