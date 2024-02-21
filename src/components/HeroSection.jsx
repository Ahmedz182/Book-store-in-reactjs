import React from "react";
import book from "../assets/img/author.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray  flex flex-wrap justify-between px-20 mt-12 pt-6 sm:mt-12 sm:px-6">
        <div className="hero gap-4 w-[50%] md:w-full sm:w-full flex flex-col p-1  justify-center leading-relaxed">
          <p className=" text-5xl font-black uppercase text-title-text ">
            Discover Knowledge.
          </p>
          <p className=" text-5xl font-semibold uppercase tracking-normal text-title-text ">
            Elevate Your Reading Experience
          </p>
          <div className="btn float-left">
            <Link to="/books">
              <button className="rounded border ms-2 text-title-text  float-start w-36 px-3 py-2 border-green/90 duration-300  hover:bg-green hover:text-white mt-4 ease-in-out font-semibold">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[45%] mt-5  lg:w-[50%] md:w-full sm:w-full sm:mt-0">
          <img
            src={book}
            alt="book"
            className=" float-right me-5 heroimg drop-shadow-[0_5px_7px_#0b2629ff] mt-[-20px]  lg:w-[70%] xl:w-[70%]  2xl:w-[80%]  "
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
