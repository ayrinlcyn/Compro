import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OtherImage = ({ relatedImages }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!relatedImages || relatedImages.length === 0) {
    return <p>No related images available</p>;
  }

  return (
    <div className="relative h-full px-10 mx-auto md:max-w-[90%]">
      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#818181] transition duration-300"
      >
        <FiChevronLeft size={32} color="white"/>
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#818181] transition duration-300"
      >
        <FiChevronRight size={32} color="white"/>
      </button>

      {/* Swiper */}
      <Swiper
        spaceBetween={10} // Mengurangi jarak antar gambar
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;  
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 5 }, // Jarak lebih kecil untuk layar besar
          600: { slidesPerView: 2, spaceBetween: 15 }, // Dua gambar untuk layar sedang
          480: { slidesPerView: 1, spaceBetween: 10 }, // Satu gambar untuk layar kecil
        }}
        modules={[Navigation, Pagination]}
        className="related-images w-full h-full"
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
                className="py-10 w-full h-[450px] md:h-[550px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
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
    </div>
  );
};

export default OtherImage;
