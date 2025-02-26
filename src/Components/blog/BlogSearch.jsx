import { useState, useEffect } from "react";
import { debounce } from "lodash";
import blogs from "@/Components/blog/data/blogs";
import SearchIcn from "@/assets/svgs/SearchIcn";
import Link from "next/link";

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Extract unique categories
  const categories = [...new Set(blogs.flatMap((blog) => blog.categories))];

  // Debounced search function
  const debouncedSearch = debounce((term, category) => {
    const filtered = blogs.filter(
      (blog) =>
        (blog.title.toLowerCase().includes(term.toLowerCase()) ||
          blog.description.toLowerCase().includes(term.toLowerCase())) &&
        (category ? blog.categories.includes(category) : true)
    );
    setFilteredBlogs(filtered);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full flex flex-col items-center p-4 sm:p-6">
      {/* Search Bar */}
      <div className="w-full max-w-[666px] bg-white p-2 rounded-lg flex items-center border border-gray-300">
        <input
          type="text"
          placeholder="Search Blog Here"
          className="w-full p-2 sm:p-3 rounded-l-lg text-black outline-none text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Search"
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <SearchIcn className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center">
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold bg-white text-blue-600 text-sm sm:text-base border border-gray-300 ${
            selectedCategory === "" ? "bg-[#9abdfd]" : "hover:bg-gray-100"
          } transition-colors`}
        >
          All Categories
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold bg-white text-blue-600 text-sm sm:text-base border border-gray-300 ${
              selectedCategory === category
                ? "bg-[#9abdfd]"
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

      {/* Blog List */}
      {(searchTerm || selectedCategory) && (
        <div className="w-full bg-white rounded-md mt-4 p-5">
          <div className="mt-6 w-full max-w-4xl">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.slice(0, 5).map(
                (
                  blog // Limit to 5 blogs
                ) => (
                  <div
                    key={blog.id}
                    className="p-4 bg-slate-100 rounded-lg shadow mb-4"
                  >
                    <Link
                      href={`/blog/${blog.id}`}
                      passHref
                      className="text-lg font-bold text-blue-600"
                    >
                      {blog.title}
                    </Link>
                  </div>
                )
              )
            ) : (
              <p className="text-gray-500 text-center mt-6">
                No blogs found. Try a different search term or category.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
