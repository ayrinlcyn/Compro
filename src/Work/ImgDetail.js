import React, { useState } from "react";
import ImgModals from "./ImgModals";

const ImgDetail = ({ images, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="display-flex justify-items-center text-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:8000/storage/${image.url}`}
            alt={title}
            className="py-2 px-10 w-full h-[450px] md:h-[850px] object-cover cursor-pointer"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <ImgModals
          images={images}
          modalIndex={modalIndex}
          closeModal={closeModal}
          setModalIndex={setModalIndex}
        />
      )}
    </div>
  );
};

export default ImgDetail;
