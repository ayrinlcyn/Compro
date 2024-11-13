import React from "react";
import { useParams } from "react-router-dom";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const images = [
  { id: 1, src: image1, title: 'image 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, src: image2, title: 'image 2', description: 'Description for image 2' },
  { id: 3, src: image3, title: 'image 3', description: 'Description for image 3' },
];

const ImageDetail = () => {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div>
        <div className="display-flex justify-items-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{image.title}</h1>
            <div>
                <p className="text-base sm:text-lg ms-text-xl max-w-lg mx-auto m-10">{image.description}</p>
            </div>
            <div className="overflow-hidden w-full h-full">
                <img src={image.src} alt={image.title} className="p-10 w-full h-[450px] md:h-[850px] object-cover cursor-pointer " />
            </div>
            
        </div>
      
      

      <h1 className="text-lg font-bold p-10">YOU MAY ALSO LIKE</h1>
      <div className="related-images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 sm:px-10 p-10 justify-items-center w-full h-full">
        {images
          .filter((img) => img.id !== image.id)
          .slice(0, 5)
          .map((relatedImg) => (
            <img key={relatedImg.id} src={relatedImg.src} alt={relatedImg.title} className="w-full w-full h-[350px] md:h-[500px] object-cover" />
          ))}
      </div>
    </div>
  );
}; 

export default ImageDetail;
