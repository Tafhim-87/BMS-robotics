"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Uplabel from "@/assets/svgs/add/uplabel";

// Dynamically import react-quill-new to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateProjectPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCoverImage(file);
      setError("");
    } else {
      setError("Please upload a valid image file.");
      setCoverImage(null);
    }
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    keyboard: {
      bindings: {
        tab: {
          key: 9,
          handler: () => {
            console.log("Tab pressed");
          },
        },
      },
    },
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true,
    },
  };

  const handleUpload = () => {
    if (!title || !location || !description || !coverImage) {
      setError("Please fill out all fields and upload a cover image.");
      return;
    }

    console.log({ title, location, coverImage, description });
    setError("");
    // Add your upload logic here (e.g., API call)
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex justify-center p-4 sm:p-8">
      <div className="max-w-[1090px] w-full text-[#1B2559]">
        <h1 className="text-2xl sm:text-[28px] text-[#1B2559] font-bold mb-4">
          Create New Blog
        </h1>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-6 rounded-lg">
          {/* Left Side: Title and Location */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Project Title */}
            <label htmlFor="projectTitle" className="block mb-2 font-bold">
              Project Title
            </label>
            <input
              id="projectTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title Here"
              className="w-full p-3 border border-[#BBBBBB] text-sm rounded-[10px] mb-4 text-black"
              aria-label="Project Title"
            />

            {/* Project Location */}
            <label htmlFor="projectLocation" className="block mb-2 font-bold">
              Project Location
            </label>
            <input
              id="projectLocation"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location Here"
              className="w-full p-3 border border-[#BBBBBB] text-sm rounded-[10px] mb-4 text-black"
              aria-label="Project Location"
            />
          </div>

          {/* Right Side: Upload Cover Image */}
          <div className="flex-1 w-full lg:w-auto bg-white px-4 sm:px-[30px] py-4 sm:py-[10px] rounded-lg">
            <label
              htmlFor="fileInput"
              className="block mb-4 text-sm font-medium"
            >
              Upload Cover Image
            </label>
            <div className="border-dashed border-2 border-[#2D2D2D] mb-4 p-6 text-center rounded-lg">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
                accept="image/*"
                aria-label="Upload Cover Image"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-gray-700 hover:text-gray-900 flex flex-col items-center justify-center"
              >
                {/* Icon (e.g., from react-icons or custom SVG) */}
                <Uplabel />
              </label>
            </div>
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="w-full mt-6">
          <ReactQuill
            value={description}
            onChange={setDescription}
            modules={modules}
            placeholder="Enter detailed project description"
            className="bg-white text-black mb-4 min-h-[200px] sm:min-h-[300px]"
          />
        </div>

        {/* Upload Button */}
        <div className="w-full flex lg:justify-end md:justify-center">
          <button
            onClick={handleUpload}
            className="bg-[#4880FF] text-lg text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
