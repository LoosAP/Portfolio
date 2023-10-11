import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => {
  return (
    <section>
      <Link to="./contact">
        <button
          type="button"
          className={`mr-2 xs:mr-6 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] ease-in-out duration-300 hover:shadow-xl hover:scale-105`}
        >
          Get In Contact
        </button>
      </Link>
      <a href="../assets/Loós András Péter Önéletrajz.pdf" target="_blank">
        <button
          type="button"
          className={`mt-3 py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] ease-in-out duration-300 hover:shadow-xl hover:scale-105`}
        >
          Download my CV
        </button>
      </a>
    </section>
  );
};

export default Button;
