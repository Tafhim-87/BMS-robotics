"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/imgs/login/mainlogo.png";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import dsh from "@/assets/imgs/sidenav/1.png";
import prod from "@/assets/imgs/sidenav/2.png";
import proj from "@/assets/imgs/sidenav/3.png";
import blog from "@/assets/imgs/sidenav/4.png";
import cont from "@/assets/imgs/sidenav/5.png";
import dshA from "@/assets/imgs/sidenav/1a.png";
import prodA from "@/assets/imgs/sidenav/2a.png";
import projA from "@/assets/imgs/sidenav/3a.png";
import blogA from "@/assets/imgs/sidenav/4a.png";
import contA from "@/assets/imgs/sidenav/5a.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setIsClient(true); // Set isClient to true after mounting
  }, []);

  useEffect(() => {
    if (mobileWidth) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [mobileWidth]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: dsh, iconA: dshA },
    { name: "Products", href: "/dashboard/products", icon: prod, iconA: prodA },
    { name: "Projects", href: "/dashboard/projects", icon: proj, iconA: projA },
    { name: "Blogs", href: "/dashboard/blogs", icon: blog, iconA: blogA },
    { name: "Contact", href: "/dashboard/contact", icon: cont, iconA: contA },
  ];

  const bottomMenu = [
    { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    { name: "Logout", href: "/logout", icon: "🚪" },
  ];

  // Render nothing on the server
  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "80px" }}
      className="h-screen font-Nunito flex flex-col justify-between py-2 pr-2 bg-white border-r"
    >
      <div>
        <div className="items-center justify-center hidden md:flex mb-8 mt-2">
          <Image
            src={logo}
            alt="Logo"
            width={isOpen ? 70 : 40}
            height={40}
            className="transition-all"
          />
        </div>
        <ul>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href; // Check if item is active
            return (
              <div key={index} className="flex gap-2 items-center w-full">
                <div
                  className={`h-[50px] w-1 rounded-full ${
                    isActive ? "bg-[#4880FF]" : "bg-transparent"
                  }`}
                ></div>
                <Link
                  href={item.href}
                  className={`p-4 w-full text-sm font-semibold rounded-lg cursor-pointer transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#4880FF] text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                  aria-label={item.name}
                >
                  {isOpen ? (
                    <>
                      <Image
                        src={isActive ? item.iconA : item.icon}
                        alt="Icon"
                        width={24}
                        height={24}
                      />
                      <span>{item.name}</span>
                    </>
                  ) : (
                    <Image
                      src={isActive ? item.iconA : item.icon}
                      alt="Icon"
                      width={24}
                      height={24}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {bottomMenu.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <div key={index} className="flex items-center gap-2 w-full">
                <div
                  className={`h-[50px] w-1 rounded-full ${
                    isActive ? "bg-[#4880FF]" : "bg-transparent"
                  }`}
                ></div>
                <Link
                  href={item.href}
                  className={`p-4 w-full text-sm font-semibold rounded-lg cursor-pointer transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#4880FF] text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                  aria-label={item.name}
                >
                  {isOpen ? (
                    <>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </>
                  ) : (
                    <span className="text-center flex items-center justify-center">
                      {item.icon}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
