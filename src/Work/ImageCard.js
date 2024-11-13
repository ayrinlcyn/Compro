import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ image }) => {
  return (
    <Link to={`/image/${image.id}`} className="overflow-hidden m-0 w-full h-full">
      <img src={image.src} alt={image.title} className="w-full h-[450px] md:h-[750px] object-cover cursor-pointer hover:opacity-80" />
    </Link>
  );
};

export default ImageCard;

