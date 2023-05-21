import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetInContact = () => {
  return (
    <a href="#CTA">
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-pink-gradient p-[2px] cursor-pointer ease-in-out duration-300 hover:shadow-xl hover:scale-105`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">Get</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">In Contact</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default GetInContact;
