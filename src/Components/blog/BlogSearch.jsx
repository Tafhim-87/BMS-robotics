import React, { useState } from "react";
import blogs from "@/Components/blog/data/blogs";
import SearchIcn from "@/assets/svgs/SearchIcn";

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique categories from blogs
  const categories = [...new Set(blogs.flatMap((blog) => blog.categories))];

  // Filtered blogs based on search term and category
  const filteredBlogs = blogs.filter(
    (blog) =>
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory ? blog.categories.includes(selectedCategory) : true)
  );

  return (
    <div className="w-full flex flex-col items-center bg-[#0B61EA] text-[#FFFFFF] p-4 sm:p-6">
      {/* Search Bar */}
      <div className="w-full max-w-[666px] bg-white p-2 rounded-lg flex items-center">
        <input
          type="text"
          placeholder="Search Blog Here"
          className="w-full p-2 sm:p-3 rounded-l-lg text-black outline-none text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2 bg-[#0B61EA] text-white rounded-lg hover:bg-[#054bb7] transition-colors">
          <SearchIcn className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold bg-white text-[#0B61EA] text-sm sm:text-base ${
              selectedCategory === category
                ? "bg-gray-300 text-[#0B61EA]"
                : "hover:bg-gray-100"
            } transition-colors`}
            onClick={() =>
              setSelectedCategory(selectedCategory === category ? "" : category)
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSearch;
