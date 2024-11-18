import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ImgModals = ({ images, modalIndex, closeModal, setModalIndex }) => {
  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      {/* Close button */}
      <button
        className="absolute top-10 right-5 z-40"
        onClick={closeModal}
      >
        <IoClose size={28} />
      </button>

      {/* Previous area */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
        onClick={prevImage}
      >
        <button
          className="hidden md:block absolute top-1/2 left-5 bg-[#e8e8e8] rounded-full p-3 hover:bg-[#818181] transition duration-300 focus:outline-none"
        >
          <FiChevronLeft size={32} color="white" />
        </button>
      </div>

      {/* Image */}
      <img
        src={`http://localhost:8000/storage/${images[modalIndex].url}`}
        alt="Image Modal"
        className="py-10 px-10 m-10 w-[90%] md:w-[70%] h-[450px] md:h-[850px] object-cover"
      />

      {/* Next area */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
        onClick={nextImage}
      >
        <button
          className="hidden md:block absolute top-1/2 right-5 bg-[#e8e8e8] rounded-full p-3 hover:bg-[#818181] transition duration-300 focus:outline-none"
        >
          <FiChevronRight size={32} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ImgModals;
