import React from "react";
import BlogItem from "../components/BlogItem";
import blogdata from "../assets/json/blog";
import { Link } from "react-router-dom";
const BlogSection = () => {
  return (
    <>
      <div className="flex  flex-wrap  gap-x-4  justify-around- gap-y-7 p-8 py-12">
        {blogdata.slice(0, 6).map(({ title, desc, img, _id, date, tags }) => {
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
          <Link to="/blog">
            <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
