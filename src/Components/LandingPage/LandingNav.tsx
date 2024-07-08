import { Link } from "react-router-dom";
import "./LandingPageStyles.css";
import { List } from "@phosphor-icons/react";

const LandingNav = () => {
  return (
    <nav>
      <div className="container mx-auto p-4 md:p-8 flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex justify-between gap-4 items-center">
          <div className="flex items-center justify-center md:hidden cursor-pointer">
            <List color="white" size={28} />
          </div>
          <div className="bg-purple-600 rounded-2xl w-10 h-10 hidden md:block"></div>
          <h1 className="text-base md:text-2xl font-semibold text-white">
            GymKho
          </h1>
        </div>
        {/* Navigation Links */}
        <div className=" justify-between gap-4 items-center hidden md:flex">
          <div className="parent-custom">
            <Link
              to="/"
              className={`text-white font-semibold custom-class ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </div>
          <div className="parent-custom">
            <Link
              to="/about"
              className={`text-white font-semibold custom-class ${
                window.location.pathname === "/about" ? "active" : ""
              }`}
            >
              About Us
            </Link>
          </div>
          <div className="parent-custom">
            <Link
              to="/plans"
              className={`text-white font-semibold custom-class ${
                window.location.pathname === "/plans" ? "active" : ""
              }`}
            >
              Our Plans
            </Link>
          </div>
          <div className="parent-custom">
            <Link
              to="/contact"
              className={`text-white font-semibold custom-class ${
                window.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Login signup buttons */}
        <div className="flex justify-between gap-1 md:gap-4 items-center relative w-max">
          <Link
            to={"/Login"}
            className="text-sm text-nowrap md:text-base text-[#A022F5] px-4 py-2 rounded-lg customLogin"
          >
            Log in
          </Link>
          <Link
            to={"SignUp"}
            className="text-nowrap sm:text-base bg-[#B859F7] text-white font-semibold text-sm px-4 py-2 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
