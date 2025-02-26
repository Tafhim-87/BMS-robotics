// AllBlogCard.js
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blogs from "@/Components/blog/data/blogs"; // Import the blogs array

// Utility function to truncate text
const truncateDescription = (text, maxChars) => {
  if (text.length > maxChars) {
    return text.slice(0, maxChars) + "...";
  }
  return text;
};
const AllBlogCard = ({ blogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const generatePagination = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full flex items-center justify-center mb-6">
      <div className="container flex flex-col gap-5 max-w-[1440px] px-2 md:px-24">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold">All Blogs</h1>

        <section className="w-full flex justify-center items-center">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentBlogs.map((blog, index) => (
              <div
                key={index}
                className="min-h-[216px] flex flex-col gap-[10px]"
              >
                <div>
                  <Image
                    src={blog.image}
                    alt="blog"
                    width={387}
                    height={337}
                    className="h-[337px] md:w-auto w-full"
                  />
                </div>
                <div className="max-w-[400px] flex flex-col gap-[10px] items-start px-2">
                  {/* Blog Title */}
                  <h3 className="font-bold text-xl sm:text-2xl">
                    {blog.title}
                  </h3>

                  {/* Categories */}
                  <div className="flex gap-2 max-w-[340px] flex-wrap">
                    {blog.categories.map((category, i) => (
                      <h5
                        key={i}
                        className="text-[#546881] text-xs sm:text-sm py-[5px] px-[10px] border border-[#546881] border-solid rounded-xl"
                      >
                        {category}
                      </h5>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-[#546881] text-sm sm:text-base">
                    {truncateDescription(blog.description, 85)}
                  </p>

                  {/* Read More Button */}
                  <Link href={`/blog/${blog.id}`} passHref>
                    <button className="font-semibold text-base sm:text-lg">
                      Read More {">>"}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-5">
          <button
            className={`px-3 py-1 border font-bold rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>

          {generatePagination().map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              } ${page === "..." ? "cursor-default" : ""}`}
              onClick={() => page !== "..." && setCurrentPage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            className={`px-3 py-1 font-bold border rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogCard;
