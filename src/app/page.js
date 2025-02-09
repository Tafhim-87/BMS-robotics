"use client";

import React, { useState, useEffect } from "react";
import Automation from "@/Components/home/Automation";
import { CompanieLogo } from "@/Components/home/CompanieLogo";
import ConnectForm from "@/Components/home/ConnectForm";
import Hero from "@/Components/home/Hero";
import IndustryCards from "@/Components/home/IndustryCards";
import Optimize from "@/Components/home/Optimize";
import Products from "@/Components/home/Products";
import Support from "@/Components/home/Support";
import Loading from "@/Components/home/Loading";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    let lenis;
    let rafId;

    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1.5,
      });

      const animate = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      cancelAnimationFrame(rafId);
    };
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <div className="font-Urbanist flex flex-col items-center md:px-10 px-5 justify-center gap-16 overflow-x-hidden">
      <Hero />
      <CompanieLogo />
      <Optimize />
      <Automation />
      <IndustryCards />
      <Products />
      <Support />
      <ConnectForm />
    </div>
  );
};

export default Page;
