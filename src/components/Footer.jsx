import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-2 pt-10 flex justify-center">
          <div className="flex flex-wrap md:text-left order-first">
            <div className="px-4 mx-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                Company
              </h2>
              <nav className="list-none mb-5">
                <li>
                  <Link to='/terms&policy' className="text-gray-600 hover:text-gray-800">Terms & Policy</Link>
                </li>
              </nav>
            </div>
            <div className=" px-4 mx-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
              Contact Us
              </h2>
              <nav className="list-none mb-5">
                <li>
                <Link to='/contact' className="text-gray-600 hover:text-gray-800">Contact</Link>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
            <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/title.jpg" alt="Superior Science Academy" className="h-8 w-8 image" />
            <span className="ml-3 text-xl">Superior Science Academy</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              Copyright© 2024. All rights reserved by Superior Science Academy
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://web.facebook.com/profile.php?id=100094312606426" target="_blank" className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeL inecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
