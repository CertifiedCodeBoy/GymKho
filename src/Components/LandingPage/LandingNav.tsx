import { Link } from "react-router-dom";
import "./LandingPageStyles.css";

const LandingNav = () => {
  return (
    <nav>
      <div className="container mx-auto p-8 flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex justify-between gap-4 items-center">
          <div className="bg-purple-600 rounded-2xl w-10 h-10"></div>
          <h1 className="text-2xl font-semibold text-white">GymKho</h1>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-between gap-4 items-center">
          <div className="parent-custom">
            <Link to="/" className="text-white font-semibold custom-class">
              Home
            </Link>
          </div>
          <div className="parent-custom">
            <Link to="/" className="text-white font-semibold custom-class">
              Home
            </Link>
          </div>
          <div className="parent-custom">
            <Link to="/" className="text-white font-semibold custom-class">
              Home
            </Link>
          </div>
          <div className="parent-custom">
            <Link to="/" className="text-white font-semibold custom-class">
              Home
            </Link>
          </div>
        </div>
        {/* Login signup buttons */}
        <div className="flex justify-between gap-4 items-center">
          <Link to={"/Login"} className="text-[#A022F5] px-4 py-2 rounded-lg">
            Login
          </Link>
          <Link
            to={"SignUp"}
            className="bg-white text-[#A022F5] px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
