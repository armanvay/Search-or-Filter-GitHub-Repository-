import Image from 'next/image';
import React from 'react';

const FoodCard = ({ item }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <Image
      loading='eager'
        src={item.image_link}
        alt={item.dish_name}
        width={100}
        height={100}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">{item.dish_name}</h2>

        <p className="text-sm text-gray-500">{item.cuisine}</p>

        {/* Price + Rating */}
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-semibold">৳ {item.price}</span>
          <span className="text-yellow-500">⭐ {item.rating}</span>
        </div>

        {/* Button */}
        <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;