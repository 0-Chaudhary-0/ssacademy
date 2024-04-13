import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginTrue } from "../redux/slice";
import { useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const signup = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('token')

  useEffect(() => {
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

  let handleSubmit = async (event) => {
    event.preventDefault();
    setProgress(30);
    const response = await fetch("https://server-murex-seven.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const content = await response.json();
    console.log(content);
    if (content.success) {
      localStorage.setItem("token", content.token);
      setProgress(100);
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
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="">
                <input
                  type="email"
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
                  minLength="6"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
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
