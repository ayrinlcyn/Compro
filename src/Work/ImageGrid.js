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
          // Flatten the images array, but only include the first image for each content item
          const imageList = response.data.data.reduce((acc, content) => {
            if (content.images.length > 0) {
              const firstImage = content.images[0]; // Get the first image of each content
              acc.push({
                id: firstImage.id,
                src: firstImage.url, // Assuming img.url is the full URL now
                title: content.title || 'Untitled',
                description: content.description || '',
                contentId: content.id
              });
            }
            return acc;
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
