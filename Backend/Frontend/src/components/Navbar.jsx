import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4  fixed top-0 left-0 right-0 z-50 bg-white${
          sticky
            ? "sticky-navbar shadow-md bg-white  duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar bg-white">
          <div className="navbar-start  bg-white">
            <div className="dropdown bg-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
               <img className="h-9 ea-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-azRRkJMZOHUQPoBaqK54tjkzCyeAHx5yA&s" alt="logo" />
            <a className=" text-2xl font-semibold cursor-pointer bg-white">bookHeaven</a>
          </div>
          <div className="navbar-end space-x-3 bg-white">
            <div className="navbar-center hidden lg:flex bg-white">
              <ul className="menu menu-horizontal px-1 bg-white">{navItems}</ul>
            </div>
            <div className="hidden md:block bg-white">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2 bg-white">
                <input
                  type="text"
                  className="grow outline-none rounded-md px-1 bg-white"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 bg-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            
            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;