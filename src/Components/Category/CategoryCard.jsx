import React, { useState } from "react";
import ProductList from "./ProductList";

const CategoryCard = ({ name, image, products }) => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
        <div
        className="px-10 rounded-lg text-center cursor-pointer"
        onClick={() => setShowProducts(!showProducts)}
        >
        <img
            src={image}
            alt={name}
            className="w-96 h-48 mx-auto rounded-xl object-cover"
        />
        <h2 className="text-lg font-bold mt-2">{name}</h2>
        <p className="text-gray-600">Total Items: {products.length}</p>

        {/* {showProducts && <ProductList products={products} />} */}
        </div>
    </>
  );
};

export default CategoryCard;
