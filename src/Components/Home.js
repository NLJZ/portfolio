import React from "react";
import Hands from "../images/handstyping7.jpg";

const Home = () => {
  return (
    <section id="home">
      <div id="splash-content">
        <p>Berlin-based, Fullstack Web Developer</p>
        <img src={Hands} alt="splash of hands typing" />
      </div>
    </section>
  );
};

export default Home;
