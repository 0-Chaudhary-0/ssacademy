import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";
import { loginFalse, loginTrue } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";
import { TiUserAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

const Navbar = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(0)
  const [miniBar, setMiniBar] = useState(false);

  let handleLogout = ()=>{
    localStorage.removeItem("token")
    setKey(Math.random())
    setMiniBar(!miniBar);
  }

  useEffect(() => {
    let checkLogin = localStorage.getItem("token");
    if (checkLogin) {
      dispatch(loginTrue());
    } else {
      dispatch(loginFalse());
    }
  }, [key]);

  let handleMiniBar = () => {
    setMiniBar(!miniBar);
  };

  const isLogin = useSelector((state) => state.isLogin.value);

  return (
    <>
      <header className="text-gray-600 bg-gray-100 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <img src="https://scontent.fskz2-1.fna.fbcdn.net/v/t39.30808-6/395431154_187452687741817_4689098674194842649_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHMQxTzLHWu5m84pAC_29p8wRGCbdjuY_PBEYJt2O5j8-PgxNGQwQkvj097galf_uGDWyjGopXdbojT_D9uSZev&_nc_ohc=-dIJMY2PrKgAb7eX7YN&_nc_zt=23&_nc_ht=scontent.fskz2-1.fna&oh=00_AfDb9VtWDI-0B_5eHZho4DlHjedOfsGw_wqxZIiy7S6FvQ&oe=661F47CB" alt="Superior Science Academy" className="h-8 w-8 image" />
            <span className="ml-3 text-xl">Superior Science Academy</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">
              Home
            </Link>
            <Link className="mr-5 hover:text-gray-900" to="/enroll">
              Enorll
            </Link>
            <Link className="mr-5 hover:text-gray-900" to="/about">
              About
            </Link>
          </nav>
          {isLogin ? (
            <div className="cursor-pointer relative">
              <TiUser
                className="text-2xl mt-2 md:mt-0"
                onClick={handleMiniBar}
              />
              {miniBar && 
              <div className="absolute right-4 top-8 text-white flex flex-col font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                {/* <span className="cursor-pointer" key={key} onClick={handleLogout}>Enroll Now</span> */}
                <span className="cursor-pointer" key={key} onClick={handleLogout}>Logout</span>
              </div>
              }
            </div>
          ) : (
            <div className="cursor-pointer relative">
            <Link to="/login">
            <span className="text-pink-500 mt-2 md:mt-0 font-semibold">Login</span>
              {/* <TiUserAdd className="text-2xl text-pink-500 mt-2 md:mt-0" /> */}
            </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
