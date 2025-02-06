import React from "react";
import Link from "next/link";
import LogoSvg from "@/assets/svgs/LogoSvg";

const NavBar = () => {
  return (
    <div className="w-full h-[112px] flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <LogoSvg />
        </Link>
        <div className="flex items-center gap-[34px]">
          <Link href="#" className="text-lg font-medium">
            Home
          </Link>
          <Link href="#" className="text-lg font-medium">
            Solutions
          </Link>
          <Link href="#" className="text-lg font-medium">
            Projects
          </Link>
          <Link href="#" className="text-lg font-medium">
            Jobs
          </Link>
          <Link href="#" className="text-lg font-medium">
            Blog
          </Link>
        </div>
        <Link
          href="#"
          className="text-[#ffffff] font-medium bg-[#0B61EA] rounded-lg w-[190px] p-[14px] active:scale-95"
        >
          {" "}
          <h4 className="text-center">Contuct Us</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
