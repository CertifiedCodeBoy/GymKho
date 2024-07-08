import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPageStyles.css";
import {
  CalendarCheck,
  DotsThree,
  House,
  List,
  User,
  X,
} from "@phosphor-icons/react";

const LandingNav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="container mx-auto p-4 md:p-8 flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex justify-between gap-2 items-center">
          <div
            className="flex items-center justify-center md:hidden cursor-pointer"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <List color="white" size={28} />
          </div>
          <div className="bg-purple-600 rounded-2xl w-10 h-10 hidden md:block"></div>
          <h1 className="text-base md:text-2xl font-semibold text-white">
            GymKho
          </h1>
        </div>
        {/* Mobile Navigation Links */}
        <div
          className={`${
            menu ? "block" : "hidden"
          } md:hidden absolute top-0 left-0 z-50 p-4
            w-[165px] h-[268px] rounded-br-[17px]
          `}
          style={{ backgroundColor: "rgba(14, 4, 25, 0.96)" }}
        >
          <div
            className="
            absolute top-0 right-0 cursor-pointer
            hover:bg-[#A022F5] hover:text-white
            rounded-bl-[17px] p-2
          "
            onClick={() => {
              setMenu(false);
            }}
          >
            <X color="white" size={20} />
          </div>
          <Link to="/" className="flex justify-start items-center gap-2 p-2">
            <div className="">
              <House color="white" size={16} />
            </div>
            <div className="text-white text-[12px]">Home</div>
          </Link>
          <hr className="border-1 border-gray-600" />
          <Link
            to={"/AboutUs"}
            className="flex justify-start items-center gap-2 p-2"
          >
            <div className="">
              <DotsThree color="white" size={16} />
            </div>
            <div className="text-white text-[12px]">About Us</div>
          </Link>
          <hr className="border-1 border-gray-600" />
          <Link
            to={"/OurPlans"}
            className="flex justify-start items-center gap-2 p-2"
          >
            <div className="">
              <CalendarCheck color="white" size={16} />
            </div>
            <div className="text-white text-[12px]">Our Plans</div>
          </Link>
          <hr className="border-1 border-gray-600" />
          <Link
            to={"/Contact"}
            className="flex justify-start items-center gap-2 p-2"
          >
            <div className="">
              <User color="white" size={16} />
            </div>
            <div className="text-white text-[12px]">Contact</div>
          </Link>
          <hr className="border-1 border-gray-600" />
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
