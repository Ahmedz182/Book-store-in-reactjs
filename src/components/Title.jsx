import React from "react";

const Title = ({ title }) => {
  return (
    <div className="px-8 my-4 flex items-center sm:px-6 sm:w-full">
      <p className="font-bold text-title-text text-2xl uppercase sm:text-xl">
        {title}
      </p>
      <span className="bg-title-text/95 w-[8em] h-[3px] ms-3 mt-1"></span>
    </div>
  );
};

export default Title;
