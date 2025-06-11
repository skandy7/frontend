import { IoCarSportOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";
import { GiCartwheel } from "react-icons/gi";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Bookings", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

export const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center px-8 py-4 rounded-b-lg shadow-md">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-3xl font-extrabold">
            <IoCarSportOutline className="text-4xl inline-block text-blue-500" />
          </Link>
          {/* Get Consultation button linked to email */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <a
              
              className="bg-indigo-600 py-2 px-6 rounded-md text-white font-semibold hover:bg-indigo-700 transition-all duration-300"
            ><Link to = "/register">REGISTER</Link>
              
            </a>
          </div>
        </div>

        {/* Title in the center */}
        <div className="flex-1 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
            7 CRORE CAR CONSULTANCY
          </h1>
        </div>

        {/* Right side */}
        <div className="relative flex items-center gap-8"> {/* Increased gap between icons */}
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className={`w-12 h-12 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}
                  />
                </button>
                {/* Show dropdown */}
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                          <Link to={item.href} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/Signin">
                <FaUser className="text-3xl text-gray-800" />
              </Link>
            )}
          </div>

          <Link
            to="/cart"
            className="bg-indigo-600 p-2 sm:px-6 px-2 flex items-center rounded-md text-white hover:bg-indigo-700 transition-all duration-300"
          >
            <GiCartwheel className="text-white" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
