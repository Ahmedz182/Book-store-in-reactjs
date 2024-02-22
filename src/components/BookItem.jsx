import React from "react";
import { useNavigate } from "react-router-dom";

const BookItem = ({ title, img, tags, category, id }) => {
  const navigate = useNavigate();

  const handelBook = () => {
    window.scrollTo(0, 0);
    navigate(`/book/${id}`);
  };
  return (
    <>
      <div>
        <div
          onClick={handelBook}
          className="card shadow border border-title-text/10 bookItem gap-2 bg-white p-3 py-4 rounded-[20px] flex flex-col justify-items-center items-center cursor-pointer transform hover:translate-y-[-0.4rem] transition-transform duration-200 ease sm:w-[82dvw] ">
          <img className="bookimg sm:w-[40dvw]" src={img} alt="bookCover" />
          <p className="font-bold text-l text-center booktitle sm:font-semibold">
            {title}
          </p>
          <div className="flex flex-wrap font-semibold">
            <p> Written in : &nbsp;</p>
            <p className="font-medium text-sm rounded mx-[1px] p-[2px] px-[4px] border bg-title-text/85 text-white">
              {category}
            </p>
          </div>
          {/* <button className="border text-sm p-2 rounded hover:bg-title-text hover:text-white transform ">
            Read More
          </button> */}
        </div>
      </div>
    </>
  );
};

export default BookItem;
