import img1 from "@/assets/imgs/frame.png";
import Arrow from "@/assets/svgs/Arrow";
import Image from "next/image";

export default function Automation() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="container max-w-[1440px] relative">
        {/* Background Image */}
        <Image
          src={img1}
          alt="Automation & Robotics"
          width={1260}
          height={380}
          className="w-full h-auto"
        />

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 h-full flex flex-col items-start justify-center p-8 text-[#FFFFFF] w-[534px]">
          <h1 className="text-[32px] text-[#FFFFFF] font-bold">
            Supercharge Your <br /> Business with <br />
            <span>Automation & Robotics</span>
          </h1>
          <p className="mt-4 max-w-lg">
            Innovation and growth with our expert solutions in Industrial
            Automation, Robotics, iOS, and Software Development.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-[#1D242D] rounded-lg active:scale-95 flex items-center gap-16">
            Let’s Talk <Arrow color={"#546881"} />
          </button>
        </div>
      </div>
    </section>
  );
}
