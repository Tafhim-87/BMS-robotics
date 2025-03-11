"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cardData from "@/Components/projects/data/cardData";
import Image from "next/image";
import NavBar from "@/Components/home/NavBar";
import Link from "next/link";
const ProjectDetail = () => {
  const [visibleImages, setVisibleImages] = useState([0, 1]); // Show first two images by default
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProject = cardData.find((item) => item.id.toString() === id);
      setProject(foundProject);
    }
  }, [id]);

  if (!project) return <p className="text-center text-2xl py-10">Loading...</p>;

  const handleDotClick = (index) => {
    const nextIndex = index * 2; // Calculate the next two images
    if (nextIndex < project.thumbnails.length) {
      setVisibleImages(
        [nextIndex, nextIndex + 1].filter((i) => i < project.thumbnails.length)
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center sm:px-8 px-4 md:px-10">
      <NavBar />
      <div className="container flex flex-col items-center justify-center py-10 px-4 max-w-[1212px]">
        <div className="flex items-start w-full gap-2 text-sm sm:text-base md:text-lg font-medium mb-4">
          <Link href="/projects">Home</Link> /
          <Link href="/projects">Projects</Link> /
          <Link href={`/projects/${project.id}`} passHref>
            {project.title}
          </Link>
        </div>
        <Image
          src={project.mainImage}
          alt={project.title}
          width={1210}
          height={400}
          className="mt-4"
        />
        <div>
          <h1 className="lg:text-[38px] md:text-3xl text-xl font-bold">
            {project.title}
          </h1>
          <p className="mt-4 md:text-base text-sm">{project.description}</p>
        </div>

        {/* Carousel Section */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          {visibleImages.map((index) => (
            <div key={index} className="flex">
              <Image
                src={project.thumbnails[index]}
                alt={`${project.title} ${index}`}
                width={500}
                height={400}
                className="w-full object-cover md:w-full lg:w-[550px]"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(project.thumbnails.length / 2) },
            (_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[15px] h-[15px] rounded-full cursor-pointer ${
                  visibleImages[0] === index * 2
                    ? "bg-[#0B61EA]"
                    : "bg-[#D9D9D9]"
                }`}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
