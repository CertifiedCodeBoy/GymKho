import LandingFooter from "./LandingFooter";
import LandingNav from "./LandingNav";
import "./LandingPageStyles.css";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <LandingNav />
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 container mx-auto md:items-center">
        <h1
          className="
      mt-10
      md:mt-0
      md:mb-36
      text-[32px] 
      font-bold 
      text-[#F1F1F3]
      md:col-start-1
      md:col-end-1
      md:row-start-1
      md:row-end-1
      md:w-[535px]
      w-auto
      p-4
    "
        >
          Achieve Your Fitness Goals with Our Expert Guidance
        </h1>
        <img
          src="src/assets/Svg/Gym-amico 1.svg"
          alt="illustration"
          className="
            md:col-start-2
            md:col-end-2
            md:row-start-1
            md:row-end-1 md:order-2 order-1
            w-auto
            p-4
            md:w-[636px]
          "
        />
        <p
          className="text-[#F1F1F3] text-[18px] mt-10 md:mt-16 md:col-start-1
      md:col-end-1
      md:row-start-1
      md:row-end-1
      w-auto
      p-4
      md:w-[410px]
      lg:w-[535px]
    "
        >
          Join our community and transform your fitness journey with
          personalized training programs and state-of-the-art facilities. Get
          started today!
        </p>
        <button
          className="text-[#F1F1F3] rounded-full font-bold mt-10 md:mt-64 ml-[25%] md:col-start-1
      md:col-end-1
      md:row-start-1
      md:row-end-1"
          style={{
            width: "214px",
            height: "58px",
            backgroundColor: "rgba(160, 34, 245, 0.75)",
            padding: "10px 20px 10px 20px",
          }}
        >
          Get Started
        </button>
      </div>
      <div className="container mx-auto">
        <h1 className="text-[32px] font-bold text-[#F1F1F3] text-center p-8">
          Discover Our Programs
        </h1>
        <p className="text-[#F1F1F3] text-[18px] text-center p-4 w-auto md:w-[535px] mx-auto">
          Explore our tailored fitness programs and take the first step towards
          a healthier you.
        </p>
        <div className="grid justify-items-stretch md:flex md:flex-row flex-col items-center gap-16 md:gap-8 lg:gap-16 mt-16 px-4">
          <div
            className="
            w-auto 
            max-w-[355px] 
            md:w-[355px] 
            h-[455px] 
            rounded-[22px] 
            flex 
            flex-col 
            justify-center 
            gap-[14px] 
            py-[30px] 
            px-4 
            md:px-[36px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(149, 55, 213, 0.95), rgba(39, 0, 67, 0.95))",
            }}
          >
            <h1 className="font-semibold text-[#F1F1F3] text-[20px] text-center">
              Stay Fit
            </h1>
            <img src="src/assets/Svg/Fitness tracker-amico 1.svg" alt="svg" />
            <p className="text-[#F1F1F3] text-center">
              Join our Stay Fit Program for balanced workouts, healthy eating
              tips, and ongoing support to maintain your fitness level.
            </p>
          </div>
          <div
            className="w-auto max-w-[355px] md:w-[355px] h-[455px] rounded-[22px] flex flex-col justify-center gap-[14px] py-[30px] px-[36px]  justify-self-end md:justify-self-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(149, 55, 213, 0.95), rgba(39, 0, 67, 0.95))",
            }}
          >
            <h1 className="font-semibold text-[#F1F1F3] text-[20px] text-center">
              Lose Weight
            </h1>
            <img
              src="src/assets/Svg/Pilates-amico 1.svg"
              alt="svg"
              className="h-[240px]"
            />
            <p className="text-[#F1F1F3] text-center">
              Join our Lose Weight Program for personalized training, expert
              nutrition advice, and dedicated support to help you shed pounds
              effectively.
            </p>
          </div>
          <div
            className="w-auto max-w-[355px] md:w-[355px] h-[455px] rounded-[22px] flex flex-col justify-center gap-[14px] py-[30px] px-[36px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(149, 55, 213, 0.95), rgba(39, 0, 67, 0.95))",
            }}
          >
            <h1 className="font-semibold text-[#F1F1F3] text-[20px] text-center">
              Gain Weight
            </h1>
            <img
              src="src/assets/Svg/Workout-amico 1.svg"
              alt="svg"
              className="h-[240px]"
            />
            <p className="text-[#F1F1F3] text-center">
              Join our Gain Weight Program for personalized workouts, expert
              nutrition tips, and dedicated support to help you gain muscle and
              weight.
            </p>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 container mx-auto md:items-center">
        <h1
          className="
          my-10
          text-end
          md:text-center
      md:mt-10
      md:mb-64
      lg:mt-0
      lg:mb-36
      text-[32px] 
      font-bold 
      text-[#F1F1F3]
      md:col-start-2
      md:col-end-2
      md:row-start-1
      md:row-end-1
      lg:w-[535px]
      w-auto
      p-4
    "
        >
          Automated Meals Planning !
        </h1>
        <img
          src="src/assets/Svg/Order food-amico 1.svg"
          alt="illustration"
          className="
      md:col-start-1
      md:col-end-1
      md:row-start-1
      md:row-end-1 md:order-1 order-2
      w-auto
      p-4
      md:w-[636px]
    "
        />
        <p
          className="text-[#F1F1F3] text-[18px] mt-10 md:mt-16 md:col-start-2
      md:col-end-2
      md:row-start-1
      md:row-end-1
      w-auto
      p-4
      md:w-[410px]
      lg:w-[535px]
    "
        >
          Effortlessly receive personalized meal plans tailored to your fitness
          goals. Our automated system ensures you get nutritious meals that
          support your workout regimen.
        </p>
        <button
          className="
          text-[#F1F1F3] rounded-[18px] font-bold mt-10 md:mt-72 md:col-start-2
      md:col-end-2
      md:row-start-1
      md:row-end-1
            flex
            items-center
            justify-center
            gap-4
            mx-auto
      "
          style={{
            width: "288px",
            height: "58px",
            backgroundColor: "rgba(54, 57, 73, 0.84)",
            padding: "10px 20px 10px 20px",
          }}
        >
          <img src="src/assets/Svg/bi_google-play.svg" alt="" />
          Get app on play store !
        </button>
      </div>
      <div className="container mx-auto mb-32">
        <h1 className="text-[32px] font-bold text-[#F1F1F3] text-center p-8">
          Why Choose Us?
        </h1>
        <div className="flex flex-col items-center md:flex-row p-8 justify-center gap-20 md:gap-8 lg:gap-20">
          <div
            className="
          relative h-[455px] flex flex-col py-[40px] 
            w-auto 
            max-w-[350px] 
            md:w-[355px]
            px-4 "
          >
            <div
              className="
              w-[102px] 
              aspect-square 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-[#F1F1F3] 
              font-bold 
              text-[32px] 
              mb-12
              absolute
              top-4
              left-0
              lg:relative
              "
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(88, 48, 180, 1), rgba(39, 23, 77, 1))",
              }}
            >
              01
            </div>
            <h1
              className="text-[24px] font-semibold text-[#F1F1F3] mb-4 mt-24 lg:mt-0"
              style={{ width: "171px" }}
            >
              7na chwaker !
            </h1>
            <p
              className="text-[#F1F1F3] text-[16px]
              w-auto
              pb-4
              md:w-[200px]
              lg:w-[256px]
            "
            >
              Effortlessly receive personalized meal plans tailored to your
              fitness goals. Our automated system ensures you get nutritious
              meals that support your workout regimen.
            </p>
            <img
              src="/src/assets/borders.png"
              className="w-[173px] aspect-square bg-none absolute right-0 bottom-4 lg:bottom-8 xl:right-8 lg:right-0 md:bottom-8"
            />
          </div>
          <div
            className="
          relative h-[455px] flex flex-col py-[40px] 
            w-auto 
            max-w-[350px] 
            md:w-[355px]
            px-4 "
          >
            <div
              className="
              w-[102px] 
              aspect-square 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-[#F1F1F3] 
              font-bold 
              text-[32px] 
              mb-12
              absolute
              top-4
              left-0
              lg:relative
              "
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(88, 48, 180, 1), rgba(39, 23, 77, 1))",
              }}
            >
              02
            </div>
            <h1
              className="text-[24px] font-semibold text-[#F1F1F3] mb-4 mt-24 lg:mt-0"
              style={{ width: "171px" }}
            >
              7na chwaker !
            </h1>
            <p
              className="text-[#F1F1F3] text-[16px]
              w-auto
              pb-4
              md:w-[200px]
              lg:w-[256px]
            "
            >
              Effortlessly receive personalized meal plans tailored to your
              fitness goals. Our automated system ensures you get nutritious
              meals that support your workout regimen.
            </p>
            <img
              src="/src/assets/borders.png"
              className="w-[173px] aspect-square bg-none absolute right-0 bottom-4 lg:bottom-8 xl:right-8 lg:right-0 md:bottom-8"
            />
          </div>
          <div
            className="
          relative h-[455px] flex flex-col py-[40px] 
            w-auto 
            max-w-[350px] 
            md:w-[355px]
            px-4 "
          >
            <div
              className="
              w-[102px] 
              aspect-square 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-[#F1F1F3] 
              font-bold 
              text-[32px] 
              mb-12
              absolute
              top-4
              left-0
              lg:relative
              "
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(88, 48, 180, 1), rgba(39, 23, 77, 1))",
              }}
            >
              03
            </div>
            <h1
              className="text-[24px] font-semibold text-[#F1F1F3] mb-4 mt-24 lg:mt-0"
              style={{ width: "171px" }}
            >
              7na chwaker !
            </h1>
            <p
              className="text-[#F1F1F3] text-[16px]
              w-auto
              pb-4
              md:w-[200px]
              lg:w-[256px]
            "
            >
              Effortlessly receive personalized meal plans tailored to your
              fitness goals. Our automated system ensures you get nutritious
              meals that support your workout regimen.
            </p>
            <img
              src="/src/assets/borders.png"
              className="w-[173px] aspect-square bg-none absolute right-0 bottom-4 lg:bottom-8 xl:right-8 lg:right-0 md:bottom-8"
            />
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
