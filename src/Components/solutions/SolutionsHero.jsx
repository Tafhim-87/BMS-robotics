import React from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/hero.png";
import Bg from "@/assets/imgs/hero/gridBg.jpeg";

const SolutionsHero = () => {
  return (
    <section className="w-full flex justify-center items-center relative">
      <Image
        src={Bg}
        alt=""
        width={1440}
        height={800}
        className="absolute inset-0 top-0 left-0 w-full h-full"
      />
      <div className="container max-w-[1440px] flex flex-col z-10">
        <div className="flex flex-col gap-5 px-4 sm:px-8 md:px-16 text-center md:text-start">
          <div className="flex flex-col gap-5 sm:gap-[27px] max-w-full md:max-w-[753px]">
            <h1 className="text-[#1D242D] text-2xl sm:text-4xl md:text-[52px] leading-tight sm:leading-[45px] md:leading-[57px] font-bold">
              Tailored Robotics{" "}
              <span className="text-[#0B61EA]">Solutions</span> for{" "}
              <br className="hidden md:block" />
              Every Industry Need
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] leading-[26px] sm:leading-[30px] max-w-full md:max-w-[677px]">
              Empowering the Next Generation of Smart Businesses with Advanced
              Robotics and AI Technologies to Optimize Production, Increase
              Flexibility, and Achieve Operational Excellence in a Rapidly
              Changing Global Landscape.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-[35px]">
            <button className="bg-[#0B61EA] text-white px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base">
              Get Your Consultation
            </button>
            <button className="text-[#0B61EA] border border-solid border-[#0B61EA] px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* <div>
          <Image src={img1} width={830} height={712} alt="" />
        </div> */}
        <div className="bg-[#0B61EA] lg:flex hidden justify-center items-center gap-7 shadow-xl shadow-[#0B61EA4D] rounded-lg p-10 mt-28">
          <div className="flex  flex-col gap-[5px] text-[#FFFFFF] max-w-[256px] text-center">
            <h4 className="text-[20px] font-bold">Industrial Automation</h4>
            <p>
              Focuses on automating manual processes in industries, showcasing
              robotics, packaging, etc.
            </p>
          </div>
          <div className="w-[1px] h-[116px] rounded-lg bg-white"></div>
          <div className="flex flex-col gap-[5px] text-[#FFFFFF] max-w-[256px] text-center">
            <h4 className="text-[20px] font-bold">AI-powered Robotics</h4>
            <p>
              Solutions leveraging AI for smarter decision-making, precision,
              and adaptability in various environments.
            </p>
          </div>
          <div className="w-[1px] h-[116px] rounded-lg bg-white"></div>
          <div className="flex flex-col gap-[5px] text-[#FFFFFF] max-w-[256px] text-center">
            <h4 className="text-[20px] font-bold">Iot (Internet Of Things)</h4>
            <p>
              integrate robotics with IoT devices for real-time monitoring, data
              analytics, and remote control.
            </p>
          </div>
          <div className="w-[1px] h-[116px] rounded-lg bg-white"></div>
          <div className="flex flex-col gap-[5px] text-[#FFFFFF] max-w-[256px] text-center">
            <h4 className="text-[20px] font-bold">Software Development</h4>
            <p>
              Develop custom software and intuitive user interfaces that power
              your robotics systems
            </p>
          </div>
        </div>
        {/* for mobile */}

        <div className="bg-[#0B61EA] lg:hidden shadow-xl shadow-[#0B61EA4D] rounded-xl p-10 mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center gap-2 max-w-[256px] mx-auto">
              <h4 className="text-[20px] font-bold">Industrial Automation</h4>
              <p>
                Focuses on automating manual processes in industries, showcasing
                robotics, packaging, etc.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[256px] mx-auto">
              <h4 className="text-[20px] font-bold">AI-powered Robotics</h4>
              <p>
                Solutions leveraging AI for smarter decision-making, precision,
                and adaptability in various environments.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[256px] mx-auto">
              <h4 className="text-[20px] font-bold">
                IoT (Internet Of Things)
              </h4>
              <p>
                Integrate robotics with IoT devices for real-time monitoring,
                data analytics, and remote control.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[256px] mx-auto">
              <h4 className="text-[20px] font-bold">Software Development</h4>
              <p>
                Develop custom software and intuitive user interfaces that power
                your robotics systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
