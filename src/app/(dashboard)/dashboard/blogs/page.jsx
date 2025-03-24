"use client";

import { useState } from "react"; // Import useState for pagination
import blogs from "@/Components/blog/data/blogs";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get the blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to limit the description to 150 characters
  const truncateDescription = (description) => {
    if (description.length > 150) {
      return description.slice(0, 150) + "...";
    }
    return description;
  };
  return (
    <div className="bg-[#F5F6FA] min-h-screen flex justify-center">
      <div className=" flex flex-col p-6 font-Nunito max-w-[1440px]">
        {/* Recent Blogs Section */}
        <div className=" p-5 flex justify-between items-center">
          <h2 className="text-[28px] font-bold">Blogs</h2>
          <Link
            href="/dashboard/add-blogs"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[14px] overflow-hidden"
            >
              <Image
                src={blog.image}
                alt="blog"
                width={586}
                height={240}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 flex flex-col gap-2">
                <p className="text-[#635C5C] text-sm">{blog.date}</p>
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
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-[#635C5C] text-sm">
                  {truncateDescription(blog.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md focus:bg-none ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
