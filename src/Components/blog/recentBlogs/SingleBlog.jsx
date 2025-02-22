import React from "react";
import Image from "next/image";
import img1 from "@/assets/imgs/blog/blogimg1.png"; // Sample image
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Embracing Industry 4.0: The Future of Industrial Automation",
    categories: ["Industrial Automation", "Smart Technologies"],
    description:
      "Dive into the transformative impact of Industry 4.0 on industrial automation. Learn how smart technologies, AI, and interconnected systems are revolutionizing manufacturing processes, enhancing productivity, and driving innovation across various sectors.",
    image: img1,
  },
];

const SingleBlog = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container max-w-[1440px] flex flex-col gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-[586px] flex flex-col gap-[10px]">
            <div>
              <Image src={blog.image} alt="blog" width={586} height={240} />
            </div>
            <div className="max-w-[586px] flex flex-col gap-[10px] items-start">
              <h3 className="font-bold text-2xl">{blog.title}</h3>
              <div className="flex gap-2">
                {blog.categories.map((category, index) => (
                  <h5
                    key={index}
                    className="text-[#546881] text-xs py-[5px] px-[10px] border border-[#546881] border-solid rounded-xl"
                  >
                    {category}
                  </h5>
                ))}
              </div>
              <p className="text-[#546881]">{blog.description}</p>
              <Link href={`/blog/${blog.id}`} passHref>
                <button className="font-semibold text-lg">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleBlog;
