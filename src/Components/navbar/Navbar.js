import React from "react";
import { NavLink, Link } from "react-router-dom";
import Submenu from "./Submenu";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseInit";
import Logout from "../shere/Logout";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="">
      <div className="flex container justify-between  items-center lg:h-20 md:h-16 h-6 invisible  md:visible lg:visible">
        <div className="">
          <ul className="flex gap-8 items-center justify-center   text-black">
            <li className="text-2xl ">
              <Link to={"/"} className={`uppercase cursor-pointer`}>
                <img src={logo} alt="" className="w-18 h-8  mt-2" />{" "}
              </Link>
            </li>
            <li className="text-sm font-semibold mt-2 ">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px",
                        padding: "10px",
                        background: "#4B5563",
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

            <>
              <li className="text-sm font-semibold mt-2 ">
                <NavLink
                  to={"manage-tems"}
                  className=""
                  style={({ isActive }) =>
                    isActive
                      ? {
                          border: "2px",
                          padding: "10px",
                          background: "#4B5563",
                          color: "white",
                          borderRadius: "4px",
                        }
                      : { color: "black" }
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
                          background: "#4B5563",
                          color: "white",
                          borderRadius: "4px",
                        }
                      : { color: "black" }
                  }
                >
                  Add Item
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
                          background: "#4B5563",
                          color: "white",
                          borderRadius: "4px",
                        }
                      : { color: "black" }
                  }
                >
                  My Item
                </NavLink>
              </li>
            </>

            <li className="text-sm font-semibold mt-2">
              <NavLink
                to={"blogs"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px",
                        padding: "10px",
                        background: "#4B5563",
                        color: "white",
                        borderRadius: "4px",
                      }
                    : { color: "black" }
                }
              >
                Blogs
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
                          background: "#4B5563",
                          color: "white",
                          borderRadius: "4px",
                        }
                      : { color: "black" }
                  }
                  to={"signup"}
                >
                  Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Submenu />
    </nav>
  );
};

export default Navbar;
