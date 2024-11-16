import React from "react";

const ImageDesc = ({ description }) => {
    return (
    <div className="display-flex justify-items-center text-center">
        <p className="text-base sm:text-lg ms-text-xl max-w-lg mx-auto m-10">{description}</p>
    </div>
      
    );
  };
  
  export default ImageDesc;