import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-primary dark:bg-bg-dark flex flex-col gap-3 items-center justify-center p-4 h-screen">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
          className="h-72 "
          alt="eror"
        />
        <p className="text-secondary text-center dark:text-dark-secondary text-4xl font-bold  items-center ">
          Error 404 - Page not Found
        </p>
        <Link to="/">
          <button className="text-title-text font-semibold text-xl hover:border-b-2 transform ease-in-out">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
