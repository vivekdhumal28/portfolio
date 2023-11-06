import React from "react";
import "./ProjectMain.css";
import projectInfo from "../../constants/ProjectsList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectMain = () => {
  return (
    <div className="simple">
      <Carousel
        showArrows={true}
        showStatus={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        emulateTouch={true}
        dynamicHeight={false}
      >
        {projectInfo.map((project, index) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.portrait} alt="Project" />
              <div className="dot"></div>
            </div>
            <div className="project-details">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.discription}</p>
              <div className="button-container">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  Git
                </a>
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectMain;

// import React from "react";
// import "./ProjectMain.css";
// import projectInfo from "../../constants/ProjectsList";

// const ProjectMain = () => {
//   return (
//     <>
//       <div className="main">
//         {projectInfo.map((project, index) => (
//           <div className="project-card" key={project.id}>
//             <div className="project-image">
//               <img src={project.portrait} alt="Project" />
//             </div>
//             <div className="project-details">
//               <h2 className="project-name">{project.name}</h2>
//               <p className="project-description">{project.discription}</p>{" "}
//               <div className="button-container">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="github-button"
//                 >
//                   Git
//                 </a>
//                 <a
//                   href={project.visitLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="visit-button"
//                 >
//                   Visit Project
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProjectMain;
