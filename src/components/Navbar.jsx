import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiPlus, FiChevronDown, FiMoreHorizontal } from 'react-icons/fi'; // Icons from react-icons

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Left section: Logo, Menu, Search */}
      <div className="flex items-center gap-6">
        <div className="logo">
          <img 
            className="h-12 w-12 object-contain" 
            src="https://media.licdn.com/dms/image/v2/C4D0BAQFGZQ7mb6pMYA/company-logo_200_200/company-logo_200_200/0/1630562065204/makerble_logo?e=1737590400&v=beta&t=mjylZT0aHc_tI0fXfDpR9SAt-Btli9ckWlwJ-OWWQdo" 
            alt="Logo" 
          />
        </div>
        <div className="menuname flex gap-6 items-center">
          {/* Dropdown Button */}
          <div className="dropdown relative">
            <button 
              onClick={toggleDropdown} 
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              My App <FiChevronDown className="ml-1" />
            </button>
            {/* Dropdown Content */}
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg p-2 mt-1 rounded-md z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                </ul>
              </div>
            )}
          </div>
          <ul className="flex gap-4 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">Explore</li>
          </ul>
        </div>
        <div className="search relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right section: Notification, Message, Profile, Create, More */}
      <div className="flex items-center gap-6">
        <div className="notificationlogo cursor-pointer">
          <FiBell size={24} />
        </div>
        <div className="msglogo cursor-pointer">
          <FiMessageSquare size={24} />
        </div>
        <div className="profile flex items-center gap-2 cursor-pointer">
          <div className="profilelogo bg-gray-300 h-8 w-8 rounded-full"></div>
          <div className="name text-gray-700">
            <p>John Doe</p>
          </div>
        </div>
        <div className="createbtn">
          <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            <FiPlus size={20} /> Create
          </button>
        </div>
        <div className="morebtn">
          <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center">
            <FiMoreHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;