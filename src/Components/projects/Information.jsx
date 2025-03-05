import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import cardData from "@/Components/projects/data/cardData";
import Link from "next/link";

// Utility function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Card = ({ data }) => {
  return (
    <Link href={`/projects/${data.id}`} passHref>
      <motion.div
        className="bg-[#ffffff]/5 shadow-lg p-5 max-w-[645px] w-full"
        whileHover={{ scale: 1.02 }}
      >
        {/* Main Image */}
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <Image
            src={data.mainImage}
            alt="Main"
            width={556}
            height={315}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-[25px] mt-3 w-full overflow-hidden">
          {data.thumbnails.map((thumb, index) => (
            <Image
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              width={120}
              height={72}
              className="h-[72px] w-[120px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-4 text-gray-700 w-full">
          <div className="flex justify-between text-sm text-gray-500">
            <p className="flex items-center gap-1">{data.location}</p>
            <p className="flex items-center gap-1">{data.date}</p>
          </div>

          <h3 className="md:text-2xl text-xl font-bold mt-2 text-[#252529]">
            {data.title}
          </h3>
          <p className="text-[#38373E] md:text-base text-sm">
            {truncateText(data.description, 200)}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const Information = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const paginatedData = cardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center max-w-[1440px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 container px-4 sm:px-8 md:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {paginatedData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <motion.div
        className="flex justify-center items-center gap-2 mt-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          className="py-[5px] px-[10px] border border-gray-300 border-solid rounded-xl"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {"<"}
        </motion.button>

        {/* Progress Bar */}
        <motion.div
          className="w-[146px] h-4 bg-gray-300 rounded-full relative"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key={currentPage} // Add key to trigger animation on page change
            className="h-full bg-[#0B61EA] rounded-full absolute top-0 left-0"
            style={{
              width: `${(currentPage / totalPages) * 100}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <motion.button
          className="py-[5px] px-[10px] border border-gray-300 border-solid rounded-xl"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {">"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Information;
