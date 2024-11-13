import React from 'react';
import ImageCard from './ImageCard';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const images = [
  { id: 1, src: image1, title: 'image 1' },
  { id: 2, src: image2, title: 'image 2' },
  { id: 3, src: image3, title: 'image 3' },
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 mt-10 sm:px-10 p-10 justify-items-center">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
