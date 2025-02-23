import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "@/assets/imgs/solution/indAutomation.png";
import SettingIcn from "@/assets/svgs/solutionSvg/SettingIcn";
import UpperSvg from "@/assets/svgs/solutionSvg/UpperSvg";
import Arrow from "@/assets/svgs/Arrow";
import OrrengeSett from "@/assets/svgs/solutionSvg/OrrengeSett";
import "@/Components/home/style.css";

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
        "Allow robots to autonomously adapt to varying tasks and environments.",
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

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-8">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.5 }}
        className="container max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-6 md:gap-10"
      >
        <h1 className="text-lg md:text-xl font-bold text-[#0B61EA] text-center flex flex-col justify-center items-center">
          <UpperSvg />
          AI-Powered Robotics
        </h1>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#1D242D]">
            AI-powered Robotics for Smarter Automation
          </h1>
          <p className="text-base md:text-lg font-medium text-[#1D242D] mt-3 md:mt-4">
            Leverage artificial intelligence to create adaptive, intelligent
            robots that can learn from their environment, make decisions in
            real-time, and optimize tasks for enhanced productivity and
            precision.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-[#FDF6ED] w-screen flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          className="container max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-28 py-5 lg:py-10"
        >
          <div className="lg:h-[450px] h-auto lg:hidden flex justify-center items-center">
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
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInLeft}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full md:w-[540px] pr-4 md:pr-8"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <OrrengeSett />
                  <h1 className="text-lg md:text-xl font-bold text-[#F48C06]">
                    {item.title}
                  </h1>
                </div>
                <p className="text-base md:text-lg font-medium text-[#1D242D] ml-0 md:ml-12 leading-[22px] md:leading-[25px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="lg:h-[450px] h-auto hidden lg:flex justify-center items-center">
            <Image
              src={img1}
              alt="Industrial Automation"
              width={690}
              height={450}
              className="lg:h-[450px] h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className="w-screen bg-[#F6F9FF] flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          className="container max-w-[1440px] flex flex-col lg:flex-row justify-start gap-10"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-[#0B61EA] lg:max-w-[430px] w-full text-center py-10 flex flex-col gap-4 px-4"
          >
            <h1 className="text-[32px] font-bold text-white">
              Our AI Robotics
            </h1>
            <p className="text-[20px] font-medium text-white">
              Our AI robotics solutions boost productivity, minimize
              interruptions, and enhance precision. Clients are delighted with
              the rapid and precise performance our technology delivers to their
              operations.
            </p>
          </motion.div>

          {/* Scrollable Products */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4 overflow-x-auto py-7"
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-10 sm:gap-16 md:gap-20 overflow-x-auto scrollbar-hide scroll-smooth scrollbar-custom"
            >
              {product.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.5 }}
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
                </motion.div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrialAutomation2;
