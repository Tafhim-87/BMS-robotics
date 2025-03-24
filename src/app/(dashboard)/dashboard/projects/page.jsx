"use client";

import React, { useState } from "react";
import data from "@/Components/projects/data/cardData";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

const Page = () => {
  const [projects, setProjects] = useState(data); // Manage data in state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentItems = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Function to handle deletion
  const handleDelete = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen p-0 font-Nunito overflow-x-hidden">
      <div className="p-6">
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-[28px] font-bold">Projects</h2>
          <Link
            href="/dashboard/add-project"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </Link>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[#68709C] text-sm text-left">
              <th className="p-2">Project Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.map((project, index) => (
              <tr key={index} className="text-[#333951] hover:bg-gray-100">
                <td className="p-2 font-medium">
                  <Link href={`/projects/${project.id}`} className="block">
                    {project.title}
                  </Link>
                </td>
                <td className="p-2">{project.location}</td>
                <td className="p-2">{project.date}</td>
                <td className="p-2 flex gap-2">
                  <button className="bg-blue-200 p-2 rounded">✏️</button>
                  <button
                    onClick={() => handleDelete(project.id)} // Call handleDelete on click
                    className="bg-red-200 p-2 rounded"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 border border-[#2B3674]/20 border-solid rounded-md disabled:opacity-50"
            >
              {"<"} Previous
            </button>
            <div className="rounded-lg overflow-hidden flex">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-transparent border border-[#2B3674]/20 border-solid"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 border-[#2B3674]/20 border-solid border rounded-md disabled:opacity-50"
            >
              Next {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
