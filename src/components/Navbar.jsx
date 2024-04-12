import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";
import { loginFalse, loginTrue } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import { TiUserAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

const Navbar = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(0)
  const [miniBar, setMiniBar] = useState(false);

  let handleLogout = ()=>{
    localStorage.removeItem("token")
    setKey(Math.random())
    setMiniBar(!miniBar);
  }

  useEffect(() => {
    let checkLogin = localStorage.getItem("token");
    if (checkLogin) {
      dispatch(loginTrue());
    } else {
      dispatch(loginFalse());
    }
  }, [key]);

  let handleMiniBar = () => {
    setMiniBar(!miniBar);
  };

  const isLogin = useSelector((state) => state.isLogin.value);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Superior Science Academy</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">
              Home
            </Link>
            <Link className="mr-5 hover:text-gray-900" to="/enroll">
              Enorll
            </Link>
            <Link className="mr-5 hover:text-gray-900" to="/about">
              About
            </Link>
          </nav>
          {isLogin ? (
            <div className="relative">
              <TiUser
                className="text-2xl mt-2 md:mt-0 cursor-pointer"
                onClick={handleMiniBar}
              />
              {miniBar && 
              <div className="absolute right-5 top-8 text-white flex flex-col font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                {/* <span className="cursor-pointer" key={key} onClick={handleLogout}>Enroll Now</span> */}
                <span className="cursor-pointer" key={key} onClick={handleLogout}>Logout</span>
              </div>
              }
            </div>
          ) : (
            <div className="cursor-pointer">
            <Link to="/login">
              <TiUserAdd className="text-2xl mt-2 md:mt-0" />
            </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
