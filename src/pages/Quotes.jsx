import React, { useEffect } from "react";
import Title from "../components/Title";
import quotedata from "../assets/json/quote";
import Quote from "../components/Quote";

const Quotes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mt-16 flex flex-col">
        <div className="flex justify-between items-center pe-10 sm:flex-col sm:pe-0">
          <Title title="My Quotes" />
        </div>
      </div>
      <div>
        <div className="flex  flex-wrap  gap-x-4  justify-around gap-y-7 p-8 py-8 ">
          {quotedata.map(({ quote, author, date, category }) => {
            return (
              <div className="min-w-[90dvw] quotecard bgquote shadow border border-title-text/5 shadow-title-text/35 sm:w-full   pb-3 gap-3 flex flex-col  cursor-pointer transform hover:translate-y-[-0.4rem] transition-transform duration-300 ease-in-out ">
                <Quote
                  category={category}
                  quote={quote}
                  author={author}
                  date={date.$date.split("T")[0]}
                />
              </div>
            );
          })}

          <div className="flex items-center  justify-center w-screen">
            <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
