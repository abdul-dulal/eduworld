import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2   my-10">
      <div className="text-red-700 font-serif font-semibold w-96">
        <Link to="/"> EDU-WORLD</Link>
      </div>
      <div>
        <p>
          Copyright &copy; {year} . All right reserved{" "}
          <span className="text-red-700 font-serif font-semibold ">
            EDU-WORLD
          </span>
        </p>
      </div>
      <div>
        <div className="flex space-x-3 lg:justify-center mt-3">
          <a
            href="https://web.facebook.com/groups/programmingherocommunity"
            target="blank"
            className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/"
            target="blank"
            className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/programminghero/"
            target="blank"
            className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/c/ProgrammingHero"
            target="blank"
            className="text-xl p-2 border-2 text-black cursor-pointer border-primary rounded-full hover:bg-red-400 hover:text-white hover:border-white hover:rounded-full"
          >
            <ImYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
