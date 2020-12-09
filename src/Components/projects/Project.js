import React from "react";

const Project = (props) => {
  return (
    <div className="projectContent">
      <div className="imageHolder">
        <a href={props.currentProject.link} target="blank">
          <img
            src={process.env.PUBLIC_URL + `${props.currentProject.img}`}
            alt={props.currentProject.project}
          />
        </a>
      </div>
      <div className="projectDescription">
        <a href={props.currentProject.link} target="blank">
          <h2>{props.currentProject.project}</h2>
        </a>
        <p>{props.currentProject.description}</p>
        <p>{props.currentProject.tech}</p>
      </div>
    </div>
  );
};

export default Project;
