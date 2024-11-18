import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ image }) => {
  return image.src ? (
    <Link to={`/image/${image.contentId}`} className="overflow-hidden m-0 w-full h-full">
      <img 
        src={`http://localhost:8000${image.src}`} 
        alt="" 
        className="w-full h-[450px] md:h-[750px] object-cover cursor-pointer hover:opacity-80" 
      />
    </Link>
  ) : (
    <div className="overflow-hidden m-0 w-full h-full">
      <div className="w-full h-[450px] md:h-[750px] bg-white"></div>
    </div>
  );
};

export default ImageCard;
