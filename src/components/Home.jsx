import React from "react";
import Typewriter from "typewriter-effect";

const Professors = () => {
  return (
    <>
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
                    src="https://scontent.fskz2-1.fna.fbcdn.net/v/t39.30808-6/410238455_3499628670351937_4216429116524837073_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0Dbh2KPsFYPVyyX24jfeFY2x5AJrXd-VjbHkAmtd35fMR1ck74ltGqacJihSopA-AaHeggxDJBQm9yAUOdtz9&_nc_ohc=FlNEgV3u0PAAb5hzHfX&_nc_zt=23&_nc_ht=scontent.fskz2-1.fna&oh=00_AfDBgH1ohocxIyq4-0imx9iouJQIam2HAT1uKVw3-ywX6w&oe=661FEFD0"
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
                    src="https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/434354842_482792667740926_380438456912630462_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqyzKVuufct_OLtFoFVdPh5kCQcB3L3LXmQJBwHcvctWFBC9VrfFPHuQBac6esqHOCPKnkVH1Vy05qSPHJxP50&_nc_ohc=F1DCYC76DC4Ab71Zk9V&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AfBRb_M94Di99_N_4XAgE8lzJzEWBYmS-GW6TD97KuoGUA&oe=66201078"
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
                    src="https://scontent.fhdd3-1.fna.fbcdn.net/v/t39.30808-6/396535544_3655197614805678_2472260339066709772_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGljscOu_FqBFnbpJcG6wLU4DagnfqdvengNqCd-p296VCaY1QvMPE_XDnIeoI58h3H1MnXWoZt8qKUymdp-6BJ&_nc_ohc=EJ9s2Rrh8REAb6Dgm3H&_nc_zt=23&_nc_ht=scontent.fhdd3-1.fna&oh=00_AfCJcd0M27YzlRWWIqY4Ee2SyUu5OkbecAHOz4Hzzdn8qg&oe=661FEFE5"
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
