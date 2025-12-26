
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                NovaDomain
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex space-x-8">
              <Link to="/" className={`${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-600 font-medium`}>Domains</Link>
              <Link to="/hosting" className="text-gray-500 hover:text-indigo-600 font-medium">Hosting</Link>
              <Link to="/security" className="text-gray-500 hover:text-indigo-600 font-medium">Security</Link>
              <Link to="/email" className="text-gray-500 hover:text-indigo-600 font-medium">Email</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</Link>
            <Link to="/cart" className="relative p-2 text-gray-400 hover:text-gray-500">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold text-center leading-4">0</span>
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
