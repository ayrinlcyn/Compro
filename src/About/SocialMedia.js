import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import Loading from '../widgets/Loading';

function SocialMedia() {
  const [socialLinks, setSocialLinks] = useState({ instagram: '', whatsapp: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get-about');
        if (response.data.data.length > 0) {
          const aboutData = response.data.data[0];
          setSocialLinks({
            instagram: aboutData.instagram || '',
            whatsapp: aboutData.whatsapp || '',
          });
        }
      } catch (error) {
        console.error('Error fetching social media links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex space-x-4 justify-center m-10">
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
      )}
      {socialLinks.whatsapp && (
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      )}
    </div>
  );
}

export default SocialMedia;