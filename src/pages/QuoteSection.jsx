import React from "react";
import quotedata from "../assets/json/quote";

const QuoteSection = () => {
  const latestQuote = quotedata[quotedata.length - 1];
  return (
    <div className="quote flex flex-col justify-between items-center pe-10 sm:flex-col sm:pe-0 ">
      {quotedata
        .reverse()
        .slice(latestQuote, 1)
        .map(({ quote, author }) => {
          return (
            <>
              <div className="flex gap-10 flex-col ">
                <p className="text-4xl font-bold tracking-normal text-title-text text-center sm:text-4xl">
                  `{quote}`
                </p>
                <p className="text-2xl font-semibold italic text-title-text/75 text-right pe-60 sm:pe-10 sm:text-3xl">
                  - {author}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default QuoteSection;
