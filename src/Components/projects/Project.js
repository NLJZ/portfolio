import React from "react";

const Project = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="projectContent">
        <div className="imageHolder">
          <img
            src={process.env.PUBLIC_URL + `${props.currentProject.img}`}
            alt={props.currentProject.project}
          />
        </div>
        <div className="projectDescription">
          <a href={props.currentProject.link} target="blank">
            <h2>{props.currentProject.project}</h2>
          </a>
          <p>{props.currentProject.description}</p>
          <p>{props.currentProject.tech}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
