import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OtherImage = ({ relatedImages }) => {
  if (!relatedImages || relatedImages.length === 0) {
    return <p>No related images available</p>;
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        1024: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
      }}
      modules={[Navigation, Pagination]}
      className="related-images w-full h-full px-10"
    >
      {relatedImages.map((image) => (
        <SwiperSlide key={image.id}>
          <Link
            to={`/image/${image.contentId}`}
            className="group relative overflow-hidden m-0 w-full h-full"
          >
            <img
              src={"http://localhost:8000" + image.src}
              alt={image.title}
              className="p-10 w-full h-[450px] md:h-[750px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-black text-lg font-semibold px-2 text-center">
                {image.title}
              </span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OtherImage;
