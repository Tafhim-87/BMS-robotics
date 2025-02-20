import React, { useRef, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";
import UpperSvg from "@/assets/svgs/solutionSvg/UpperSvg";
import Arrow from "@/assets/svgs/Arrow";
import "@/Components/home/style.css";

const IndustrialAutomation3 = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const list = [
    {
      title: "Device Connectivity",
      description:
        "Seamlessly connect robots with IoT devices for real-time data exchange.",
    },
    {
      title: "Smart Analytics",
      description:
        "Leverage IoT data for predictive maintenance and process optimization.",
    },
    {
      title: "Remote Monitoring",
      description:
        "Control and monitor robots from anywhere for greater flexibility and control.",
    },
    {
      title: "Scalable Infrastructure",
      description: "Easily scale IoT-enabled robotics as your needs grow.",
    },
  ];

  const product = [
    {
      img: img1,
      title: "IOT Product Name",
      description:
        "Our state-of-the-art IoT solutions enhance productivity, reduce downtime, and improve precision. Clients are thrilled with the speed and accuracy our innovations bring to their connected manufacturing environments.",
    },
    {
      img: img1,
      title: "IOT Product Name",
      description:
        "Our state-of-the-art IoT solutions enhance productivity, reduce downtime, and improve precision. Clients are thrilled with the speed and accuracy our innovations bring to their connected manufacturing environments.",
    },
    {
      img: img1,
      title: "IOT Product Name",
      description:
        "Our state-of-the-art IoT solutions enhance productivity, reduce downtime, and improve precision. Clients are thrilled with the speed and accuracy our innovations bring to their connected manufacturing environments.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-6 md:gap-10">
        <h1 className="text-lg md:text-xl font-bold text-[#0B61EA] text-center flex flex-col justify-center items-center">
          <UpperSvg />
          Internet Of Things
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#1D242D]">
            Cutting-Edge IoT Solutions for Smart Automation
          </h1>
          <p className="text-base md:text-lg font-medium text-[#1D242D] mt-3 md:mt-4">
            Integrate robotics with IoT technology to enable real-time
            monitoring, smart data collection, and seamless remote control,
            enhancing operational efficiency and enabling smarter
            decision-making.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#EEF3FF] w-screen flex justify-center">
        <div className="container max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-28 py-5 lg:py-10">
          <div className="lg:h-[450px] h-auto flex justify-center items-center">
            <Image
              src={img1}
              alt="Industrial Automation"
              width={690}
              height={450}
              className="lg:h-[450px] h-auto w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 px-5">
            {list.map((item, index) => (
              <div key={index} className="w-full md:w-[540px] pr-4 md:pr-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <SettingIcn />
                  <h1 className="text-lg md:text-xl font-bold text-[#0B61EA]">
                    {item.title}
                  </h1>
                </div>
                <p className="text-base md:text-lg font-medium text-[#1D242D] ml-0 md:ml-12 leading-[22px] md:leading-[25px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-screen bg-[#FDF6ED] flex justify-center">
        <div className="container max-w-[1440px] flex flex-col lg:flex-row justify-start gap-10">
          <div className="bg-[#ED8A11] lg:max-w-[430px] w-full text-center py-10 flex flex-col gap-4 px-4">
            <h1 className="text-[32px] font-bold text-white">
              Our IoT Solution
            </h1>
            <p className="text-[20px] font-medium text-white">
              Our IoT solutions revolutionize industrial automation by boosting
              efficiency, minimizing downtime, and enhancing precision. Clients
              are delighted with the seamless connectivity and real-time data
              insights our technology provides to their production lines.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4 overflow-x-auto py-7">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-10 sm:gap-16 md:gap-20 overflow-x-auto scrollbar-hide scroll-smooth scrollbar-custom"
            >
              {product.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-6 sm:gap-10 min-w-full md:min-w-[900px]"
                >
                  <Image
                    src={item.img}
                    alt="Industrial Automation"
                    width={320}
                    height={180}
                    className="w-full lg:max-w-[320px] object-cover flex justify-center items-center bg-red-300"
                  />
                  <div className="lg:text-start text-center flex flex-col justify-center items-center lg:px-0 px-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1D242D]">
                      {item.title}
                    </h1>
                    <p className="text-base sm:text-lg w-full md:max-w-[436px] lg:text-start text-center">
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
                  className="h-3 rounded-full bg-[#F48C06] absolute top-0 left-0 transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomation3;
