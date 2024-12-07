

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';  

const ProductCard = ({ product, imageUrl, title, description, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);


  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };


  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} ${title}`);
  };

  return (
    <div className="max-w-xs w-full bg-white rounded-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-lg">
   
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center group-hover:opacity-80 transition duration-300 ease-in-out"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300 ease-in-out"></div>
      </div>

    
      <div className="p-4">
   
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

   
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>

        <p className="mt-4 text-xl font-bold text-gray-900">₹{price}</p>

 
        <div className="flex items-center mt-4 gap-3">
          <button
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg text-gray-600"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="text-xl font-semibold text-gray-800">{quantity}</span>
          <button
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg text-gray-600"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>


        <button
          onClick={() => addToCart(product, quantity)} 
          className="mt-4 w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center gap-2"
        >
          <FaShoppingCart /> 
          Add to Cart
        </button>


        <button
          onClick={handleBuyNow} 
          className="mt-2 w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
