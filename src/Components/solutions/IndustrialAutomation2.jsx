import React, { useRef, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";
import UpperSvg from "@/assets/svgs/solutionSvg/UpperSvg";
import Arrow from "@/assets/svgs/Arrow";
import "@/Components/home/style.css";
import OrrengeSett from "@/assets/svgs/solutionSvg/OrrengeSett";

const IndustrialAutomation2 = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
    }
  };
  const list = [
    {
      title: "AI Integration",
      description:
        "Embed advanced AI algorithms for intelligent decision-making and task optimization.",
    },
    {
      title: "Learning Capabilities",
      description:
        "Enable robots to learn from their surroundings and improve performance over time.",
    },
    {
      title: "Task Adaptation",
      description:
        "Automates repetitive tAllow robots to autonomously adapt to varying tasks and environments.asks to improve productivity and safety.",
    },
    {
      title: "Continuous Optimization",
      description:
        "Use AI to continuously optimize processes and improve operational efficiency.",
    },
  ];

  const product = [
    {
      img: img1,
      title: "AI Robotics Product Name",
      description:
        "Our advanced AI robotics solutions enhance productivity, reduce downtime, and improve precision. Customers are thrilled with the speed and accuracy our innovations bring to their manufacturing operations.",
    },
    {
      img: img1,
      title: "AI Robotics Product Name",
      description:
        "Our advanced AI robotics solutions enhance productivity, reduce downtime, and improve precision. Customers are thrilled with the speed and accuracy our innovations bring to their manufacturing operations.",
    },
    {
      img: img1,
      title: "AI Robotics Product Name",
      description:
        "Our advanced AI robotics solutions enhance productivity, reduce downtime, and improve precision. Customers are thrilled with the speed and accuracy our innovations bring to their manufacturing operations.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      <div className="container max-w-[1440px] flex flex-col gap-10">
        <h1 className="text-[22px] font-bold text-[#0B61EA] text-center flex flex-col justify-center items-center">
          <UpperSvg />
          AI-Powered Robotics
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-[40px] font-bold text-[#1D242D]">
            AI-powered Robotics for Smarter Automation
          </h1>
          <p className="text-[20px] font-medium text-[#1D242D] mt-4">
            Leverage artificial intelligence to create adaptive, intelligent
            robots that can learn from their environment, make decisions in
            real-time, and optimize tasks for enhanced productivity and
            precision
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FDF6ED] w-screen h-[544px] flex justify-center">
        <div className="container max-w-[1440px] flex gap-14 py-10">
          <div className="flex flex-col gap-5 pl-4">
            {list.map((item, index) => (
              <div key={index} className="w-[540px] pr-8">
                <div className="flex items-center gap-4">
                  <OrrengeSett />
                  <h1 className="text-[22px] font-bold text-[#F48C06]">
                    {item.title}
                  </h1>
                </div>
                <p className="text-[20px] font-medium text-[#1D242D] ml-12 leading-[25px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="h-[450px] flex justify-end items-center w-full">
            <Image
              src={img1}
              alt="Industrial Automation"
              width={690}
              height={450}
              className="h-[450px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-screen bg-[#F6F9FF] flex justify-center">
        <div className="container max-w-[1440px] flex justify-start gap-10">
          {/*  */}
          <div className="flex flex-col gap-4 overflow-x-auto py-7">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-20 overflow-x-auto scrollbar-hide scroll-smooth scrollbar-custom"
            >
              {product.map((item, index) => (
                <div key={index} className="flex gap-10 min-w-[900px]">
                  <Image
                    src={item.img}
                    alt="Industrial Automation"
                    width={424}
                    height={244}
                    className="h-[244px] object-cover"
                  />
                  <div className="text-start">
                    <h1 className="text-[32px] font-bold text-[#1D242D]">
                      {item.title}
                    </h1>
                    <p className="text-[20px] max-w-[436px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Scrollbar Navigation */}
            <div className="w-full flex justify-center items-center gap-3 mt-4">
              <button
                onClick={scrollLeft}
                className="border-[4px] rounded-xl border-solid rotate-180 border-[#B2BBC614] p-5"
              >
                <Arrow color={"#909DAD"} />
              </button>

              {/* Custom Scroll Indicator */}
              <div className="w-[146px] h-3 rounded-full bg-[#B2BBC633] relative">
                <div
                  className="h-3 rounded-full bg-[#0B61EA] absolute top-0 left-0 transition-all duration-300"
                  style={{ width: `${Math.max(scrollProgress, 5)}%` }}
                ></div>
              </div>

              <button
                onClick={scrollRight}
                className="border-[4px] rounded-xl border-solid border-[#B2BBC614] p-5"
              >
                <Arrow color={"#909DAD"} />
              </button>
            </div>
          </div>

          {/*  */}
          <div className="bg-[#0B61EA] max-w-[430px] text-center py-10 flex flex-col gap-4 px-4">
            <h1 className="text-[32px] font-bold text-white">
              Our AI Robotics
            </h1>
            <p className="text-[20px] font-medium text-white">
              Our AI robotics solutions boost productivity, minimize
              interruptions, and enhance precision. Clients are delighted with
              the rapid and precise performance our technology delivers to their
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomation2;
