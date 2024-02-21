import React from "react";
import { NavLink } from "react-router-dom";

const Sidebarmenu = () => {
  return (
    <div className="flex flex-col">
      <span>
        <i class="ri-close-fill text-[#081E20] text-2xl cursor-pointer p-1"></i>
      </span>
      <ul className=" flex flex-col  gap-4 uppercase items-center justify-center  font-semibold py-1 px-2 cursor-pointer z-50 transform duration-300 ease-linear  ">
        <NavLink to="/" activeClassName="font-bold">
          <li className=" hover:font-bold">Home</li>
        </NavLink>
        <NavLink to="/books" activeClassName="font-bold">
          <li className=" hover:font-bold">Books</li>
        </NavLink>
        <NavLink to="/lectures" activeClassName="font-bold">
          <li className=" hover:font-bold">LECTURES</li>
        </NavLink>
        <NavLink to="/quotes" activeClassName="font-bold">
          <li className=" hover:font-bold">QUOTES</li>
        </NavLink>
        <NavLink to="/blog" activeClassName="font-bold">
          <li className=" hover:font-bold">Blog</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="font-bold">
          <li className=" hover:font-bold">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebarmenu;
