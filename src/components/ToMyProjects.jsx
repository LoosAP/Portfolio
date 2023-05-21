import React from "react";
import { projectsShowcase } from "../assets";
import styles, { layout } from "../style";
import ProjectsButton from "./ProjectsButton";
// just to clarify, this is a part of the homepage, not a separate page
const ToMyProjects = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img
          src={projectsShowcase}
          alt="projectShowcase"
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className={`${layout.sectionInfo} md:ml-10 ml-2`}>
        <h2 className={`${styles.heading2} mb-10`}>
          Check out what i've <br className="hidden sm:block" />
          been working on
        </h2>
        <ProjectsButton />
      </div>
    </section>
  );
};

export default ToMyProjects;
