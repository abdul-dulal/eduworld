import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseInit";
import Logout from "../shere/Logout";

const Submenu = () => {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" grid grid-cols-2 container lg:hidden md:hidden bg-[#035269]">
      <div className="grid grid-cols-2 relative pt-5">
        <div className="">
          <HiMenu className="text-3xl text-white" onClick={handleShow} />
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
                        : { color: "white" }
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"manage-item"}
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
                    Manage Item
                  </NavLink>
                </li>

                <li className="text-sm font-semibold mt-2">
                  <NavLink
                    to={"add-item"}
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
                    Add Item{" "}
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2">
                  <NavLink
                    to={"my-item"}
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
                    My Item
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"blogs"}
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
                        : { color: "white" }
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            " "
          )}
        </div>
        <div className="ml-[-3px] mt-[-10px]">
          <Link to="/" className="text-3xl text-white ">
            Wirehouse
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <ul className="  ml-32 mt-[-8] pt-4">
          <label tabIndex="0" class="">
            {user ? (
              <Logout />
            ) : (
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
                      : { color: "white" }
                  }
                >
                  Signup
                </NavLink>
              </li>
            )}
          </label>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
