import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ImageDetail = () => {
  const { id } = useParams(); // Get the content id from the URL parameter
  const [content, setContent] = useState(null); // State to store the fetched content
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch content details based on the id (contentId in the URL)
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/show/${id}`);
        
        if (response.data.status) {
          setContent(response.data.data); // Set content details if the response is successful
        }
      } catch (error) {
        console.error("Error fetching content details:", error);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchContent();
  }, [id]); // Re-run effect if the id (contentId) changes

  if (loading) return <p>Loading...</p>;

  if (!content) {
    return <p>Content not found</p>;
  }

  // Destructure to make it more readable
  const { title, description, images } = content;

  return (
    <div>
      <div className="display-flex justify-items-center text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
        <div>
          <p className="text-base sm:text-lg ms-text-xl max-w-lg mx-auto m-10">{description}</p>
        </div>
        <div className="overflow-hidden w-full h-full">
          {images.length > 0 && (
            <img
              src={`http://localhost:8000/storage/${images[0].url}`} // Display the first image as main content image
              alt={title}
              className="p-10 w-full h-[450px] md:h-[850px] object-cover cursor-pointer"
            />
          )}
        </div>
      </div>

      <h1 className="text-lg font-bold p-10">YOU MAY ALSO LIKE</h1>
      <div className="related-images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 sm:px-10 p-10 justify-items-center w-full h-full">
        {images.slice(1).map((relatedImg) => ( // Show remaining images as related images
          <img
            key={relatedImg.id}
            src={`http://localhost:8000/storage/${relatedImg.url}`}
            alt={title}
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDetail;
