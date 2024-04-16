import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginTrue } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const isLogin = localStorage.getItem("token");
  const [password, setPassword] = useState("password");

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

  const togglePasswordVisibility = () => {
    if (password == "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  let handleTopBar = ()=>{
    setShowMessage(false)
  }

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
    const response = await fetch(
      "https://tinyserver-dun.vercel.app/api/user/isUser",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          mode: "no-cors",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    console.log(response);

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
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setShowMessage(true);
      setMessageText(content.message);
      setTimeout(() => {
        setShowMessage(false);
        setMessageText("");
      }, 1500);
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
      />
      {/* Same as */}
      <ToastContainer />
      {showMessage &&
        <div>
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {/* <strong class="font-bold">Holy smokes!</strong> */}
            <span class="block sm:inline">
              {messageText}
            </span>
            <span  onClick={handleTopBar} class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 m-2">
                LogIn
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  minLength="6"
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="relative">
                <input
                  type={password}
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={formData.password}
                  onChange={handleChange}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
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
