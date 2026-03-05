import React from "react";
// Components
import ProjectCard from "./ProjectCard";
// Styles
import "./Projects.css";
// Util
import {projectData} from '../utility/projectsData'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container wrap">
        <div className="projects__text">
          <h2 className="projects__heading">Latest Projects</h2>
        </div>
        <div className="projects__grid">
          {projectData.map((project) => {
            return <ProjectCard key={project.id} data={project} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
