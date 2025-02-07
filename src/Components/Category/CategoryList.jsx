import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Air Pods",
    image: "https://i.pinimg.com/736x/ea/6e/58/ea6e585154a3602a82030e7aebd50328.jpg",
    products: Array.from({ length: 15 }, (_, i) => ({
      name: `Air Pod ${i + 1}`,
      image: "https://i.pinimg.com/736x/ea/6e/58/ea6e585154a3602a82030e7aebd50328.jpg",
      price: (2000 + i * 500).toFixed(2),
    })),
  },
  {
    name: "Smart Watches",
    image: "https://i.pinimg.com/736x/ea/6e/58/ea6e585154a3602a82030e7aebd50328.jpg",
    products: Array.from({ length: 15 }, (_, i) => ({
      name: `Smart Watch ${i + 1}`,
      image: "https://via.placeholder.com/80",
      price: (3000 + i * 700).toFixed(2),
    })),
  },
  {
    name: "Laptops",
    image: "https://i.pinimg.com/736x/ea/6e/58/ea6e585154a3602a82030e7aebd50328.jpg",
    products: Array.from({ length: 15 }, (_, i) => ({
      name: `Laptop ${i + 1}`,
      image: "https://via.placeholder.com/80",
      price: (50000 + i * 2000).toFixed(2),
    })),
  },
  {
    name: "Mobile Phones",
    image: "https://i.pinimg.com/736x/ea/6e/58/ea6e585154a3602a82030e7aebd50328.jpg",
    products: Array.from({ length: 15 }, (_, i) => ({
      name: `Mobile ${i + 1}`,
      image: "https://via.placeholder.com/80",
      price: (10000 + i * 1000).toFixed(2),
    })),
  },
];

const CategoryList = () => {
  return (
    <>
     <h1 className="mb-10 text-2xl font-bold">Our Categories</h1>
    <div className="flex w-full  gap-4 justify-between mb-10">
       
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
    </>
  );
};

export default CategoryList;
