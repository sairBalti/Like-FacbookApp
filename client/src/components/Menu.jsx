import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-[rgb(170,204,242)] p-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <Link to="/home" className="text-white text-lg font-semibold">Home</Link>

        {/* Navigation links */}
        <div className="space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/registration" className="text-white">Registration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;