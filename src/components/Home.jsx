import React from "react";
import Typewriter from "typewriter-effect";

const Professors = () => {
  return (
    <>
    <div className="flex items-center inline-block justify-center text-center my-5 font-semibold text-2xl">
        <span className="mx-1">Our Professors &nbsp;&nbsp;¦</span>
        <span className="text-pink-500 w-40"><Typewriter
          options={{
            strings: ["Arbab Ali", "Abdul Sattar", "Rana Asif", "Abdul Gaffar"],
            autoStart: true,
            delay: 40,
            loop: true,
            deleteSpeed: 40,
          }}
        />
        </span>
        </div>
      <div className="flex items-center justify-center text-center my-5">
        <div className="flex flex-col p-2 m-2 ">
          {/* <div className="text-3xl font-medium">Meet Our Team</div> */}
          <div className="text-sm mx-2 md:text-xl text-stone-500">
            Meet the team member who have contributed their designs for this
            websites.
          </div>
          <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div>
          <div className="md:grid flex">
            <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
              <div className="flex-col px-6 py-2  max-w-7xl">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div className=" italic text-gray-500">CEO, Tailblocks</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div className=" italic text-gray-500">Executive Producer</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div className=" italic text-gray-500">HR</div>
              </div>
            </div>
            <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?kid"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div className=" italic text-gray-500">Manager</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div className=" italic text-gray-500">Marketing Producer</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
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
