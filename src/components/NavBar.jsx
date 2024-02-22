import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ sticky, title, Showmenu, setShowmenu }) => {
  const handelToggle = () => {
    setShowmenu(true);
  };

  // useEffect(() => {
  //   setShowmenu(false);
  // }, []);

  return (
    <>
      <div
        className={`flex fixed justify-between top-0 w-full px-6 py-2 z-50 sm:px-3  sm:py-3 ${
          sticky ? "bg-lightgreen" : "bg-gray"
        } ${Showmenu ? "hidden" : "flex"} `}>
        <NavLink to="/">
          <p className="text-2xl font-black text-title-text sm:text-xl uppercase cursor-pointer">
            {title}
          </p>
        </NavLink>

        <ul className="flex menufull gap-4 uppercase  font-semibold py-1 px-2 cursor-pointer sm:hidden">
          <NavLink to="/" activeClassName="font-bold">
            <li className=" font-bold">Home</li>
          </NavLink>
          <NavLink to="/book" activeClassName="font-bold">
            <li className=" font-bold">Books</li>
          </NavLink>
          <NavLink to="/lectures" activeClassName="font-bold">
            <li className=" font-bold">LECTURES</li>
          </NavLink>
          <NavLink to="/quotes" activeClassName="font-bold">
            <li className="font-bold">QUOTES</li>
          </NavLink>
          <NavLink to="/blog" activeClassName="font-bold">
            <li className=" font-bold">Blog</li>
          </NavLink>
          <NavLink to="/contact" activeClassName="font-bold">
            <li className=" font-bold">Contact</li>
          </NavLink>
        </ul>
        <span className="hidden sm:block">
          <i
            class="ri-menu-4-fill text-[#081E20] text-2xl cursor-pointer p-1 transform ease-in-out duration-300"
            onClick={handelToggle}></i>
        </span>
      </div>
      {Showmenu && (
        <div className="flex  fixed top-0 flex-col bg-white  resNav">
          <span>
            <i
              class="ri-close-fill text-[#081E20] text-4xl cursor-pointer p-5 float-end"
              onClick={() => {
                setShowmenu(false);
              }}></i>
          </span>
          <ul className=" flex flex-col text-3xl resNav gap-4 uppercase items-center justify-center  font-semibold py-1 px-2 cursor-pointer z-50 transform duration-300 ease-linear  ">
            <NavLink
              to="/"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">Home</li>
            </NavLink>
            <NavLink
              to="/book"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">Books</li>
            </NavLink>
            <NavLink
              to="/lectures"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">LECTURES</li>
            </NavLink>
            <NavLink
              to="/quotes"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">QUOTES</li>
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">Blog</li>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
