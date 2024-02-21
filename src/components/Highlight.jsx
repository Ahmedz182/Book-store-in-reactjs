import React from "react";
import Card from "./Card";
import author from "../assets/img/authors.png";
import Research from "../assets/img/research.webp";
import wisper from "../assets/img/wisper.png";
const Highlight = () => {
  return (
    <>
      <div className="py-2">
        <div className="flex rounded h-72 items-center  mt-8 mx-16 overflow-hidden justify-around  flex-wrap sm:h-full sm:py-10 sm:gap-y-6 ">
          <Card
            title="Author"
            img={author}
            desc="Crafting words, weaving worlds; authoring tales that resonate."
          />
          <Card
            title="Researcher "
            img={Research}
            desc="Exploring frontiers, unraveling mysteries."
          />
          <Card
            title="Data Whisperer"
            img={wisper}
            desc="Sculpting insights from raw silence, the data whisperer speaks."
          />
        </div>
      </div>
    </>
  );
};

export default Highlight;
