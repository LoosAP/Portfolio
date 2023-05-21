import React, { useState } from "react";
import styles, { layout } from "../style";

const ProjectShowcase = ({ title, description, img, link, index }) => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${
        styles.padding
      } flex-col
       bg-black-gradient-2 rounded-[20px] box-shadow md:justify-between md:min-w-[1000px] max-w-[1000px] mx-auto ${
         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
       }`}
    >
      <embed
        src={img}
        alt={title}
        className="xs:w-[256px] w-[192px] h-[100%] object-contain mx-auto md:mx-0 md:mr-10"
      />
      <div className="flex flex-col items-center flex-3 md:items-start ">
        <h2 className={styles.heading2}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] md:pb-5`}>
          {description}
        </p>
        <div className={layout.sectionImg}></div>
        <a href={link}>
          <button
            type="button"
            className={`mr-2 xs:mr-6 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[10px] md:text-[18px] text-primary outline-none rounded-[10px] ease-in-out duration-300 hover:shadow-xl hover:scale-105 `}
          >
            View Project
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProjectShowcase;
