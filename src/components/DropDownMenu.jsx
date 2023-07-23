import React, { useState } from 'react';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown} 
        className="text-[#4d4d4d] bg-[#ffffff] border border-[#8a8a8a] hover:bg-[#6A2AF7] focus:ring-4 focus:outline-none focus:ring-[#6A2AF7] font-medium rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-[#ffffff] dark:hover:bg-[#6A2AF7] dark:focus:ring-[#FFF7F5-800"
        type="button"
      >
        Kayak Area
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? 'block' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Algiers
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Tipaza
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Boumerdas
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Oran
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
