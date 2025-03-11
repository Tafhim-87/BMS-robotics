import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dot from "@/assets/imgs/projects/Dot.png";
import ellipse from "@/assets/imgs/projects/ellipse.png";
import groupPeo from "@/assets/imgs/projects/groupPeo.png";
import img1 from "@/assets/imgs/projects/person.jpg";

const testimonials = [
  {
    name: "Matthew Paul",
    text: "Our experience with their automation solutions has been exceptional. The efficiency and precision achieved have significantly enhanced our production processes. Highly recommend their services!",
    image: img1,
  },
  {
    name: "Sophia Carter",
    text: "Amazing service! The team is professional and delivers top-notch solutions. I couldn't be happier!",
    image: img1,
  },
  {
    name: "John Doe",
    text: "Fantastic work! The team delivered exactly what we needed on time and within budget.",
    image: img1,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full flex justify-center items-center overflow-hidden min-h-[600px]">
      <div className="container flex flex-col items-center py-4">
        <h2 className="text-[48px] font-black mb-4">
          What our happy <span className="text-blue-600">client say</span>
        </h2>
        <p className="text-gray-500 mb-6 text-[20px] font-light">
          Several selected clients, who already believe in our service.
        </p>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center mt-14">
          {/* Background Images */}
          <Image
            src={dot}
            alt="dot"
            width={240}
            height={240}
            className="absolute top-[-70px] left-[180px] z-0"
          />
          <Image
            src={ellipse}
            alt="ellipse"
            width={120}
            height={120}
            className="absolute hidden lg:block bottom-[-10px] left-[0px] z-0"
          />

          {/* Carousel Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 max-w-full items-center lg:max-w-[70%] z-10"
            >
              {/* Testimonial Image */}
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={400}
                height={400}
                className="rounded-br-full min-h-auto md:min-h-[400px] rounded-l-full"
              />

              {/* Testimonial Text and Dots Indicator */}
              <div className="max-w-[600px] flex flex-col">
                <h1 className="text-[28px] font-semibold">
                  {testimonials[current].name}
                </h1>
                <p>{testimonials[current].text}</p>

                {/* Dots Indicator */}
                <div className="flex gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`rounded-full ${
                        current === index
                          ? "bg-[#0B61EA] h-4"
                          : "bg-[#0B61EA]/40 h-4"
                      }`}
                      initial={{
                        width: current === index ? "2.25rem" : "1rem",
                      }} // Initial width
                      animate={{
                        width: current === index ? "2.25rem" : "1rem",
                      }} // Animate width
                      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Circle */}
          <div className="hidden lg:block">
            <Image src={groupPeo} alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
