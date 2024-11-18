import React, { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 z-50 bg-[#e8e8e8] rounded-full p-3 hover:bg-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 group"
        >
          <IoIosArrowRoundUp
            size={38}
            className="text-[#818181] group-hover:text-white transition duration-300 "
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
