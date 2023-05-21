import React from "react";

const ProjectsButton = ({ styles }) => {
  return (
    <section>
      <a href="/projects">
        <button
          type="button"
          className={`mr-2 xs:mr-6 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] ease-in-out duration-300 hover:shadow-xl hover:scale-105 `}
        >
          Check out my projects
        </button>
      </a>
    </section>
  );
};

export default ProjectsButton;
