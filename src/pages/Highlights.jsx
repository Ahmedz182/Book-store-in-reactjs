import React from "react";
import HighlightItem from "../components/HighlightItem";
import highlightdata from "../assets/json/highlighted";
import { Link } from "react-router-dom";
const Highlights = () => {
  return (
    <>
      <div className="flex  flex-wrap bg-lightgreen gap-x-4 justify-around gap-y-7 p-6">
        {highlightdata
          .slice(0, 3)
          .map(({ title, desc, tags, img, _id, date }) => {
            return (
              <HighlightItem
                title={title}
                desc={desc}
                tags={tags}
                img={img}
                id={_id}
                date={date.$date.split("T")[0]}
              />
            );
          })}
        <div className="flex items-center  justify-end w-screen">
          <Link to="/blogs">
            <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
              More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlights;
