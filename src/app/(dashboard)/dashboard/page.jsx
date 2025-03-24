"use client";

import { useState } from "react"; // Import useState for pagination
import blogs from "@/Components/blog/data/blogs";
import projects from "@/Components/projects/data/cardData";
import Image from "next/image";

const Dashboard = () => {
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
      <div className="bg-[#F5F6FA] min-h-screen p-5 font-Nunito overflow-x-hidden max-w-[1440px]">
        <h1 className="text-[32px] font-bold mb-[30px]">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
          {["Total Blogs", "Total Projects", "Total Product"].map(
            (title, index) => (
              <div key={index} className="bg-white p-6 rounded-md text-center">
                <p className="text-[#202224] font-semibold">{title}</p>
                <h2 className="text-3xl font-bold">
                  {title === "Total Blogs"
                    ? blogs.length
                    : 0 || title === "Total Projects"
                    ? projects.length
                    : 0 || title === "Total Product"
                    ? 0
                    : 0}
                </h2>
              </div>
            )
          )}
        </div>

        {/* Recent Blogs Section */}
        <h2 className="text-[28px] font-bold mb-4">Recent Blogs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

export default Dashboard;
