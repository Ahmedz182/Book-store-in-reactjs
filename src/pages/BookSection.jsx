import React from "react";
import BookItem from "../components/BookItem";
import bookdata from "../assets/json/book";
import { Link } from "react-router-dom";

const BookSection = () => {
  return (
    <>
      <div className="  flex flex-col flex-wrap items-center justify-center pb-8">
        <div className=" w-full gap-3 gap-y-8 p-10 flex flex-wrap justify-around">
          {bookdata
            .reverse()
            .slice(0, 4)
            .map(({ title, img, tags, language, _id }) => {
              return (
                <BookItem
                  title={title}
                  img={img}
                  tags={tags}
                  id={_id.$oid}
                  category={language}
                />
              );
            })}
        </div>
        <Link to="/book">
          <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
            Read More
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookSection;
