import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-[70px] relative z-10">
      {/* Menu Links */}
      <div className="flex space-x-6 z-20">
        <Link to="/work" className="hidden md:block text-base text-gray-900">WORK</Link>
        <Link to="/about" className="hidden md:block text-base text-gray-900">ABOUT</Link>
      </div>

      {/* Logo - Mobile */}
      <div className="md:hidden absolute inset-x-0 flex justify-center z-0">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <img src='/Logo.png' alt='Logo' className='h-16 md:h-24'/>
        </Link>
      </div>

      {/* Logo - Desktop */}
      <div className="hidden md:flex absolute inset-x-0 justify-center z-0">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <img src='/Logo.png' alt='Logo' className='h-16 md:h-24'/>
        </Link>
      </div>

      {/* Toggle Button for Sidebar - Mobile Only */}
      {!isOpen&& (
      <button onClick={toggleSidebar} className="md:hidden text-gray-900 focus:outline-none z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-white flex items-center justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-10`}>
        <button onClick={toggleSidebar} className="absolute top-6 right-6 text-gray-900 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center space-y-6">
          <Link to="/work" className="text-xl text-gray-900" onClick={toggleSidebar}>WORK</Link>
          <Link to="/about" className="text-xl text-gray-900" onClick={toggleSidebar}>ABOUT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
