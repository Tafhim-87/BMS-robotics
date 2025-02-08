import React from "react";
import Link from "next/link";
import WhiteLogo from "@/assets/svgs/WhiteLogo";
import PhoneIcn from "@/assets/svgs/icons/PhoneIcn";
import LocationIcn from "@/assets/svgs/icons/LocationIcn";
import MailIcn from "@/assets/svgs/icons/MailIcn ";

const footerData = [
  {
    title: "About BMS Robotics",
    links: [
      { name: "Company Overview", href: "/company-overview" },
      { name: "Jobs", href: "/jobs" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "Solutions", href: "/solutions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: " +1 514 574-9080", href: "#", icn: <PhoneIcn /> },
      { name: " Montréal, QC", href: "#", icn: <LocationIcn /> },
      {
        name: " contact@bmsrobotics.com",
        href: "mailto:contact@bmsrobotics.com",
        icn: <MailIcn />,
      },
      { name: " Open from Monday to Friday 8:00 AM – 5:00 PM", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: " Instagram", href: "#" },
      { name: " Facebook", href: "#" },
      { name: " Twitter / X", href: "#" },
      { name: " LinkedIn", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <section className="w-full bg-[#1D242D] text-white py-16 px-5 md:px-10 overflow-x-hidden">
      <div className="container max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <WhiteLogo /> <div className="w-full bg-[#546881]/70 h-0.5"></div>
        </div>
        <div className="flex flex-wrap justify-between gap-8 mt-16">
          {footerData.map((section, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-auto">
              <h3 className="font-bold mb-3">{section.title}</h3>
              <ul className="flex flex-col justify-start">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="mb-1 text-sm text-[#B2BBC6] flex items-center gap-2"
                  >
                    {link.icn && <span>{link.icn}</span>}
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full bg-[#546881]/70 h-0.5"></div>
        </div>
        <div className="mt-16 text-[#B2BBC6] flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center md:text-left">
            ©2025 BMS Robotics • All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#">Term of use</Link>
            <Link href="#">Privacy policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
