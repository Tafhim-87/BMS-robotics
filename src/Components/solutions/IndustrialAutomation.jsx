import React, { useRef, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";
import UpperSvg from "@/assets/svgs/solutionSvg/UpperSvg";
import Arrow from "@/assets/svgs/Arrow";
import "@/Components/home/style.css";

const IndustrialAutomation = () => {
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
      title: "Customized Design",
      description:
        "Tailored robotics solutions to meet your unique operational needs.",
    },
    {
      title: "Smart Integration",
      description:
        "Connects seamlessly with IoT devices and AI for predictive maintenance and real-time analytics.",
    },
    {
      title: "Task Automation",
      description:
        "Automates repetitive tasks to improve productivity and safety.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Designed to grow with your business, ensuring long-term value.",
    },
  ];

  const product = [
    {
      img: img1,
      title: "Industrial Product Name",
      description:
        "Our cutting-edge industrial automation solutions boost productivity, minimize downtime, and elevate precision. Clients are delighted by the rapidity and accuracy our innovations introduce to their manufacturing processes.",
    },
    {
      img: img1,
      title: "Industrial Product Name",
      description:
        "Our cutting-edge industrial automation solutions boost productivity, minimize downtime, and elevate precision. Clients are delighted by the rapidity and accuracy our innovations introduce to their manufacturing processes.",
    },
    {
      img: img1,
      title: "Industrial Product Name",
      description:
        "Our cutting-edge industrial automation solutions boost productivity, minimize downtime, and elevate precision. Clients are delighted by the rapidity and accuracy our innovations introduce to their manufacturing processes.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-6 md:gap-10">
        <h1 className="text-lg md:text-xl font-bold text-[#0B61EA] text-center flex flex-col justify-center items-center">
          <UpperSvg />
          Industrial Automation
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#1D242D]">
            Advanced Industrial Automation Solutions for Smarter Manufacturing
          </h1>
          <p className="text-base md:text-lg font-medium text-[#1D242D] mt-3 md:mt-4">
            Transform your production lines with our industrial automation
            solutions. By integrating advanced robotics, IoT, and AI, we
            optimize processes like assembly, material handling, and quality
            control, boosting efficiency, reducing downtime, and lowering costs.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#EEF3FF] w-screen flex justify-center">
        <div className="container max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-32 py-5 lg:py-10">
          <div className="lg:h-[450px] h-auto flex justify-start items-center">
            <Image
              src={img1}
              alt="Industrial Automation"
              width={690}
              height={450}
              className="lg:h-[450px] h-auto w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 px-5 lg:px-0">
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
            <h1 className="text-[32px] font-bold text-white">Our Automation</h1>
            <p className="text-[20px] font-medium text-white">
              Our industrial automation products enhance efficiency, reduce
              downtime, and improve precision. Customers are thrilled with the
              speed and accuracy our solutions bring to their production lines.
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
                    className=" w-full lg:max-w-[320px] object-cover flex justify-center items-center bg-red-300"
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

export default IndustrialAutomation;
