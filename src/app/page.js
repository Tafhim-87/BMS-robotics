import Automation from "@/Components/home/Automation";
import { CompanieLogo } from "@/Components/home/CompanieLogo";
import ConnectForm from "@/Components/home/ConnectForm";
import Hero from "@/Components/home/Hero";
import IndustryCards from "@/Components/home/IndustryCards";
import Optimize from "@/Components/home/Optimize";
import Products from "@/Components/home/Products";
import React from "react";

const page = () => {
  return (
    <div className="font-Urbanist flex flex-col items-center md:px-10 px-5 justify-center gap-16 overflow-x-hidden">
      <Hero />
      <CompanieLogo />
      <Optimize />
      <Automation />
      <IndustryCards />
      <Products />
      <ConnectForm />
    </div>
  );
};

export default page;
