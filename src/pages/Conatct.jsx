import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" contact mt-10 flex items-center justify-center ">
        <div className="animate-fade-down animate-ease-in-out animate-normal animate-fill-both p-3 m-10 w-2/4 sm:w-full ">
          <form
            action="sumbit"
            className=" flex flex-col formContact  bg-lightblue/50 px-8 py-3 rounded-lg gap-2 ">
            <p className="font-black text-center m-2 my-5 text-2xl uppercase  text-title-text/70">
              Get in touch
            </p>
            <label htmlFor="email" className="font-semibold">
              Full Name :
            </label>

            <input
              type="text"
              className="h-10 ps-3   rounded"
              name="name"
              placeholder="Enter Your Name"
              id="name"
            />
            <label htmlFor="email" className="font-semibold">
              Email Address :
            </label>
            <input
              type="email"
              className="h-10 ps-3  rounded"
              placeholder="Enter Your Email"
              name="email"
              id="email"
            />
            <label htmlFor="email" className="font-semibold">
              Your Message :
            </label>
            <textarea
              type="email"
              className=" ps-3 pt-2  rounded"
              placeholder="Enter Your Email"
              name="email"
              rows="8"
              id="email"
            />
            <div className="float-end pe-1 py-3">
              <button
                type="submit"
                className="bg-title-text/80 hover:bg-title-text transform duration-200 ease float-end text-white text-sm border border-title-text/50 w-max p-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
