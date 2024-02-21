import React from "react";

const BlogItem = ({ title, img, desc, date, tags }) => {
  return (
    <div>
      <div className="blogcard bg-white shadow border border-title-text/5 shadow-title-text/35 min-w-[30dvw] sm:w-full bookItem  pb-3 gap-3 flex flex-col  cursor-pointer transform hover:translate-y-[-0.4rem] transition-transform duration-400 ease">
        <img className="blogimg rounded" src={img} alt="bookCover" />
        <div className="flex flex-col px-2 gap-2">
          <p className="font-semibold text-xl title">{title}</p>
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
          <p className="font-medium text-title-text/75 blog-desc">{desc}</p>
        </div>
        <div>
          <button className="border text-sm flex float-right me-4  w-max p-2 rounded hover:bg-title-text hover:text-white transform ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
