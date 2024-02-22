import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-lightgreen flex flex-col flex-wrap gap-4 p-5 gap-2sm:items-center sm:justify-center  ">
        <div className="flex flex-row justify-between px-16 sm:flex-col ">
          <ul className="flex flex-col gap-2 p-2   font-semibold sm:flex-col md:flex-col ">
            <p className="text-3xl  font-bold uppercase mb-2 opacity-30">
              Self
            </p>
            <li className="cursor-pointer hover:font-bold text-title-text/60 hover:text-title-text/80">
              My Photos
            </li>
            <li className="cursor-pointer hover:font-bold  text-title-text/60 hover:text-title-text/80">
              Praises
            </li>
            <li className="cursor-pointer hover:font-bold  text-title-text/60 hover:text-title-text/80">
              My Capabilities
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-2  font-semibold sm:flex-col md:flex-col ">
            <p className="text-3xl  font-bold uppercase mb-2 opacity-30">
              Other
            </p>
            <li className="cursor-pointer hover:font-bold  text-title-text/60 hover:text-title-text/80">
              Downloads & Resources
            </li>
            <li className="cursor-pointer hover:font-bold  text-title-text/60 hover:text-title-text/80">
              Privacy Policy
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-2  font-semibold sm:flex-col md:flex-col ">
            <p className="text-3xl  font-bold uppercase mb-2 opacity-30">
              Social
            </p>
            <li className="flex gap-4 items-center justify-center ">
              <i class="social ri-facebook-circle-fill cursor-pointer text-[#1877f2ff] text-2xl"></i>
              <i class="social ri-instagram-line cursor-pointer text-2xl text-[#e64c7fff]"></i>
              <i class="social ri-linkedin-box-fill cursor-pointer text-2xl text-[#2766b3ff]"></i>
              <i class="social ri-twitter-x-line cursor-pointer text-2xl"></i>
              <i class="social ri-youtube-fill cursor-pointer text-2xl text-[#ff0000ff]"></i>
            </li>
          </ul>
        </div>

        <p className="text-center  font-semibold text-title-text/70">
          COPYRIGHT © {new Date().getFullYear()} ENAMUL HAQUE - ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
