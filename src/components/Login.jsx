import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginTrue } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const [progress, setProgress] = useState(0);
  const isLogin = localStorage.getItem('token')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setProgress(30);
    const response = await fetch("https://server-murex-seven.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const content = await response.json();
    console.log(content);
    setProgress(100);
    if (content.success) {
      localStorage.setItem("token", content.token);
      dispatch(loginTrue());
      toast.success(content.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error(content.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });
    }
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 m-2">
                Log In
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">
                login
              </button>
            </div>
            <div className="text-center my-6 flex flex-col">
              {/* <Link href="/forget" className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                            Password ?</Link> */}
              <Link
                to="/signup"
                className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
              >
                Not a User? Create New Account
              </Link>
            </div>
          </div>
        </div>
      </form>

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

export default login;
