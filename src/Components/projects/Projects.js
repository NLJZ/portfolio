import React from "react";
import projectData from "../../data.json";
import Navbar from "../Navbar.js";

const Projects = () => {
  const items = projectData.map((item) => {
    return (
      <div key={item.id} className="project">
        <a href={item.link} target="blank">
          <h2>{item.project}</h2>
        </a>
        <img src={process.env.PUBLIC_URL + `${item.img}`} />
        <p>{item.description}</p>
      </div>
    );
  });
  console.log(projectData);
  return (
    <section id="projects">
      <Navbar />
      <div id="projectHolder">{items}</div>
    </section>
  );
};

export default Projects;
