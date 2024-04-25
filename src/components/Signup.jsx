import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginTrue } from "../redux/slice";
import { useDispatch } from "react-redux";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signup = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const [password, setPassword] = useState("password");

  useEffect(() => {
    setProgress(30);
    setProgress(100);
    if (isLogin) {
      navigate("/");
    }
  }, []);

  let [formData, setFormData] = useState({
    name: "",
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

  const togglePasswordVisibility = () => {
    if (password == "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setProgress(30);
    const response = await fetch(
      "https://server-murex-seven.vercel.app/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const content = await response.json();
    console.log(content);
    if (content.success) {
      localStorage.setItem("token", content.token);
      setProgress(100);
      toast.success(content.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        dispatch(loginTrue());
        navigate("/");
      }, 2000);
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
        autoClose={1000}
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
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 m-2">
                SignUp
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  minLength="4"
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  required
                />
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Email"
                  minLength="6"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  value={formData.email}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type={password}
                  minLength="6"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  required
                />
                {password == "password" ? (
                  <RiEyeFill
                    className="absolute inset-y-2.5 right-3 cursor-pointer text-xl"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <RiEyeOffFill
                    className="absolute inset-y-2.5 right-3 cursor-pointer text-xl"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <div className="text-center mt-7">
              <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600 font-medium ">
                Sign up
              </button>
            </div>
            <div className="text-center my-6 flex flex-col">
              <Link
                to="/login"
                className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
              >
                Already Have A User? Login Now
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

export default signup;
