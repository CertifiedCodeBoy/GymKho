import {
    ArrowRight,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const LandingFooter = () => {
  return (
    <footer
      className="
      container
      mx-auto
      flex
      flex-col
      "
    >
      <div
        className="
                flex
                flex-col
                gap-4
                "
      >
        <hr className="border-b-1 border-gray-500" />
        {/* First row */}
        <div
          className="
            flex
            justify-start
            items-center
            mt-4
            px-4
          "
        >
          <div className="bg-purple-600 rounded-2xl w-10 h-10 mr-4"></div>
          <h1 className="text-base md:text-[20px] font-medium text-white">
            GymKho
          </h1>
        </div>
        {/* Second row */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-auto px-4 lg:w-[951px] mx-auto mt-12">
          <div>
            <h1
              className="
                    text-[20px]
                    font-semibold
                    text-white
                    mb-4
                    text-center
                    sm:text-left
                    "
            >
              Know More
            </h1>
            <p
              className="
                        text-white
                        text-[16px]
                        font-light
                        w-auto
                        "
            >
              Effortlessly receive personalized meal plans tailored to your
              fitness goals.
            </p>
          </div>
          <div>
            <h1
              className="
                    text-[20px]
                    font-semibold
                    text-white
                    mb-4
                    text-center
                    sm:text-left
                    "
            >
              About Us
            </h1>
            <p
              className="
                        text-white
                        text-[16px]
                        font-light
                        "
            >
              Effortlessly receive personalized meal plans tailored to your
              fitness goals.
            </p>
          </div>
          <div>
            <h1
              className="
                    text-[20px]
                    font-semibold
                    text-white
                    mb-4
                    text-center
                    sm:text-left
                    "
            >
              Subscribe
            </h1>
            <p
              className="
                        text-white
                        text-[16px]
                        font-light
                        "
            >
              Subscribe with your email to receive newsletter and stay updated
              to our website
            </p>
            <div
              className="
                            flex
                            items-center
                            justify-center
                            mt-4
                            relative
                            w-[250px]
                            sm:w-[351px]
                            mx-auto
                            "
            >
              <input
                type="email"
                name="mail"
                placeholder="Enter your email"
                className="
                        sm:w-[351px]
                        h-[40px]
                        w-[250px]
                        bg-[#232531B2]
                        rounded-[11px]
                        pl-4
                        text-white
                        focus:outline-none  
              "
              />
              <button
                className="
                        h-[40px]
                        w-[50px]
                        sm:w-[151px]
                        px-4
                        rounded-[11px]
                        bg-[#D9D9D9C2]
                        text-black
                        focus:outline-none
                        absolute
                        sm:right-0
                        right-0
                        "
              >
                <span className="sm:hidden">
                  <ArrowRight size={20} weight="thin" />
                </span>
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-gray-500" />
        {/* Third row */}
        <div className="flex justify-between mb-4 px-4">
          <p
            className="
                    text-white
                    text-[16px]
                    "
          >
            2024 © All rights are preserved
          </p>
          <div
            className="
                    flex
                    flex-row-reverse
                    gap-2
                    "
          >
            <TwitterLogo size={28} weight="thin" color="white" />
            <FacebookLogo size={28} weight="thin" color="white" />
            <InstagramLogo size={28} weight="thin" color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
