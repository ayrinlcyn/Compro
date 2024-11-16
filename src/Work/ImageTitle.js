import React from "react";

const Title = ({ title }) => {
    return (
        <div className="display-flex justify-items-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
        </div>
      
    );
  };
  
export default Title;
  