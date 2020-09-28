import React, { useState } from "react";
import projectData from "../../data.json";
import Project from "./Project.js";

// const Projects = () => {
//   const items = projectData.map((item) => {
//     return (
//       <div key={item.id} className="project">
//         <div className="projectPic">
//           <img src={process.env.PUBLIC_URL + `${item.img}`} />
//         </div>
//         <div className="projectInfo">
//           <a href={item.link} target="blank">
//             <h2>{item.project}</h2>
//           </a>

//           {/* <img src={process.env.PUBLIC_URL + `${item.img}`} /> */}
//           <p>{item.description}</p>
//           <p>{item.tech}</p>
//         </div>
//       </div>
//     );
//   });
//   console.log(projectData);
//   return (
//     <section id="projects">
//       <p>Here are some projects I have worked on recently...</p>
//       <div id="projectHolder">{items}</div>
//     </section>
//   );
// };

// export default Projects;

const Projects = () => {
  const [projectId, setProjectId] = useState(0);
  let currentProject = projectData[projectId];
  const gridItems = projectData.map((item) => {
    return (
      <div
        key={item.id}
        className="project"
        onClick={() => {
          setProjectId(item.id - 1);
        }}
      >
        <img src={process.env.PUBLIC_URL + `${item.img}`} alt={item.project} />
      </div>
    );
  });
  return (
    <section id="projects">
      <p>Here are some projects I have worked on recently...</p>

      <div id="projectHolder">
        <div
          className="prev"
          onClick={() => {
            if (projectId !== 0) {
              setProjectId(projectId - 1);
            } else {
              setProjectId(projectId + (projectData.length - 1));
            }
          }}
        >
          {" "}
          &lsaquo;
        </div>
        <Project currentProject={currentProject} />
        <div
          className="next"
          onClick={() => {
            if (projectId !== projectData.length - 1) {
              setProjectId(projectId + 1);
            } else {
              setProjectId(projectId - (projectData.length - 1));
            }
          }}
        >
          {" "}
          &rsaquo;
        </div>
      </div>

      <div id="projectGridNav">{gridItems}</div>
    </section>
  );
};

export default Projects;
