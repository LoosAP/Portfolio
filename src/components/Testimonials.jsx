import React from "react";
import { feedback } from "../consts";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient " />

      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <h1 className={styles.heading2}>
          What people say <br className="hidden sm:block" /> about me
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            amet accusamus incidunt excepturi, consequatur dolores, cupiditate
            molestias impedit esse ut possimus provident facere eligendi. Et
            dolorum impedit inventore quos officiis!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
