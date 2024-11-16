import React from 'react';
import { Link } from 'react-router-dom';

const OtherImage = ({ image }) => {
  return (
    <Link
      to={`/image/${image.contentId}`}
      className="group relative overflow-hidden m-0 w-full h-full"
    >
      {/* Gambar */}
      <img
        src={'http://localhost:8000' + image.src}
        alt={image.title}
        className="w-full h-[450px] md:h-[750px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
      />
      {/* Title yang muncul saat hover */}
      <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-black text-lg font-semibold px-2 text-center">
          {image.title}
        </span>
      </div>
    </Link>
  );
};

export default OtherImage;
