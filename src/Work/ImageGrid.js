import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get-content');
        if (response.data.status) {
          // Flatten the images array across all content items
          const imageList = response.data.data.reduce((acc, content) => {
            const images = content.images.map((img) => ({
              id: img.id,
              src: img.url, // Assuming img.url is the full URL now
              title: content.title || 'Untitled',
              description: content.description || '',
              contentId: content.id
            }));
            return acc.concat(images); // Accumulate all images into a single array
          }, []);
          console.log("Fetched images:", imageList); // Check here
          setImages(imageList);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 mt-10 sm:px-10 p-10 justify-items-center">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
