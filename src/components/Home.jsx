import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import LoadingBar from "react-top-loading-bar";

const Professors = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(30)
    setProgress(100)
  }, [])
  
  return (
    <>
    <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Superior Science Academy

          </h1>
          <p className="text-lg mb-8">
            Unlock Your Potential, Shape Your Future
          </p>
          <a
            href="enroll"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full uppercase"
          >
            Apply Now
          </a>
        </div>
      </div>
      <div className="flex items-left inline-block justify-center text-center mt-5 font-semibold md:text-2xl text-xl">
        <span className="">Our Professors &nbsp;&nbsp;</span>
        <span className="text-pink-500 w-40">
          <Typewriter
            options={{
              strings: [
                "Arbab Ali",
                "Abdul Sattar",
                "Asif Ali",
                "Abdul Gaffar",
              ],
              autoStart: true,
              delay: 40,
              loop: true,
              deleteSpeed: 40,
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

          <div className="md:grid md:grid-cols-1 my-5 gap-4">
            <div className="flex items-center justify-center md:flex-row flex-col">
            <a href="https://web.facebook.com/profile.php?id=100009145166559" target="_blank">
              <div className="flex-col md:px-6 px-2 py-2 max-w-7xl">
                <div className="md:h-40 h-40 w-40 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="../public/arbab.jpg"
                    alt="Arbab Ali"
                    className=""
                  />
                </div>
                
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Arbab Ali
                </div>
                <div className=" italic text-gray-500">Mathematics</div>
              </div>
              </a>
              <div className="flex-col px-2 py-2 ">
                <a href="https://web.facebook.com/profile.php?id=100080305915732" target="_blank">
                <div className="md:h-40 h-40 w-40 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="../public/sattar.jpg"
                    alt="Abdul Sattar"
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Abdul Sattar
                </div>
                <div className=" italic text-gray-500">Chemistry</div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:flex-row flex-col">
              <a href="https://web.facebook.com/profile.php?id=100009464254001" target="_blank">
            <div className="flex-col px-2 py-2">
                <div className="md:h-40 h-40 w-40 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="../public/gaffar.jpg"
                    alt="Abdul Gaffar"
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Abdul Gaffar
                </div>
                <div className="italic text-gray-500">English</div>
              </div>
              </a>
              <div className="flex-col px-2 py-2 ">
                <a href="https://web.facebook.com/profile.php?id=100005292630317" target="_blank">
                <div className="md:h-40 h-40 w-40 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://tse4.explicit.bing.net/th?id=OIP.xo-BCC1ZKFpLL65D93eHcgHaGe&pid=Api&P=0&h=220"
                    alt="Asif Ali"
                    className=""
                  />
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Asif Ali
                </div>
                <div className=" italic text-gray-500">Physics</div>
                </a>
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
