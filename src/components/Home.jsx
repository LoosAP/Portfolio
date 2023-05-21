import React from "react";
import { CTA, Hero, Tools, WhoAmI } from "../components";
import styles from "../style";
import ToMyProjects from "./ToMyProjects";

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <WhoAmI />
          <ToMyProjects />

          <Tools />
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;
