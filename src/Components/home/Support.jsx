import img1 from "@/assets/imgs/hero/macine.png";
import img2 from "@/assets/imgs/hero/buttonbg.png";
import Image from "next/image";
import Arrow from "@/assets/svgs/Arrow";

const Support = () => {
  const cardData = [
    {
      title: "Experts",
      description:
        "At BMS Robotics, we provide innovative automation solutions across industries like agriculture, automotive, manufacturing, and more, leveraging robotics, IoT, AI, cloud computing, and mobile software to drive business success.",
    },
    {
      title: "Communication",
      description:
        "At BMS Robotics, we prioritize open communication and collaboration with our clients, employees, and partners. Our customer-centric approach fosters strong relationships and ensures we exceed client expectations, driving mutual success.",
    },
    {
      title: "Support",
      description:
        "At BMS Robotics, we offer fast, reliable, and responsive customer support, with a dedicated team always ready to assist you both remotely and on-site. We're committed to resolving your technical challenges quickly and efficiently.",
    },
  ];
  return (
    <section className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col items-center justify-center max-w-[1440px]">
        {/* Gradient Section */}
        <div className="w-full max-w-[1264px] bg-gradient-to-br from-[#293241] to-[#003081] text-white p-6 md:p-14 rounded-xl">
          <div className="w-full max-w-[500px] flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              We have best team and best process
            </h1>
            <p className="text-base md:text-lg lg:text-[22px] lg:leading-[32px]">
              Our team and processes are the best, delivering unmatched results
              every time
            </p>
          </div>
        </div>

        {/* Cards & Image Section */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1264px] gap-6 mt-8 md:mt-14">
          {/* Cards Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border-2 border-solid border-[#B2BBC6] rounded-xl p-4 md:p-6 flex flex-col gap-2 
                         hover:transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300 ease-in-out"
              >
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-sm md:text-base">{card.description}</p>
              </div>
            ))}

            {/* Let's Talk Button */}
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={img2}
                alt="Support"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <button className="flex items-center bg-white text-[#0B61EA] py-2 px-4 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                Lat’s Talk Together <Arrow className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[40%] mt-4 lg:mt-[-120px] lg:mb-[-120px]">
            <Image
              src={img1}
              alt="Support"
              layout="responsive"
              width={412}
              height={330}
              className="rounded-xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
