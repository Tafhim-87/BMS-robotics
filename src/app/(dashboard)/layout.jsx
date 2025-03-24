"use client";

// import "./globals.css";
import SideNav from "@/Components/sideNav/SideNav";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/log-in");

  return (
    <div className="min-h-screen w-full flex justify-center items-start overflow-x-hidden">
      <div className="w-screen flex">
        <div className="">
          <SideNav />
        </div>
        <main className="flex-1">
          <div className="w-full h-[70px]"></div>
          {children}
        </main>
      </div>
    </div>
  );
}
