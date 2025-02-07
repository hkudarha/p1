import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import FeatureCards from "../FeatureCards/FeatureCards";
import CategoryList from "../Category/CategoryList";
export default function Home() {
    return (
        <div className="">
            <div
            className="relative bg-cover bg-center h-[90vh] flex items-center rounded-xl"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/5d/c0/d2/5dc0d2dec85b7369fde3c510901ed603.jpg')" }}
            >
                <div className="max-w-md ml-10 text-white text-start">
                    <h1 className="text-4xl font-bold mb-2">Iphone 15 Series</h1>
                    <p className="text-lg mb-4">
                    Limited Stocks Available. Grab It Now! 
                    </p>
                    <button className="bg-white uppercase text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                    Shop Collection
                    </button>
                </div>
            </div>   
            <FeatureCards/> 
            <CategoryList/>      
        </div>
    );
}
