"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogoSvg from "@/assets/svgs/LogoSvg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[112px] flex items-center justify-center overflow-x-hidden relative">
      <div className="container flex items-center justify-between max-w-[1440px] px-5 lg:px-10">
        <Link href="/">
          <LogoSvg />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[34px]">
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#0B61EA] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#0B61EA] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#0B61EA] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#0B61EA] transition-colors"
          >
            Jobs
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#0B61EA] transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="#"
          className="hidden lg:flex justify-center items-center text-white font-medium bg-[#0B61EA] rounded-lg w-[190px] p-[14px] active:scale-95 hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col space-y-2 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`w-8 h-[3px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-8 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-[112px] left-0 w-full h-screen bg-white z-50 lg:hidden transform transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center pt-8 space-y-6">
            <Link
              href="#"
              className="text-2xl font-medium hover:text-[#0B61EA] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium hover:text-[#0B61EA] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium hover:text-[#0B61EA] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium hover:text-[#0B61EA] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium hover:text-[#0B61EA] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-white font-medium bg-[#0B61EA] rounded-lg w-[190px] p-4 text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
