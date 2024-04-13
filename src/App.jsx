import "./App.css";
import Navbar from "./components/Navbar";
import Professors from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Enroll from "./components/Enroll";
import Footer from "./components/Footer";
import TermsAndPolicy from "./components/Terms&Policy";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Professors />
        <Footer/>
      </>
    ),
  },
  {
    path: "/enroll",
    element: (
      <>
        <Navbar />
        <Enroll />
        <Footer/>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer/>
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
        <Footer/>
      </>
    ),
  },
  {
    path: "/terms&policy",
    element: (
      <>
        <Navbar />
        <TermsAndPolicy/>
        <Footer/>
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
