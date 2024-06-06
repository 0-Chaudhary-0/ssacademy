import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import LoadingBar from "react-top-loading-bar";
import { Link } from "react-router-dom";
import Carousel from "./carousel";
import "../index.css";

const Professors = ({ children }) => {
  let arbab = "lorem ipsum jdskskjkskfskl";

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(30);
    setProgress(100);
  }, []);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="relative top-0">
        <Carousel />
      </div>
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center text-white">
        <div className="container mx-auto px-4 flex align-center flex-col">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Superior Science Academy
          </h1>
          <p className="text-lg mb-8">
            Unlock Your Potential, Shape Your Future
          </p>
          <Link to="/enroll">
            <button
              type="button"
              class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              <span className="mx-2">Enroll Now</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Enroll Now</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-left inline-block justify-center text-center mt-5 font-semibold md:text-2xl text-xl">
        <span className="">Our Professors &nbsp;&nbsp;</span>
        <span className="text-pink-500">
          <Typewriter
            options={{
              strings: [
                "Arbab Ali",
                "Abdul Sattar",
                "Asif Ali",
                "Abdul Gaffar",
                "Rehman rahu",
              ],
              autoStart: true,
              delay: 10,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </span>
      </div>
      {/* <div className="flex items-left inline-block ml-5 my-5 font-semibold text-xl text-red-600">
          <span>Login Before Enroll</span>
        </div> */}

      <div className="flex flex-wrap items-center justify-center text-center my-2">
        <div className="flex flex-col p-3 my-2">
          <div className="md:text-3xl text-xl font-medium my-2">
            Meet Our Esteemed Professors
          </div>
          <div className="text-sm mx-2 md:text-xl text-stone-500">
            Explore the wealth of knowledge and experience embodied by our
            distinguished professors.
          </div>
          <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Meet the guiding lights who are shaping the minds of tomorrow's
            leaders.
          </div>
          <div className="flex items-center justify-center text-center">
            <div className="flex flex-col p-2 m-2 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Professor 1 */}
                <div className="flex-col px-6 py-2">
                  <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                    <img src="/arbab.jpg" alt="Arbab Ali Dahri" className="" />
                  </div>

                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Arbab Ali Dahri
                  </div>
                  <div className=" italic text-gray-500">Mathematics</div>
                  {/* <div className="text-blue-900 relative">
                    <p className="text-left">{arbab.slice(0,8)}...</p>
                    <span className="text-blue absolute right-0 top-0"><Link to="/"> Read more </Link> </span>
                  </div> */}
                </div>
                {/* Professor 2 */}
                <div className="flex-col px-6 py-2 ">
                  <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                    <img
                      src="/sattar.jpg"
                      alt="Abdul Sattar Lund"
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Abdul Sattar Lund
                  </div>
                  <div className=" italic text-gray-500">Chemistry</div>
                </div>
                {/* Professor 3 */}
                <div className="flex-col px-6 py-2 ">
                  <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                    <img
                      src="/gaffar.jpg"
                      alt="Abdul Gaffar Gaincho"
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Abdul Gaffar Gaincho
                  </div>
                  <div className=" italic text-gray-500">English</div>
                </div>
                {/* Professor 4 */}
                <div className="flex-col px-6 py-2 ">
                  <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                    <img
                      src="/rehman.jpg"
                      alt="Abdul Rehman Rahu"
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Abdul Rehman Rahu
                  </div>
                  <div className=" italic text-gray-500">Biology</div>
                </div>
                {/* Professor 5 */}
                <div className="flex-col px-6 py-2 ">
                  <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                    <img src="/asif.jpg" alt="" className="" />
                  </div>

                  <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                    Rana Asif Ali
                  </div>
                  <div className=" italic text-gray-500">Physics</div>
                </div>
                {/* Professor 6 */}
                {/* <div className="flex-col px-6 py-2 ">
            <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="https://source.unsplash.com/300x300/?woman"
                alt=""
                className=""
              />
            </div>

            <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
              Wednesday Addams
            </div>
            <div className=" italic text-gray-500">Financer</div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Professors;
