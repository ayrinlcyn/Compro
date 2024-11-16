import React from "react";

const ImgModals = ({ images, modalIndex, closeModal, setModalIndex }) => {
  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <button
        className="absolute top-5 right-5 text-black text-2xl"
        onClick={closeModal}
      >
        &times;
      </button>
      <button
        className="absolute left-5 text-black text-2xl"
        onClick={prevImage}
      >
        &#10094;
      </button>
      <img
        src={`http://localhost:8000/storage/${images[modalIndex].url}`}
        alt="Image Modal"
        className="py-10 px-10 m-10 w-full h-[450px] md:h-[850px] object-cover"
      />
      <button
        className="absolute right-5 text-black text-2xl"
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImgModals;
