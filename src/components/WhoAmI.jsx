import React from "react";
import styles, { layout } from "../style";
const WhoAmI = () => {
  return (
    <section
      className={`${styles.paddingX} ${styles.flexCenter} flex-col relative my-0`}
    >
      <div className={`${layout.section} items-center justify-between w-full`}>
        <h1 className={styles.heading2}>
          What people say <br className="hidden sm:block" /> about me
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            I seem to attract people who are driven, ambitious, and want to make
            a difference in the world. I love working with people who are
            passionate about what they do and want to make a positive impact on
            the world. I'm a big believer in the power of the internet to change
            the world for the better, and I'm excited to be a part of that
            change.
          </p>
        </div>
      </div>
      <div
        className={`${layout.sectionReverse} items-center justify-between w-full`}
      >
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
            I've always been fascinated by technology and the web ever since I
            was a kid. To have all these amazing tools all at one place in your
            web browser feels superior to me. Since I picked up programming I
            knew I wanted to be a web developer.
          </p>
        </div>
        <h1 className={`ml-2 ${styles.heading2}`}>
          My journey with <br className="hidden sm:block" /> web development
        </h1>
      </div>
    </section>
  );
};

export default WhoAmI;
