"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState for toggling hamburger menu
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Topsale from "./navbar1 copy";
import { FaFacebook, FaInstagram, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="lg:my-[50px] lg:mt-[-270px] w-full h-[58px] relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center px-6">
        <h3 className="font-Montserrat font-semibold text-[40px]">Bandage</h3>

        {/* Menu Links */}
        <ul className="flex gap-10">
          <li><Link href="/" className="text-[18px] font-semibold hover:text-blue-500 transition">Home</Link></li>

          {/* Shop Link with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsShopDropdownOpen(true)}
            onMouseLeave={() => setIsShopDropdownOpen(false)}
          >
            <Link href="/shop" className="text-[18px] font-semibold hover:text-blue-500 transition">Shop</Link>
            {isShopDropdownOpen && (
              <div className="absolute top-[100%] left-0 bg-white shadow-lg w-[200px] p-4">
                <ul>
                  <li><Link href="/shop/category1" className="hover:text-blue-500">Category 1</Link></li>
                  <li><Link href="/shop/category2" className="hover:text-blue-500">Category 2</Link></li>
                  <li><Link href="/shop/category3" className="hover:text-blue-500">Category 3</Link></li>
                </ul>
              </div>
            )}
          </li>

          <li><Link href="/about" className="text-[18px] font-semibold hover:text-blue-500 transition">About</Link></li>
          <li><Link href="/blog" className="text-[18px] font-semibold hover:text-blue-500 transition">Blog</Link></li>
          <li><Link href="/contact" className="text-[18px] font-semibold hover:text-blue-500 transition">Contact</Link></li>
          <li><Link href="/pages" className="text-[18px] font-semibold hover:text-blue-500 transition">Pages</Link></li>
        </ul>

        {/* User Icon (Login/Register) */}
        <div className="flex items-center gap-6">
          <div className="text-blue-500 font-semibold text-[20px] hover:text-blue-500">
            <Link href="/login"><FaUser /> </Link>
          </div>

          <div className="text-blue-500 font-semibold text-[20px] hover:text-blue-500">
            <Link href="/login">Login / Register</Link>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-Dark hover:text-blue-500 transition text-[22px]" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-Dark hover:text-blue-500 transition text-[22px]" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-Dark hover:text-blue-500 transition text-[22px]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-Dark hover:text-blue-500 transition text-[22px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden w-full flex items-center justify-between p-4">
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]" />
          <div className="w-[24px] h-[2px] bg-black mb-[5px]" />
          <div className="w-[24px] h-[2px] bg-black" />
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute bottom-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/" className="py-[20px]">Home</Link></li>
          <li><Link href="/shop" className="py-[20px]">Shop</Link></li>
          <li><Link href="/about" className="py-[20px]">About</Link></li>
          <li><Link href="/blog" className="py-[20px]">Blog</Link></li>
          <li><Link href="/contact" className="py-[20px]">Contact</Link></li>
          <li><Link href="/pages" className="py-[20px]">Pages</Link></li>
        </ul>

        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px] mt-4"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar1;
