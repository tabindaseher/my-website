'use client'

import Image from "next/image";
import React from "react";
import topLogo from "@/app/assets/Vector.png"
import logo from "@/app/assets/Frame.png"
import wishlistIcon from "@/app/assets/Vector (1).png"
import cartIcon from "@/app/assets/Vector (2).png"
import Link from "next/link";
import { useState } from "react";

import {

  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
   
    {/*TopHeader*/}
      <div className="flex justify-between items-center py-[10px] pr-[6.13px] pl-3 gap-[15.38px] bg-[#F5F5F5]">
        <Image src={topLogo} 
         alt="toplogo"
         height={50}
         width={50} className="w-[19.2px] h-[17.97px]"/>

        {/* Hamburger Icon (React Icon) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center"
        >
          < MdMenu size={30} />
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
            <Link href="/login">
            <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
            <UserButton  />
          </SignedIn>
          </Link>
           </li>
</ul>
      </div>

       {/*NavBar*/}   
      <div className="flex flex-wrap py-4 justify-between items-center px-4 ">

        <Image src={logo} alt="logo"
        height={50}
        width={50} className="h-10 w-auto"/>

         {/* Hamburger Menu for Small Screens */}
  <div className="block md:hidden">
    <button className="text-gray-700 focus:outline-none">
      
    </button>
  </div>

  <nav className="hidden md:flex md:flex-1 md:justify-center md:items-center">
        <ul className="flex flex-col md:flex-row md:gap-4 ">

         <Link href="/allProduct" className="font-medium text-base leading-[24px]" > All Products</Link>
         <Link href="/join" className="font-medium text-base leading-[24px]">Join Us</Link>
         <Link href="/contact" className="font-medium text-base leading-[24px]">Contact</Link>
         <Link href="/cartpage" className="font-medium text-base leading-[24px]">Cart</Link>
         <Link href="/checkout" className="font-medium text-base leading-[24px]">CheckOut</Link>
         <Link href="/order" className="font-medium text-base leading-[24px]">Order</Link>

        </ul>
        </nav>

        <div className="  ">
          <input type="text" />
        </div>
        
        {/* cart icon */}
        <div className="flex gap-3 items-center">
        <Image src={wishlistIcon} alt="wishlist" 
        height={50}
        width={50} aria-label="wishlist" className="w-[19.5px] h-[16.76px]"/>
        <Link href="/cartpage"><Image src={cartIcon} alt="cart" aria-label="cart" className="w-[16.5px] h-[16.5px]"/></Link>
        </div>
      </div>

    </>
    )}
export default Header;