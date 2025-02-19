import React, { useRef, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";
import UpperSvg from "@/assets/svgs/solutionSvg/UpperSvg";
import Arrow from "@/assets/svgs/Arrow";
import "@/Components/home/style.css";
import OrrengeSett from "@/assets/svgs/solutionSvg/OrrengeSett";

const IndustrialAutomation4 = () => {
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
      title: "Tailored Software Design",
      description:
        "Craft custom software solutions designed specifically for your robotics needs.",
    },
    {
      title: "Integration with Robotics",
      description:
        "Integrate software with existing robotic hardware for seamless functionality.",
    },
    {
      title: "User Interface Optimization",
      description:
        "Develop intuitive, easy-to-use interfaces for better user experience.",
    },
    {
      title: "Continuous Support ",
      description:
        "Offer ongoing support and updates to ensure your systems remain cutting-edge.",
    },
  ];

  const product = [
    {
      img: img1,
      title: "Software Project Name",
      description:
        "Our cutting-edge AI software solutions boost efficiency, minimize errors, and enhance precision. Developers are excited about the speed and accuracy our innovations bring to their coding projects.",
    },
    {
      img: img1,
      title: "Software Project Name",
      description:
        "Our cutting-edge AI software solutions boost efficiency, minimize errors, and enhance precision. Developers are excited about the speed and accuracy our innovations bring to their coding projects.",
    },
    {
      img: img1,
      title: "Software Project Name",
      description:
        "Our cutting-edge AI software solutions boost efficiency, minimize errors, and enhance precision. Developers are excited about the speed and accuracy our innovations bring to their coding projects.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      <div className="container max-w-[1440px] flex flex-col gap-10">
        <h1 className="text-[22px] font-bold text-[#0B61EA] text-center flex flex-col justify-center items-center">
          <UpperSvg />
          Software Development
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-[40px] font-bold text-[#1D242D]">
            Custom Software Development for Robotics Solutions
          </h1>
          <p className="text-[20px] font-medium text-[#1D242D] mt-4">
            Develop custom software tailored to your robotics systems, enabling
            seamless integration, automation, and user-friendly interfaces for
            maximum efficiency and performance.
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
            <h1 className="text-[32px] font-bold text-white">Our Softwares</h1>
            <p className="text-[20px] font-medium text-white">
              Our AI software solutions increase efficiency, reduce downtime,
              and improve accuracy. Clients are thrilled with the swift and
              precise performance our technology brings to their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomation4;
