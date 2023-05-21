import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-poppins font-bold text-[36px] leading-[54px] text-white text-center">
        404
      </h1>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white text-center max-w-[600px] mt-5">
        Page not found
      </p>
      <button
        className="mt-5 bg-pink-gradient py-4 px-6 rounded-[10px] text-primary font-poppins font-medium text-[10px] md:text-[18px] ease-in-out duration-300 hover:shadow-xl hover:scale-105"
        onClick={() => history.back()}
      >
        Return to previous page
      </button>
    </div>
  );
};

export default Error404;
