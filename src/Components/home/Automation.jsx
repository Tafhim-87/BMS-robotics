import img1 from "@/assets/imgs/frame.png";
import img2 from "@/assets/imgs/frameMobile.png";
import Arrow from "@/assets/svgs/Arrow";
import Image from "next/image";

export default function Automation() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="container max-w-[1440px] relative flex justify-center">
        {/* Background Image */}
        <Image
          src={img1}
          alt="Automation & Robotics"
          width={1260}
          height={380}
          className="hidden md:block w-full h-[380px] object-cover rounded-2xl"
        />
        <Image
          src={img2}
          alt="Automation & Robotics"
          width={396}
          height={351}
          className="md:hidden block w-[396] h-auto"
        />

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 h-full flex flex-col items-start justify-center p-8 text-[#FFFFFF] w-full md:w-[534px]">
          <h1 className="text-[24px] md:text-[32px] text-[#FFFFFF] font-bold text-center w-full md:text-start">
            Supercharge Your <br /> Business with <br />
            <span>Automation & Robotics</span>
          </h1>
          <p className="mt-4 max-w-lg text-[14px] md:text-[16px] text-center md:text-start">
            Innovation and growth with our expert solutions in Industrial
            Automation, Robotics, iOS, and Software Development.
          </p>
          <div className="container flex justify-center md:justify-start">
            <button className="mt-4 px-6 py-2 bg-white text-[#1D242D] rounded-lg active:scale-95 flex items-center gap-16">
              Let’s Talk <Arrow color={"#546881"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
