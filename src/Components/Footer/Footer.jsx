import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl py-5">
                <div className="md:flex md:justify-between px-10">
                    <div className="mb-6 md:mb-0 ">
                        <h2 className="text-[2vw] text-start mb-4 font-bold text-[#fd8500]">Basic<span className="text-black">Store</span><span className="text-[#fd8500]">.</span></h2>
                        <p className="lg:w-[25vw] sm:[100vw] text-start">Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                        <div className="flex space-x-4 mt-5">
                            <FaFacebookF className="text-[#fd8500] text-2xl" />
                            <FaInstagram className="text-[#fd8500] text-2xl" />
                            <FaTwitter className="text-[#fd8500] text-2xl" />
                            <FaLinkedinIn className="text-[#fd8500] text-2xl" />
                            <FaWhatsapp className="text-[#fd8500] text-2xl" />
                        </div>
                    </div>
                        <div className="text-start">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Quick Links</h2>
                            <ul className="uppercase text-sm">
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="hover:underline">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-start">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Help & Info</h2>
                            <ul className="uppercase text-sm">
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Track your order
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Returns Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Shipping + Delivery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-start text-sm">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Contact Us</h2>
                            <p>Do you have any Queries or <br/> suggestions?</p>
                            <Link to="mailto:yourinfo@gmail.com"className="underline">
                                        yourinfo@gmail.com
                            </Link>
                            <p>If you need support? Just <br/> give use a call.</p>
                            <Link to="tel:+5511122233344" className="underline">+55 111 222 333 44</Link>
                        </div>    
                </div>
                <hr className=" border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between px-5">
                    <span className="text-sm text-gray-500 sm:text-center flex">
                        © 2025
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                           BasicStore
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
