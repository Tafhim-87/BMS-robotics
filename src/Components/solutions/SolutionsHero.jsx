import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "@/assets/imgs/solution/hero.png";
import Bg from "@/assets/imgs/hero/gridBg.jpeg";

const SolutionsHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full flex justify-center items-center relative">
      {/* Background Image */}
      <Image
        src={Bg}
        alt=""
        width={1440}
        height={800}
        className="absolute inset-0 top-0 left-0 w-full h-full object-cover"
      />

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute rotate-[0.12°] inset-0 top-[-100px] right-0 hidden z-10 lg:flex items-start max-w-[1440px] justify-end w-screen h-full"
      >
        <Image
          src={img1}
          width={630}
          height={512}
          alt=""
          className="h-[712px] object-contain"
        />
      </motion.div>

      {/* Content Container */}
      <div className="container max-w-[1440px] flex flex-col z-10 px-4 sm:px-8 md:px-16">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 text-center md:text-start justify-center min-h-auto lg:min-h-[70vh]"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 sm:gap-[27px] max-w-full md:max-w-[753px]"
          >
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
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-[35px]"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#0B61EA] text-white px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base hover:bg-[#0a50c5] transition-colors"
            >
              Get Your Consultation
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-[#0B61EA] border border-solid border-[#0B61EA] px-4 sm:px-5 py-3 sm:py-[15px] rounded-lg text-sm sm:text-base hover:bg-[#0B61EA] hover:text-white transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#0B61EA] lg:flex hidden justify-center items-center gap-7 shadow-xl shadow-[#0B61EA4D] rounded-3xl p-10 mt-28"
        >
          {[
            {
              title: "Industrial Automation",
              description:
                "Focuses on automating manual processes in industries, showcasing robotics, packaging, etc.",
            },
            {
              title: "AI-powered Robotics",
              description:
                "Solutions leveraging AI for smarter decision-making, precision, and adaptability in various environments.",
            },
            {
              title: "IoT (Internet Of Things)",
              description:
                "Integrate robotics with IoT devices for real-time monitoring, data analytics, and remote control.",
            },
            {
              title: "Software Development",
              description:
                "Develop custom software and intuitive user interfaces that power your robotics systems.",
            },
          ].map((feature, index) => (
            <React.Fragment key={feature.title}>
              <motion.div
                variants={featureVariants}
                className="flex flex-col gap-[5px] text-[#FFFFFF] max-w-[256px] text-center"
              >
                <h4 className="text-[20px] font-bold">{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
              {index < 3 && (
                <div className="w-[1px] h-[116px] rounded-lg bg-white"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Features Section - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#0B61EA] lg:hidden shadow-xl shadow-[#0B61EA4D] rounded-xl p-6 sm:p-10 mt-16 sm:mt-28"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              {
                title: "Industrial Automation",
                description:
                  "Focuses on automating manual processes in industries, showcasing robotics, packaging, etc.",
              },
              {
                title: "AI-powered Robotics",
                description:
                  "Solutions leveraging AI for smarter decision-making, precision, and adaptability in various environments.",
              },
              {
                title: "IoT (Internet Of Things)",
                description:
                  "Integrate robotics with IoT devices for real-time monitoring, data analytics, and remote control.",
              },
              {
                title: "Software Development",
                description:
                  "Develop custom software and intuitive user interfaces that power your robotics systems.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className="flex flex-col items-center gap-2 max-w-[256px] mx-auto"
              >
                <h4 className="text-[18px] sm:text-[20px] font-bold">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
