import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="text-3xl font-extrabold text-blue-600 tracking-wide"
          >
            MyShop
          </Link>

          <button
            className="md:hidden text-3xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="w-full md:flex-grow md:mx-8">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-5 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-blue-600 transition text-lg">Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition text-lg">Products</Link>

          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-600 transition text-lg">
              <FaUserCircle className="text-2xl" />
              <span>Account</span>
            </button>

            <div className="absolute top-full right-0 mt-3 w-52 bg-white border rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
              <Link to="/login" className="block px-5 py-3 hover:bg-gray-100">Login</Link>
              <Link to="/register" className="block px-5 py-3 hover:bg-gray-100">Register</Link>
              <Link to="/profile" className="block px-5 py-3 hover:bg-gray-100">My Profile</Link>
            </div>
          </div>

          <Link
            to="/cart"
            className="relative flex items-center hover:text-blue-600 transition"
          >
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full shadow">
              2
            </span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-5 py-3 space-y-4 text-lg">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/products" className="block hover:text-blue-600">Products</Link>
          <Link to="/login" className="block hover:text-blue-600">Login</Link>
          <Link to="/register" className="block hover:text-blue-600">Register</Link>
          <Link to="/cart" className="block hover:text-blue-600">Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
