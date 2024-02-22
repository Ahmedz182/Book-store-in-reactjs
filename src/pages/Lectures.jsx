import React from "react";
import Title from "../components/Title";
import LeactureItem from "../components/LeactureItem";
import lecture from "../assets/json/lecture";
const Lectures = () => {
  return (
    <div className="p-4 mt-10 ">
      <Title title="Video Lectures" />
      <p className="text-3xl text-center font-semibold py-4">
        Welcome to my lectures page
      </p>
      <p className="text-3xl text-center pb-6">
        Go to my Youtube page for all my lectures
      </p>
      <div className=" flex flex-col gap-y-4 animate-fade-right animate-ease animate-normal animate-fill-both">
        {lecture.map(({ title, desc, url }) => {
          return <LeactureItem url={url} title={title} description={desc} />;
        })}
      </div>
    </div>
  );
};

export default Lectures;
