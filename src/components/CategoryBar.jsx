import React from "react";
import {
  FaMobileAlt,
  FaTshirt,
  FaTv,
  FaGift,
  FaCouch,
  FaLaptop,
  FaShoppingBasket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { name: "Fashion", icon: <FaTshirt />, path: "/fashion" },
  { name: "Mobile & Tablets", icon: <FaMobileAlt />, path: "/mobile" },
  { name: "Electronics", icon: <FaLaptop />, path: "/electronics" },
  { name: "Furniture", icon: <FaCouch />, path: "/furniture" },
  { name: "TVs", icon: <FaTv />, path: "/tvs" },
  { name: "Gifts", icon: <FaGift />, path: "/gifts" },
  { name: "Grocery", icon: <FaShoppingBasket />, path: "/grocery" },
  { name: "More", icon: <FaTv />, path: "/more" },
];

const CategoryBar = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Horizontal scroll on small devices */}
      <div className="overflow-x-auto scrollbar-hide mt-4 sm:mt-0">
        {/* Fixed 8 columns */}
        <div className="grid grid-cols-8 gap-6 min-w-[900px] bg-amber-200 p-6 rounded-lg shadow">
          {categories.map((cat, index) => (
            <Link
              to={cat.path}
              key={index}
              className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <span className="text-xl sm:text-2xl">{cat.icon}</span>
              <h2 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                {cat.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
