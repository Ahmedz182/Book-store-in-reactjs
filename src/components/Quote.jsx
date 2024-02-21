import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Quote = ({ quote, author, date, category }) => {
  return (
    <>
      <div className="  mb-4 flex flex-col gap-6 px-4  ">
        <p className="text-l mt-[20px] font-bold float-left text-title-text/80  sm:pe-10 ">
          {category}
        </p>
        <p className="text-xl font-bold text-title-text tracking-normal text-center  ">
          {quote}
        </p>
        <p className="text-l font-semibold italic pe-10 text-right text-title-text/60 sm:pe-5 ">
          - {author}
        </p>
      </div>
      <div className="flex justify-end items-center p-2">
        <p className=" text-title-text/75  font-semibold">Click to copy</p>

        <div
          className="ps-2 m-1"
          onClick={() => {
            alert("Quote Copied");
          }}>
          <CopyToClipboard text={quote}>
            <i class="social ri-clipboard-fill cursor-pointer text-[#4b4b4b] text-2xl"></i>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default Quote;
