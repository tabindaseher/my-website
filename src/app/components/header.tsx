'use client'

import Image from "next/image";
import React from "react";
import topLogo from "@/app/assets/Vector.png"
import logo from "@/app/assets/Frame.png"
import wishlistIcon from "@/app/assets/Vector (1).png"
import cartIcon from "@/app/assets/Vector (2).png"
import searchIcon from "@/app/assets/Vector (3).png"
import Link from "next/link";
import { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
   
    {/*TopHeader*/}
      <div className="flex justify-between items-center py-[10px] pr-[6.13px] pl-3 gap-[15.38px] bg-[#F5F5F5]">
        <Image src={topLogo} alt="toplogo" className="w-[19.2px] h-[17.97px]"/>

        <button
        onClick={toggleMenu}
        className="sm:hidden block p-2 focus:outline-none"
        aria-label="Toggle Menu">
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>
        <ul
        className={`absolute top-10 right-0 bg-[#F5F5F5]  p-4 space-y-2 sm:flex sm:space-y-0 sm:gap-[15.38px] sm:static ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
           <li className="leading-[14px] font-medium text-[11px] pr-2 ">
            <Link href="/allProduct">Find a Store</Link>
            <span className="w-[6px] h-[18px] pl-3">|</span>
           </li>

           <li className="leading-[14px] font-medium text-[11px] pr-2 ">
            <Link href="/contact">Help</Link>
            <span className="w-[6px] h-[18px] pl-3">|</span>
           </li>

           <li className="leading-[14px] font-medium text-[11px] pr-2 ">
            <Link href="/join">Join Us</Link>
            <span className="w-[6px] h-[18px] pl-3">|</span>
           </li>

           <li className="leading-[14px] font-medium text-[11px] pr-2 ">
            <Link href="/login">Sign In</Link>
         
           </li>
</ul>
      </div>

       {/*NavBar*/}   
      <div className="flex flex-wrap py-4 justify-between items-center px-4 ">

        <Image src={logo} alt="logo" className="h-10 w-auto"/>

         {/* Hamburger Menu for Small Screens */}
  <div className="block md:hidden">
    <button className="text-gray-700 focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>

  <nav className="hidden md:flex md:flex-1 md:justify-center md:items-center">
        <ul className="flex flex-col md:flex-row md:gap-4 ">
         <Link href="/allProduct" className="font-medium text-base leading-[24px]" >New & Featured</Link>
         <Link href="/product" className="font-medium text-base leading-[24px]">Men</Link>
         <Link href="/login" className="font-medium text-base leading-[24px]">Women</Link>
         <Link href="/join" className="font-medium text-base leading-[24px]">Kids</Link>
         <Link href="/cart" className="font-medium text-base leading-[24px]">Sale</Link>
         <Link href="/checkout" className="font-medium text-base leading-[24px]">SNKRS</Link>
         
        </ul>
        </nav>
        {/* serach icon */}
        <div className="hidden md:flex bg-[#F5F5F5] rounded-[100px] w-[180px] h-10 items-center px-4">
          <Image src={searchIcon} alt="search" aria-label="search"  className="w-[16.72px] h-[16.72px] "/>
          <input type="input" placeholder="Search" className="bg-[#F5F5F5] focus-visible:outline-none w-full h-full px-2"/>
        </div>
        {/* cart icon */}
        <div className="flex gap-3 items-center">
        <Image src={wishlistIcon} alt="wishlist" aria-label="wishlist" className="w-[19.5px] h-[16.76px]"/>
        <Image src={cartIcon} alt="cart" aria-label="cart" className="w-[16.5px] h-[16.5px]"/>
        </div>
      </div>

    </>
    )}
export default Header;