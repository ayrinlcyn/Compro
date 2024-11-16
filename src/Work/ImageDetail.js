import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "./ImageTitle";
import ImageDesc from "./ImageDesc";
import ImgDetail from "./ImgDetail";
import ImageCard from "./ImageCard";
import OtherImage from "./OtherImage";
const ImageDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedContent, setRelatedContent] = useState([])

  useEffect(() => {
    // Fetch content details based on the id (contentId in the URL)
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/show/${id}`);
        
        if (response.data.status) {
          setContent(response.data.data); // Set content details if the response is successful
        }

        // Fetch related content from /get-content
        const relatedResponse = await axios.get('http://localhost:8000/api/get-content');
        if (relatedResponse.data.status) {
          setRelatedContent(relatedResponse.data.data); // Set related content details
        }
      } catch (error) {
        console.error("Error fetching content details:", error);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchContent();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!content) {
    return <p>Content not found</p>;
  }

  const { title, description, images } = content;

  return (
    <div>
        <Title title={title} />
        <ImageDesc description={description} />
        <ImgDetail images={images} title={title} />

        <h1 className="text-lg font-bold p-10">YOU MAY ALSO LIKE</h1>
      <div className="related-images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 sm:px-10 p-10 justify-items-center w-full h-full">
        {relatedContent
          .filter(item => item.images.length > 0) // Only display items with images
          .map((relatedItem) => {
            const firstImage = relatedItem.images[0]; // Get the first image of each related content
            return (
              <OtherImage
                key={relatedItem.id}
                image={{
                  id: firstImage.id,
                  src: firstImage.url, // Full URL for the image
                  title: relatedItem.title || 'Untitled',
                  description: relatedItem.description || '',
                  contentId: relatedItem.id
                }}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default ImageDetail;
