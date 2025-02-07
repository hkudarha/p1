import React from "react";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="border p-2 rounded-lg shadow-md text-center">
      <img src={image} alt={name} className="w-20 h-20 mx-auto" />
      <h3 className="text-sm font-bold">{name}</h3>
      <p className="text-gray-600">₹{price}</p>
    </div>
  );
};

export default ProductCard;
