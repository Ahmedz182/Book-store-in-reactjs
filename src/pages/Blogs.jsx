import React, { useEffect } from "react";
import Title from "../components/Title";
import BlogItem from "../components/BlogItem";
import blogdata from "../assets/json/blog";
const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-24 flex flex-col">
        <div className="flex justify-between items-center pe-10 sm:flex-col sm:pe-0">
          <Title title="My Blogs" />
        </div>
      </div>
      <div className="mt-3">
        <div className="flex  flex-wrap  gap-x-4  justify-around- gap-y-7 p-8 py-12">
          {blogdata.map(({ title, desc, img, _id, date, tags }) => {
            return (
              <BlogItem
                key={_id}
                title={title}
                desc={desc}
                img={img}
                tags={tags}
                date={date.$date.split("T")[0]}
              />
            );
          })}

          <div className="flex items-center  justify-center w-screen">
            <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
