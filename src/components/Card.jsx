import React from "react";

const Card = ({ title, img, desc }) => {
  return (
    <>
      <div className="showitem">
        <div className="shadow innershowitem shadow-title-text/50   h-52 mb-2 w-60 p-3 flex flex-col  items-center rounded cursor-pointer hover:bg-green/10 transform duration-300 ease">
          <img
            width="48"
            height="48"
            className="mt-3 mb-2"
            src={img}
            alt="glassmorphism"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold mb-1 uppercase">{title}</p>
            <p className="font-medium text-center text-title-text/65">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
