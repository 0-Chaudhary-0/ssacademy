import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";

function Enroll() {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate("/login");
  //   }
  // }, []);

  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    gender: "",
    surname: "",
    studentWhatsapp: "",
    parentWhatsapp: "",
    email: "",
    address: "",
    alreadyStudying: "",
    admissionClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(30);
    const response = await fetch(
      "https://server-murex-seven.vercel.app/api/student/enroll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const content = await response.json();
    setProgress(100);
    if (content.success) {
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
      toast.error(content.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
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
      />
      {/* Same as */}
      <ToastContainer />
      {isLogin ? (
        <div className="container mx-auto my-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Enroll Now</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-1 p-8 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Name of Student <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fathersName" className="block mb-1">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fathersName"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="surname" className="block mb-1">
                  Surname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="studentWhatsapp" className="block mb-1">
                  Student's Whatsapp Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="studentWhatsapp"
                  name="studentWhatsapp"
                  minLength="11"
                  maxLength="11"
                  value={formData.studentWhatsapp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="parentWhatsapp" className="block mb-1">
                  Parent/Guardian's Whatsapp Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="parentWhatsapp"
                  name="parentWhatsapp"
                  minLength="11"
                  maxLength="11"
                  value={formData.parentWhatsapp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-1">
                  Home Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">
                  Are you already studying in superior science academy?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="alreadyStudying"
                      value="Yes"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="alreadyStudying"
                      value="No"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">
                  In which class do you want to get admission?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="Basic 9th"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Basic 9th</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="10th"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">10th</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="11th"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">11th</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="12th"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">12th</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="ECAT"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">ECAT</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="admissionClass"
                      value="MDCAT"
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">MDCAT</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 ml-6 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="text-center mt-5 text-red-500">
          <h1 className="text-2xl font-bold mb-1">Please Log In</h1>
          <p className="mb-4">You need to log in before enrolling.</p>
          </div>
          <Login />
        </div>
      )}
    </>
  );
}

export default Enroll;
