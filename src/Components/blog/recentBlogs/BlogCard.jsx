import React from "react";
import SingleBlog from "./SingleBlog";
import BlogsCard from "./BlogsCard";

export const BlogCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container flex flex-col gap-5 max-w-[1440px] px-8 lg:px-24">
        <h1 className="text-2xl">Recent Blogs</h1>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          <SingleBlog />
          <BlogsCard />
        </div>
      </div>
    </div>
  );
};
