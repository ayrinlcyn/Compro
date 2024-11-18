import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutDescription = ({ setLoading }) => {
  const [description, setDescription] = useState([]); 

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        setLoading(true); 
        const response = await axios.get('http://localhost:8000/api/get-about');
        if (response.data.status) {
          setDescription(response.data.data.description.split('\n')); 
        }
      } catch (error) {
        console.error('Error fetching about description:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDescription();
  }, [setLoading]);

  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">ABOUT</h1>
      <div className="justify-item-center space-y-4 max-w-lg mx-auto mt-10">
        {description.map((desc, index) => (
          <p key={index} className="text-base sm:text-lg md:text-xl font-medium text-gray-500">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutDescription;
