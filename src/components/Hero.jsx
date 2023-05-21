import React from "react";
import { discount, me } from "../assets";
import styles from "../style";
import GetInContact from "./GetInContact";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="hidden mr-0 ss:flex md:mr-4">
            <GetInContact />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Of Webdev
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I'm a 22 year old web developer from Hungary. I have been taking
          coding seriously for 3 years now and I'm looking for a job as a junior
          web developer. I'm a fast learner and I'm always open to new
          opportunities and projects. Come and look around on my website and if
          you like what you see, feel free to contact me!
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:mx-0 mx-7 md:my-0 my-10 relative pink-gradient`}
      >
        <div className="animate-pulse bg-gradient-to-r from-[#9f8be8] w-[100%] h-[100%] z-[2] absolute px-1 py-1 to-[#ff99b6] rounded-[10%] justify-between items-center"></div>
        <img
          src={me}
          alt="Me"
          className="w-[100%] h-[100%] relative px-1 py-1 z-[5] rounded-[10%]"
        />
        <div className="absolute z-[0] w-[90%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[110%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[70%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetInContact />
      </div>
    </section>
  );
};

export default Hero;
