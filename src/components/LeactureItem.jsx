import React from "react";

const LeactureItem = ({ url, title, description }) => {
  return (
    <div className="flex  formContact   gap-x-5 rounded p-3 sm:flex-col sm:gap-y-3">
      <iframe
        className="w-2/4 h-96 sm:w-[100%] "
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div className=" flex flex-col w-2/4 gap-y-6 justify-center px-4 items-center sm:w-[100%]">
        <p className="font-semibold text-2xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeactureItem;
