import React, { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

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
          className="fixed bottom-5 right-10 z-50 bg-gray-300 text-white rounded-full px-4 py-4 shadow-lg hover:bg-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <FaLongArrowAltUp size={24}/>
        </button>
      )}
    </>
  );
};

export default BackToTop;
