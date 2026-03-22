import React from "react";
import { useState } from "react";
const Card = ({ image, category, title, description, onView, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <div
        className="relative
      
      w-70 h-105 rounded-2xl bg-[#FFB2B2] flex flex-col items-start justify-start mt-8"
      >
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 cursor-pointer text-2xl"
        >
          {isFavorite ? (
            <i className="fa-solid fa-heart text-red-500 z-10"></i>
          ) : (
            <i className="fa-regular fa-heart text-blue-300 z-10"></i>
          )}
        </div>
        <img
          className="w-70 h-70 rounded-t-2xl object-cover "
          src={image}
          alt={title}
        />
        <p className="ml-3.5 mt-1 text-black">{category}</p>

        <h3 className="title align-start font-bold text-[#d30606] ml-3.5 ">
          {title}
        </h3>
        <p className="ml-3.5 text-black">{description}</p>
        <nav className="flex items-center justify-between w-full mt-2 mb-3.5 px-5">
          <button
            onClick={onView}
            className=" bg-[#d30606] text-white px-5 py-1 rounded-md hover:bg-[#a00404] transition duration-300"
          >
            View Collection
          </button>
          <h2 className="text-3xl font-bold text-[#d30606]">{price}$</h2>
        </nav>
      </div>
    </>
  );
};

export default Card;
