import {
  ArrowLeft,
  EnvelopeSimple,
  Eye,
  EyeSlash,
  User,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mx-auto p-4 overflow-hidden flex flex-col lg:flex-row justify-center items-center h-screen">
      {/* back button */}
      <div
        className="
        absolute
          top-10
          lg:top-8
          left-4
          lg:left-16
          cursor-pointer
      "
      >
        <button
          onClick={() => window.history.back()}
          className="focus:outline-none"
        >
          <ArrowLeft color="white" size={38} />
        </button>
      </div>
      {/* GymKho h1 for mobile */}
      <div
        className="
        m-5
        lg:hidden
        block
      "
      >
        <h1
          className="
          text-xl
          sm:text-2xl
                font-semibold
                text-white
                text-center
                mt-4
            "
        >
          GymKho
        </h1>
      </div>
      {/* image */}
      <div
        className="
            hidden
            lg:flex 
            flex-col
            items-start
            justify-between
            gap-8
            py-12
            pr-0
        "
      >
        <div className="flex justify-between gap-2 items-center">
          <div className="bg-purple-600 rounded-xl w-8 h-8 hidden md:block"></div>
          <h1 className="text-xl font-semibold text-white">GymKho</h1>
        </div>
        <h1
          className="
                text-3xl
                w-[550px]
                font-semibold
                text-white
                mb-5
                text-start
            "
        >
          Best way to improve your health and workout progress.
        </h1>
        <div
          className="
                w-[350px]
                aspect-square
                mx-auto
        "
        >
          <img src="/src/assets/signUp/Sign up-amico 1.svg" alt="" />
        </div>
      </div>
      {/* border */}
      <div className="hidden lg:block border-r border-gray-400 h-[550px] ml-8 mr-16"></div>
      {/* form */}
      <div
        className="
        p-4
        w-96
        flex flex-col
        items-center
        lg:items-start
        justify-center
      "
      >
        <h1
          className="
          text-xl
          sm:text-2xl
            font-semibold
            text-center
            mb-5
            text-white
            "
        >
          Create your account
        </h1>
        <form
          onSubmit={(e) => handleSignUp(e)}
          className="
                flex flex-col
                items-start
                justify-center
                gap-4
                sm:w-full
                  w-auto
            "
        >
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="text-white w-full h-[58px] p-2 pl-8 rounded-2xl focus:outline-none"
              style={{
                backgroundColor: "rgba(35, 37, 49, 0.3)",
                border: "1px solid rgba(241, 241, 243, 0.5)",
              }}
              onChange={(e) => handleChange(e)}
              value={formData.name}
            />
            <div
              className="
                absolute
                top-1/4
                right-3
                text-white
                flex
                items-center
              "
            >
              <User color="gray" size={24} />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="text-white w-full h-[58px] p-2 pl-8 rounded-2xl focus:outline-none"
              style={{
                backgroundColor: "rgba(35, 37, 49, 0.3)",
                border: "1px solid rgba(241, 241, 243, 0.5)",
              }}
              onChange={(e) => handleChange(e)}
              value={formData.email}
            />
            <div
              className="
      absolute
      top-1/4
      right-3
      text-white
      flex
      items-center
    "
            >
              <EnvelopeSimple color="gray" size={24} />
            </div>
          </div>

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="text-white w-full h-[58px] p-2 pl-8 rounded-2xl focus:outline-none"
              style={{
                backgroundColor: "rgba(35, 37, 49, 0.3)",
                border: "1px solid rgba(241, 241, 243, 0.5)",
              }}
              onChange={(e) => handleChange(e)}
              value={formData.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center justify-center"
            >
              {showPassword ? (
                <EyeSlash color="gray" size={24} />
              ) : (
                <Eye color="gray" size={24} />
              )}
            </button>
          </div>

          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="text-white w-full h-[58px] p-2 pl-8 rounded-2xl focus:outline-none"
              style={{
                backgroundColor: "rgba(35, 37, 49, 0.3)",
                border: "1px solid rgba(241, 241, 243, 0.5)",
              }}
              onChange={(e) => handleChange(e)}
              value={formData.confirmPassword}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center justify-center"
            >
              {showConfirmPassword ? (
                <EyeSlash color="gray" size={24} />
              ) : (
                <Eye color="gray" size={24} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="
                w-full
                h-12
                rounded-2xl
                text-white
                font-semibold
                focus:outline-none
                "
            style={{
              background:
                "linear-gradient(-90deg, rgba(160, 34, 245, 1), rgba(61, 22, 87, 1))",
            }}
          >
            Sign Up
          </button>
        </form>
        <div className="relative my-5 flex items-center justify-center w-full">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="text-white px-2 text-center font-light">
            Or continue with
          </div>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <div
          className="
                flex
                items-center
                justify-center
                gap-4
                w-full
            "
        >
          <Link
            to="/login"
            className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        w-1/2
                        h-12
                        rounded-2xl
                        text-white
                        font-thin
                        text-sm
                        cursor-pointer
            "
          >
            <img
              src="/src/assets/signUp/devicon_google.svg"
              alt="Google"
              className="
                w-10
            "
            />
            <p
              className="
                        text-white
                        font-light
                        text-sm
                        text-center
                        cursor-pointer
                    "
            >
              Google
            </p>
          </Link>
          <Link
            to="/login"
            className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        w-1/2
                        h-12
                        rounded-2xl
                        text-white
                        font-thin
                        text-sm
                        cursor-pointer"
          >
            <img
              src="/src/assets/signUp/logos_facebook.svg"
              alt="Facebook"
              className="
                w-10
            "
            />
            <p
              className="
                        text-white
                        font-light
                        text-sm
                        text-center
                        cursor-pointer
                    "
            >
              Facebook
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
