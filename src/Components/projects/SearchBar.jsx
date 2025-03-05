import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import cardData from "@/Components/projects/data/cardData";

// Reusable Card Component
const Card = ({ data }) => {
  return (
    <Link href={`/projects/${data.id}`} passHref>
      <motion.div
        className="bg-[#ffffff]/5 shadow-lg p-4 w-full max-w-[645px] mx-auto mb-4 rounded-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="mt-4 text-gray-700 w-full">
          <h3 className="font-bold text-[#252529] text-lg sm:text-xl">
            {data.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const countries = ["Canada", "USA", "Japan", "Germany"];
  const years = ["2023", "2024", "2025"];

  // Filter the cardData based on search query, country, and year
  const filteredData = cardData.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry
      ? card.location.includes(selectedCountry)
      : true;
    const matchesYear = selectedYear ? card.date.includes(selectedYear) : true;

    return matchesSearch && matchesCountry && matchesYear;
  });

  // Limit the number of cards to 5
  const displayedCards = filteredData.slice(0, 5);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        {/* Search Bar */}
        <div
          ref={dropdownRef}
          className="flex flex-col sm:flex-row container bg-white border border-solid rounded-2xl shadow-md p-4 gap-4 mb-8"
          onClick={() => setIsDropdownVisible(true)}
        >
          {/* Search Input */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-sm mb-2">Search</label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 bg-[#F8F8F8] rounded-lg focus:outline-none"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setHasInteracted(true);
                }}
                onFocus={() => {
                  setHasInteracted(true);
                  setIsDropdownVisible(true);
                }}
              />
              <svg
                className="absolute right-3 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-sm mb-2">Country</label>
            <select
              className="w-full p-2 bg-[#F8F8F8] rounded-lg"
              onChange={(e) => setSelectedCountry(e.target.value)}
              onFocus={() => setIsDropdownVisible(true)}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Year Dropdown */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-sm mb-2">Year</label>
            <select
              className="w-full p-2 bg-[#f8f8f8] rounded-lg"
              onChange={(e) => setSelectedYear(e.target.value)}
              onFocus={() => setIsDropdownVisible(true)}
            >
              <option value="">Select Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Animated Dropdown Section */}
        <AnimatePresence>
          {isDropdownVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full items-center justify-center container px-4 sm:px-8 md:px-10"
            >
              {displayedCards.map((card) => (
                <Card key={card.id} data={card} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
