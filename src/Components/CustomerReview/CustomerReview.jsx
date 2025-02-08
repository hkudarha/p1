import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import icons

const CustomerReview = () => {
  const [activeIndex, setActiveIndex] = useState(1); // State to track active review

  const reviews = [
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Emma Chamberlin",
      rating: 4,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Thomas John",
      rating: 5,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Kevin Bryan",
      rating: 4,
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-[#fd8500] text-lg" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 text-lg" />
      )
    );
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Customer's Review</h2>

      {/* Reviews Section */}
      <div className="flex gap-6 overflow-x-auto p-4 justify-between items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`border rounded-lg p-5 w-96 shadow transition-all duration-300 cursor-pointer ${
              activeIndex === index ? "border-[#fd8500] shadow-lg scale-105" : "border-gray-300"
            }`}
            onClick={() => setActiveIndex(index)} // Set active state when clicking the review
          >
            <p className="mb-2 text-start">{review.text}</p>
            <div className="flex items-start mt-5">{renderStars(review.rating)}</div>
            <p className="mt-2 font-medium text-start">{review.author}</p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="btn flex justify-center mt-4">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "bg-[#fd8500]" : "bg-[#ffddb8]"
            }`}
            onClick={() => setActiveIndex(index)} // Set active state when clicking a button
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
