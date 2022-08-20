import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import avatar from "../../assets/icon/avatar.a296afc6.png";
import Submenu from "./Submenu";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseInit";
import Logout from "../shere/Logout";

const Navbar = ({ color }) => {
  const [hide, setHide] = useState(true);

  const [user] = useAuthState(auth);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <nav>
      <div className="flex container justify-between items-center lg:h-16 md:h-16 h-6 invisible md:visible lg:visible  bg-[#035269]">
        <div className="">
          <ul
            className={`flex gap-8 items-center   text-white
          `}
          >
            <li className={`text-2xl`}>
              <Link to={"/"} className={`uppercase cursor-pointer  ${color}`}>
                edu-world
              </Link>
            </li>
            <li className="text-sm font-semibold mt-2 ">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px",
                        padding: "10px",
                        background: "#7C3AED",
                        color: "white",
                        borderRadius: "4px",
                      }
                    : { color: "white" }
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
                    : { color: "white" }
                }
              >
                Courses
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
                    : { color: "white" }
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex  justify-center gap-7">
            {user ? (
              <Logout />
            ) : (
              <li className="text-sm font-semibold mt-2 ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          border: "2px",
                          padding: "10px",
                          background: "#7C3AED",
                          color: "white",
                          borderRadius: "4px",
                        }
                      : { color: "white" }
                  }
                  to={"signup"}
                >
                  Signup
                </NavLink>
              </li>
            )}
            <div class="dropdown dropdown-end ">
              <label tabIndex="0" class="">
                {user ? (
                  <img
                    src={user.photoURL}
                    onClick={handleHide}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    alt=""
                  />
                ) : (
                  <img
                    src={avatar}
                    onClick={handleHide}
                    className="w-8 h-8  cursor-pointer"
                    alt=""
                  />
                )}
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
                      <Link to={"/myorder"}>Myorder</Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <Submenu />
    </nav>
  );
};

export default Navbar;
