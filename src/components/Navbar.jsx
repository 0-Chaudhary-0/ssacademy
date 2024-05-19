import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import { loginFalse, loginTrue } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { GiStabbedNote } from "react-icons/gi";
import { IoAddCircle } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [miniBar, setMiniBar] = useState(false);
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);
  const navRef = useRef();

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        document.body.classList.remove('overflow-y-hidden');
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

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

  return (
    <>
      <header className="bg-gray-100 body-font z-[1000] relative top-0 rounded-lg opacity-85">
        <nav
          ref={navRef}
          className="bg-gray-200 shadow-md z-[1000] absolute top-0 w-full"
        >
          <div className="mx-auto px-4 sm:px-6 z-[1000] bg-gray-500">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex gap-4 items-center">
                  <button
                    onClick={toggleNavbar}
                    className={`text-white hover:text-gray-200 focus:outline-none focus:text-white md:hidden ${
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
                    className={`text-white hover:text-gray-200 focus:outline-none focus:text-white ${
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
                  <div className="text-white">
                    <Link
                      className="flex title-font font-medium items-center text-white md:mb-0"
                      to="/"
                    >
                      <img
                        src="/title.jpg"
                        alt="Superior Science Academy"
                        className="h-8 w-8 image"
                      />
                      <span className="ml-3 text-xl text-white">
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
                      className="text-white hover:text-gray-200 px-3 py-2 font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/enroll"
                      className="text-white hover:text-gray-200 px-3 py-2 font-semibold"
                    >
                      Admissions
                    </Link>
                    <Link
                      to="/about"
                      className="text-white hover:text-gray-200 px-3 py-2 font-semibold"
                    >
                      About
                    </Link>
                    {isLogin ? (
                      <div className="rounded-lg">
                        <span
                          className="cursor-pointer block text-red-600 font-semibold hover:text-red-800 px-3 py-2"
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
                            className="text-red-600 font-semibold block hover:text-red-800 px-3 py-2"
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
            className={`absolute left-0 top-0 h-[110vh] bg-gray-900 z-[1000] shadow-lg md:hidden transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } w-80 rounded-lg p-4`}
          >
            <span className="text-white text-xl relative top-5 left-2 focus:outline-none font-semibold focus:text-black">
              <Link to="/" onClick={toggleNavbar}>
                Daulatpur Coaching
              </Link>
            </span>
            <div className="px-2 pt-10 pb-3 sm:px-3">
              <button
                onClick={toggleNavbar}
                className={`absolute right-5 top-6 text-white focus:outline-none focus:text-black ${
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
                className="block text-white px-3 py-2 font-semibold flex items-center"
              >
              <span className="mx-2"> <FaHome /> </span>
                Home
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/enroll"
                className="block text-white hover:text-white px-3 py-2 font-semibold flex items-center"
              >
                <span className="mx-2"><IoAddCircle /></span>
                Admission
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/about"
                className="block text-white px-3 py-2 font-semibold flex items-center "
              >
                <span className="mx-2"><BsFillInfoCircleFill /></span>
                About
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/contact"
                className="block text-white px-3 py-2 font-semibold flex items-center "
              >
                <span className="mx-2"><MdAddIcCall /></span>
                Contact
              </Link>
              <Link
                onClick={toggleNavbar}
                to="/terms&policy"
                className="block text-white px-3 py-2 font-semibold flex items-center "
              >
                <span className="mx-2"><GiStabbedNote /></span>
                Terms&Policy
              </Link>

              {isLogin ? (
                <div className="font-semibold rounded-lg flex items-center gap-2">
                  <span
                    className="cursor-pointer block text-pink-600 hover:text-white px-3 py-2 font-semibold flex items-center"
                    key={key}
                    onClick={handleLogout}
                  >
                    <span className="mx-2"><CiLogout /></span>
                    Logout
                  </span>
                </div>
              ) : (
                <div className="cursor-pointer">
                  <Link to="/login">
                    <span
                      className="text-pink-600 font-semibold block hover:text-white px-3 py-2 font-semibold flex items-center"
                      onClick={toggleNavbar}
                    >
                      <span className="mx-2"><FiLogIn /></span>
                      Login
                    </span>
                  </Link>
                </div>
              )}
              <div className="text-white absolute bottom-20">
                <p>© {new Date().getFullYear()} Superior Science Academy</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
