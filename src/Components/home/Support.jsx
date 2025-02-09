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
    <section className="w-full flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center max-w-[1440px] px-10">
        <div className="w-[1264px] h-[330px] bg-gradient-to-br from-[#293241] to-[#003081] text-[#ffffff] p-14">
          <div className="w-[500px] flex flex-col gap-8">
            <h1 className="text-5xl font-bold">
              We have best team and best process
            </h1>
            <p className="text-[22px] leading-[32px]">
              Our team and processes are the best, delivering unmatched results
              every time
            </p>
          </div>
        </div>
        <div className="flex ">
          <div className="grid grid-cols-2 top-[-30px] right-[-30px] gap-[30px] mt-[70px] justify-start w-[778px]">
            {/* cards */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border-[2px] border-solid border-[#B2BBC6] rounded-[20px] p-[25px] flex flex-col gap-[10px] shadow-[-10px_-10px_0px_rgb(229,233,238)]"
              >
                <h1 className="text-2xl font-bold">{card.title}</h1>
                <p>{card.description}</p>
              </div>
            ))}
            {/* Lat’s Talk Togather */}
            <div className="relative">
              <Image src={img2} alt="Support" width={374} height={232} />
              <button className="flex bg-[#ffffff] text-[#0B61EA] py-2 px-4 rounded-[10px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                Lat’s Talk Togather <Arrow />
              </button>
            </div>
          </div>
          <div className="mt-[-120px]">
            <Image src={img1} alt="Support" width={412} height={330} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
