import React from "react";
import { projects } from "../consts";
import styles from "../style";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="font-poppins font-bold text-[36px] leading-[54px] text-white text-center">
          Projects
        </h1>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white text-center max-w-[600px] mt-5">
          Here are some of my projects that I have worked on.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <ProjectShowcase
            id={project.id}
            key={project.id}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
