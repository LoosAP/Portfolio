import React from "react";
import { tools } from "../consts";
import styles from "../style";

const Tools = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]:`}
          >
            <a href={tool.link}>
              <img
                src={tool.logo}
                alt={tool.id}
                className="sm:w-[192px] w-[100px] object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
