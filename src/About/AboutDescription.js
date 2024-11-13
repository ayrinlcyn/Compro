import React from 'react';

const AboutDescription = () => {
    const description = [
        "MICHAEL MATEYKO is a freelance graphic designer and illustrator living in beautiful Vancouver, BC.", 
        "Aside from his job drawing cartoons and staying up past his bedtime, he is also a regular contributor to a number of surprisingly respectable pop-culture gallery spaces across North America.",
        "Feel free to contact him if you have a picture that needs to be drawn, a brand that needs to be built, or a burning question about Street Fighter(s) 2 through 5, inclusive."
    ];

  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">ABOUT</h1>
      <div className="justify-item-center space-y-4 max-w-lg mx-auto mt-10">
      {description.map((description, index) => (
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500">{description}</p>
      ))}
        </div>
    </div>  
      );
    };
export default AboutDescription;