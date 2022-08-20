import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container grid grid-cols-3 items-center my-10">
      <div className="text-red-700 font-serif font-semibold">EDU-WORLD</div>
      <div>
        <p>
          Copyright &copy; {year} . All right reserved{" "}
          <span className="text-red-700 font-serif font-semibold">
            EDU-WORLD
          </span>
        </p>
      </div>
      <div>
        <div className="flex space-x-3 justify-center mt-3">
          <span className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full">
            <FaFacebookF />
          </span>
          <span className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full">
            <BsTwitter />
          </span>
          <span className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full">
            <FaLinkedinIn />
          </span>
          <span className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full">
            <BsGoogle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
