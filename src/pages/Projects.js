import React from "react";
import Project from "../Components/project/Project";
import { projects } from "../helpers/projectsList";

export default function Projects() {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, id) => {
              return (
                <Project
                  key={project.id}
                  title={project.title}
                  img={project.img}
                  id={id}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
