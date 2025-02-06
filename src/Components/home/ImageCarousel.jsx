import Image from "next/image";
import img1 from "@/assets/imgs/robo-img1.jpg";
import img2 from "@/assets/imgs/robo-img2.jpg";
import img3 from "@/assets/imgs/robo-img3.jpg";
import "@/Components/home/index.css";

const ImageCarousel = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container flex mother justify-center items-center">
        <Image
          src={img1}
          alt="Image 1"
          width={300}
          height={300}
          className="rotate2 rounded-lg"
        />
        <Image
          src={img2}
          alt="Image 2"
          width={600}
          height={300}
          className="rounded-lg"
        />
        <Image
          src={img3}
          alt="Image 3"
          width={300}
          height={300}
          className="rotate1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
