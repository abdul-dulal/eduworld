import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import avatar from "../../assets/icon/avatar.a296afc6.png";
import { HiMenu } from "react-icons/hi";

const Submenu = () => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);
  const handleHide = () => {
    setHide(!hide);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" grid grid-cols-2 container lg:hidden md:hidden  ">
      <div className="grid grid-cols-2 relative">
        <div className="space-y-6">
          <HiMenu className="text-3xl" onClick={handleShow} />
          {show ? (
            <>
              <ul className=" gap-8 space-y-6 ">
                <li className="text-sm font-semibold mt-2 hover:bg-[#7C3AED] p-[10px] ">
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            padding: "10px",
                            background: "#7C3AED",
                            width: "100%",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"course"}
                    className=""
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"signup"}
                    className=""
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                            marginBottom: "10px",
                          }
                        : { color: "black" }
                    }
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2">
                  <NavLink
                    to={"contact"}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            " "
          )}
        </div>
        <div className="ml-[-3px] mt-[-10px]">
          <Link to="/" className="text-3xl ">
            EDUWORDL
          </Link>
        </div>
      </div>
      <div className="">
        <ul className="flex  justify-center items-center gap-7">
          <div class="dropdown dropdown-end ">
            <label tabIndex="0" class="">
              <img
                src={avatar}
                onClick={handleHide}
                className="w-8 h-8  ml-24 mb-5 cursor-pointer"
                alt=""
              />
            </label>
            {hide ? (
              ""
            ) : (
              <>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/my-account"}>My Account</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
