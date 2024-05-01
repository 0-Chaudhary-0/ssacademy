import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";
import { loginFalse, loginTrue } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import { TiUserAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);
  const [miniBar, setMiniBar] = useState(false);

  let handleLogout = () => {
    localStorage.removeItem("token");
    setKey(Math.random());
    setMiniBar(!miniBar);
    setIsOpen(!isOpen);
  };

  let handleLogoutBig = () => {
    localStorage.removeItem("token");
    setKey(Math.random());
    setMiniBar(!miniBar);
  };

  useEffect(() => {
    let checkLogin = localStorage.getItem("token");
    if (checkLogin) {
      dispatch(loginTrue());
    } else {
      dispatch(loginFalse());
    }
  }, [key]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Disable scrolling on the body when the navigation menu is open
      document.body.classList.add('overflow-y-hidden');
    } else {
      // Enable scrolling on the body when the navigation menu is closed
      document.body.classList.remove('overflow-y-hidden');
    }
  };

  const isLogin = useSelector((state) => state.isLogin.value);

  return (
    <>
      <header className="text-gray-200 bg-gray-100 body-font z-[1000]">
        <nav className="bg-gray-200 shadow-md z-[1000]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[1000]">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex gap-4 items-center">
                  <button
                    onClick={toggleNavbar}
                    className={`text-black hover:text-black focus:outline-none focus:text-black md:hidden ${
                      isOpen ? "hidden" : "block"
                    }`}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={toggleNavbar}
                    className={`text-white hover:text-white focus:outline-none focus:text-white ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <svg
                      className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div>
                    <Link
                      className="flex title-font font-medium items-center text-black md:mb-0"
                      to="/"
                    >
                      <img
                        src="/title.jpg"
                        alt="Superior Science Academy"
                        className="h-8 w-8 image"
                      />
                      <span className="ml-3 text-xl">
                        Superior Science Academy
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <div className="mr-6"></div>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-black px-3 py-2"
                    >
                      Home
                    </Link>
                    <Link
                      to="/enroll"
                      className="text-gray-600 hover:text-black px-3 py-2"
                    >
                      Admissions
                    </Link>
                    <Link
                      to="/about"
                      className="text-gray-600 hover:text-black px-3 py-2"
                    >
                      About
                    </Link>
                    {isLogin ? (
                      <div className="text-pink font-semibold rounded-lg">
                        {/* <TiUser className="text-2xl text-pink-600 mt-2 md:mt-0" /> */}
                        <span
                          className="cursor-pointer block text-pink-600 hover:text-pink px-3 py-2"
                          key={key}
                          onClick={handleLogoutBig}
                        >
                          Logout
                        </span>
                      </div>
                    ) : (
                      <div className="cursor-pointer">
                        <Link to="/login">
                          <span
                            className="text-pink-500 font-semibold block hover:text-pink px-3 py-2"
                            onClick={handleLogoutBig}
                          >
                            Login
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute left-0 top-0 h-full bg-gray-200 z-[1000] shadow-lg md:hidden transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } w-80`}
          >
            <span className="text-black text-xl relative top-5 left-2 hover:text-black focus:outline-none font-semibold focus:text-black">
              <Link to="/" onClick={toggleNavbar}>
                Daulatpur Coaching
              </Link>
            </span>
            <div className="px-2 pt-10 pb-3 sm:px-3">
              <button
                onClick={toggleNavbar}
                className={`absolute right-5 top-6 text-black hover:text-black focus:outline-none focus:text-black ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                onClick={toggleNavbar}
                to="/"
                className="block text-gray-600 hover:text-black px-3 py-2"
              >
                Home
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/enroll"
                className="block text-gray-600 hover:text-black px-3 py-2"
              >
                Admission
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/about"
                className="block text-gray-600 hover:text-black px-3 py-2"
              >
                About
              </Link>

              {isLogin ? (
                <div className="text-pink font-semibold rounded-lg flex items-center gap-2">
                  {/* <TiUser className="text-2xl text-pink-600 mt-2 md:mt-0" /> */}
                  <span
                    className="cursor-pointer block text-pink-600 hover:text-pink px-3 py-2"
                    key={key}
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </div>
              ) : (
                <div className="cursor-pointer">
                  <Link to="/login">
                    <span
                      className="text-pink-500 font-semibold block hover:text-pink px-3 py-2"
                      onClick={toggleNavbar}
                    >
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
