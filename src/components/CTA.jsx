import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      id="CTA"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-col items-center flex-1 md:items-start">
        <h2 className={`${styles.heading2}`}>Get in contact with me today!</h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Like what you see? I'm always open to new opportunities and projects.
          If you have a project that you want to get started, think you need my
          help with something or just fancy saying hey, then get in touch. I
          look forward to hearing from you!
        </p>
      </div>
      <div className={`${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
