import ContactForm from "@/Components/contactUs/ContactFrom";
import ContactHero from "@/Components/contactUs/ContactHero";
import NavBar from "@/Components/home/NavBar";
import React from "react";

const page = () => {
  return (
    <div className="font-Urbanist md:px-10 px-4">
      <NavBar />
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default page;
