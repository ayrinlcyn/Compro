import React from 'react';

const Client = () => {
  const clients = [
    "Facebook", "The New Yorker", "LEGO", "Airbnb",
    "Popular Mechanics", "The Believer", "Fangamer", "Sanshee",
    "Art of Play", "Ghostly International", "Fast Company", "etc."
  ];

  return (

      <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10 max-w-lg mx-auto">
        <div className="text-center space-y-2 pr-4 sm:pr-4 md:pr-0">
          <p className="font-bold text-sm sm:text-base md:text-lg">CLIENTS</p>
          {clients.map((client, index) => (
            <p key={index} className="text-sm sm:text-base md:text-lg font-medium text-gray-500">{client}</p>
          ))}
        </div>
      </div>
      );
    };

export default Client;
