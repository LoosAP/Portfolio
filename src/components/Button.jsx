import React from "react";

const Button = ({ styles }) => {
  return (
    <section>
      <button
        type="button"
        className={`mr-2 xs:mr-6 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      >
        Get Started
      </button>
      <a href="../src/assets/Loós András Péter Önéletrajz.pdf" target="_blank">
        <button
          type="button"
          className={`mt-3 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
        >
          Download my cv
        </button>
      </a>
    </section>
  );
};

export default Button;
