import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="flex space-x-4 justify-center m-10">
      <a
        href="https://www.instagram.com/piecesof.cya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 transition duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/6285964428558"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default SocialMedia;
