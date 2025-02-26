import React from "react";
import Image from "next/image";
import img from "@/assets/imgs/projects/stairImg.png";

const steps = [
  {
    id: 1,
    title: "Planning and Assessment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Design and Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Implementation and Testing",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
];

const HowWill = () => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="container max-w-[1440px] text-center">
        <h1 className="text-[48px] font-black">
          How will <span className="text-[#0B61EA]">it be</span>
        </h1>
        <p className="text-[20px] text-[#213D39] font-light mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className=" flex gap-16">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] px-4 w-[60%]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="max-w-[400px] mx-auto py-8 px-12 border border-transparent hover:border-[#0B61EA] hover:border-2 rounded-[38px] transition-all duration-300"
              >
                <div className="flex gap-4 justify-start items-center">
                  <div className="w-[38px] h-[38px] flex justify-center items-center rounded-lg text-white bg-[#0B61EA] font-semibold text-[20px]">
                    {step.id}
                  </div>
                  <h2 className="text-[24px] font-semibold leading-8 text-start">
                    {step.title}
                  </h2>
                </div>
                <p className="text-[#213D39] font-light text-start">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          {/* Image */}
          <div>
            <Image src={img} alt="x" width={400} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWill;
