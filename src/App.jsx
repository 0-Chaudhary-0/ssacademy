import "./App.css";
import Navbar from "./components/Navbar";
import Professors from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Enroll from "./components/Enroll";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Professors />
      </>
    ),
  },
  {
    path: "/enroll",
    element: (
      <>
        <Navbar />
        <Enroll />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About/>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
