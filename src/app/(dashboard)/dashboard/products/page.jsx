"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaTrash, FaEdit } from "react-icons/fa";
import ProductData from "@/Components/home/productData";
import Image from "next/image";
import Uplabel from "@/assets/svgs/add/Uplabel";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsPerPage = 6;

  // Filter products based on search term
  const filteredProducts = ProductData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex justify-center p-4 md:p-6 font-Nunito overflow-x-hidden">
      <div className="w-full max-w-[1440px]">
        {/* Search and Create Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h1 className="text-2xl md:text-[28px] font-bold">Products</h1>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#939393] border-solid px-4 text-lg py-2 rounded-xl bg-transparent focus:outline-none w-full md:w-[300px]"
              />
            </div>
            <button
              className="bg-[#4880FF] text-lg text-white px-6 py-2 rounded-xl"
              onClick={() => setIsModalOpen(true)}
            >
              Create
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-5">
          {currentProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="bg-white p-4 rounded-lg relative flex flex-col gap-1"
            >
              <Image
                src={product.image}
                alt="Product"
                width="auto"
                height="auto"
                className="rounded-lg"
              />
              <h4 className="text-sm text-[#635C5C]">{product.date}</h4>
              <h4 className="text-sm"> AI Powered Robotic</h4>
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-[#546881] mt-2">{product.description}</p>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="text-red-500">
                  <FaTrash />
                </button>
                <button className="text-blue-500">
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Product Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-3xl w-full max-w-lg mx-4 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#1B2559]">
                  Create Product
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-2xl text-[#969BB3] hover:text-gray-900 transition-colors duration-200"
                >
                  &times;
                </button>
              </div>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  className="border border-[#252F67] p-3 w-full rounded-2xl focus:outline-none transition-all duration-200"
                  placeholder="Enter product name"
                />
              </div>

              {/* Product Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1B2559] mb-1">
                  Product Category
                </label>
                <input
                  className="border border-[#252F67] p-3 w-full rounded-2xl focus:outline-none transition-all duration-200"
                  placeholder="Enter product category"
                />
              </div>

              {/* Product Sub-title */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1B2559] mb-1">
                  Product Sub-title
                </label>
                <input
                  className="border border-[#252F67] p-3 w-full rounded-2xl focus:outline-none transition-all duration-200"
                  placeholder="Enter product sub-title"
                />
              </div>

              {/* Upload Image Section */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1B2559] mb-1">
                  Upload Product Image
                </label>
                <div
                  className="border-2 border-dashed border-[#252F67] p-6 w-full text-center rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition-all duration-200"
                  onClick={() => document.getElementById("fileInput").click()} // Trigger file input
                >
                  <span className="text-gray-600 flex items-center justify-center">
                    <Uplabel />
                  </span>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden" // Hide the default file input
                    accept="image/*" // Accept only image files
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log("Selected file:", file.name);
                        // Handle file upload logic here
                      }
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end w-full gap-3 mt-6">
                <button className="px-5 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200">
                  Create Product
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 border w-full border-[#252F67] rounded-lg text-[#1B2559] hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
