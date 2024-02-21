import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center  items-center sm:mb-2">
      <input
        type="search"
        className="w-72  sm:w-[86dvw] rounded bg-gray border border-[#0000]/25 p-2"
        placeholder="Search Here"
      />
    </div>
  );
};

export default Search;
