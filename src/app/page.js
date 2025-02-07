import { CompanieLogo } from "@/Components/home/CompanieLogo";
import Hero from "@/Components/home/Hero";
import IndustryCards from "@/Components/home/IndustryCards";
import Optimize from "@/Components/home/Optimize";
import Products from "@/Components/home/Products";
import React from "react";

const page = () => {
  return (
    <div className="font-Urbanist flex flex-col items-center px-10 justify-center gap-16 overflow-x-hidden">
      <Hero />
      <CompanieLogo />
      <Optimize />
      <IndustryCards />
      <Products />
    </div>
  );
};

export default page;
