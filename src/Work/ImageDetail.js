import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "./ImageTitle";
import ImageDesc from "./ImageDesc";
import ImgDetail from "./ImgDetail";
import OtherImage from "./OtherImage";
import BackToTop from "../widgets/BackToTop";
import Loading from "../widgets/Loading"
const ImageDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedContent, setRelatedContent] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/show/${id}`);
        if (response.data.status) {
          setContent(response.data.data);
        }

        const relatedResponse = await axios.get("http://localhost:8000/api/get-content");
        if (relatedResponse.data.status) {
          setRelatedContent(relatedResponse.data.data);
        }
      } catch (error) {
        console.error("Error fetching content details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  if (loading) return <Loading />;

  if (!content) {
    return <p>Content not found</p>;
  }

  const { title, description, images } = content;


  const relatedImages = relatedContent
    .filter((item) => item.images.length > 0 && item.id !== parseInt(id)) 
    .map((relatedItem) => {
      const firstImage = relatedItem.images[0];
      return {
        id: firstImage.id,
        src: firstImage.url,
        title: relatedItem.title || "Untitled",
        contentId: relatedItem.id,
      };
    });

  return (
    <div>
      <Title title={title} />
      <ImageDesc description={description} />
      <ImgDetail images={images} title={title} />

      <h1 className="text-lg font-bold p-10 mx-auto md:max-w-[90%]">YOU MAY ALSO LIKE</h1>
      <OtherImage relatedImages={relatedImages} />
      <BackToTop />
    </div>
  );
};

export default ImageDetail;
