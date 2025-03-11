"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/imgs/hero/whiteLogo.png";

const WhiteNavbaar = () => {
  const Navs = [
    { bar: "Home", link: "/" },
    { bar: "Solution", link: "/solution" },
    { bar: "Projects", link: "/projects" },
    { bar: "Blog", link: "/blog" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <motion.nav
      className="w-full h-[112px] flex items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container flex items-center justify-between max-w-[1440px] px-5 lg:px-10">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex items-center gap-[34px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Navs.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`text-lg text-[#ffffff] transition-colors ${
                pathname === item.link ? "font-semibold" : "font-normal"
              }`}
            >
              {item.bar}
            </Link>
          ))}
        </motion.div>

        {/* Desktop Contact Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/contactUs"
            className="hidden lg:flex justify-center items-center text-[#0B61EA] font-medium bg-[#ffffff] rounded-lg w-[190px] p-[14px] active:scale-95"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col space-y-2 p-4 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <motion.span
            className={`w-8 h-[3px] bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <motion.span
            className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          className={`fixed top-[112px] left-0 w-full h-screen bg-white z-50 lg:hidden`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center pt-8 space-y-6">
            {Navs.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`text-2xl text-black transition-colors ${
                  pathname === item.link ? "font-bold" : "hover:text-[#0B61EA]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.bar}
              </Link>
            ))}
            <Link
              href="/contactUs"
              className="text-white font-medium bg-[#0B61EA] rounded-lg w-[190px] p-4 text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default WhiteNavbaar;
