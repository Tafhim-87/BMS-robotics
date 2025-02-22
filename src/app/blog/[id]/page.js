// app/blog/[id]/page.js
import React from "react";
import blogs from "@/Components/blog/data/blogs"; // Import the blogs array
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ params }) => {
  const { id } = params; // Get the `id` from the URL

  // Find the blog with the matching `id`
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="w-full flex items-center justify-center font-Urbanist">
      <div className="container flex flex-col gap-5 max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Breadcrumb Navigation */}
        <div className="flex gap-2 text-sm sm:text-base md:text-lg font-medium">
          <Link href="/blog">Home</Link>/<Link href="/blog">Blog</Link>/
          <Link href={`/blog/${blog.id}`} passHref>
            {blog.title}
          </Link>
        </div>

        {/* Blog Image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={blog.image}
            alt="blog"
            width={586}
            height={240}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold w-full text-start">
          {blog.title}
        </h1>

        {/* Blog Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#546881]">
          {blog.description}
        </p>

        {/* Blog Content */}
        <p className="text-sm sm:text-base md:text-lg text-[#546881]">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
