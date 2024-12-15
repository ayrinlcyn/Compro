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
          // Include all contents, provide default values for missing images
          const imageList = response.data.data.map((content) => {
            const firstImage = content.images.length > 0 ? content.images[0] : null; // Check if there is any image
            return {
              id: firstImage ? firstImage.id : `content-${content.id}`, // Unique fallback ID
              src: firstImage ? firstImage.url : null, // Use null if no image
              title: content.title || 'Untitled',
              description: content.description || '',
              contentId: content.id,
            };
          });
          console.log("Fetched images:", imageList); // Debugging
          setImages(imageList);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 mt-10 sm:px-10 p-10 justify-items-center mx-auto md:max-w-[90%]">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
