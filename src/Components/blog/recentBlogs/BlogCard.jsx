import React from "react";
import SingleBlog from "./SingleBlog";
import BlogsCard from "./BlogsCard";

export const BlogCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container flex flex-col gap-5 max-w-[1440px] px-24">
        <h1 className="text-2xl">Recent Blogs</h1>
        <div className="flex gap-5 justify-start items-start">
          <SingleBlog />
          <BlogsCard />
        </div>
      </div>
    </div>
  );
};
