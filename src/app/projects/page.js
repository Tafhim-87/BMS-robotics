"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/Components/home/Loading";
import NavBar from "@/Components/home/NavBar";
import ProjectHero from "@/Components/projects/ProjectHero";
import Testimonials from "@/Components/projects/Testimonials";
import Information from "@/Components/projects/Information";
import Automation from "@/Components/projects/Automation";
import SearchBar from "@/Components/projects/SearchBar";

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

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <div className="font-Urbanist bg-[#ffffff] flex flex-col items-center md:px-4 px-4 justify-center gap-16 overflow-x-hidden">
      <NavBar />
      <ProjectHero />
      <SearchBar />
      <Information />
      <Automation />
      <Testimonials />
    </div>
  );
};

export default Page;
