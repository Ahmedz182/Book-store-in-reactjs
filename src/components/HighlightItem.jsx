import React from "react";

const HighlightItem = ({ title, img, desc, tags, id, date }) => {
  return (
    <div>
      <div className="blogcard min-w-[42dvw] sm:w-[90dvw] sm:flex-col sm:justify-center bookItem  pb-3 gap-3 bg-white flex flex-wrap  cursor-pointer transform hover:translate-y-[-0.4rem] transition-transform duration-300 ease-in-out">
        <img className="blogimg rounded" src={img} alt="bookCover" />
        <div className="flex flex-col px-2 gap-2">
          <p className="font-semibold text-xl title ">{title}</p>
          <div className="flex items-center">
            <p className="font-medium text-title-text/75">{date}</p>
            &nbsp; |&nbsp;
            {tags.slice(0, 3).map((tag) => (
              <p
                key={tag}
                className="font-medium  rounded mx-[1px] p-[2px] px-[4px] border bg-title-text/85 text-white">
                {tag}
              </p>
            ))}
          </div>
          <p className="font-medium text-title-text/75 highlight-desc">
            {desc}
          </p>
        </div>
        <div>
          <button className="border ms-4 text-sm w-max p-2 rounded hover:bg-title-text hover:text-white transform ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightItem;
