"use client";

import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import NavBar from "@/Components/home/NavBar";
import { Footer } from "@/Components/home/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <div className="min-h-screen flex flex-col">
      {!isBlogPage && <NavBar />}
      <main className="flex-1">{children}</main>
      {!isBlogPage && <Footer />}
    </div>
  );
}
