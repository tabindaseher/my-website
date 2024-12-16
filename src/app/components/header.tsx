import Image from "next/image";
import React from "react";
import topLogo from "@/app/assets/Vector.png"
import logo from "@/app/assets/Frame.png"
import wishlistIcon from "@/app/assets/Vector (1).png"
import cartIcon from "@/app/assets/Vector (2).png"
import searchIcon from "@/app/assets/Vector (3).png"
import Link from "next/link";

const Header = () => {
  return (
    <>
    {/*TopHeader*/}
      <div className="flex justify-between py-[10px] pr-[6.13px] pl-3 gap-[15.38px] bg-[#F5F5F5]">
        <Image src={topLogo} alt="toplogo" className="w-[19.2px] h-[17.97px]"/>
        <ul className="flex  gap-[15.38px]">
           <li className="leading-[14px] font-medium text-[11px] pr-2">
            <Link href="">Find a Store</Link>
            <span className="w-[4px] h-[18px] pl-3">|</span>
           </li>
           <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Help</Link>
          <span className="w-[4px] h-[18px] pl-3">|</span>
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Join Us</Link>
          <span className="w-[4px] h-[18px] pl-3">|</span>
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Sign In</Link>
          </li>
        </ul>
      </div>

       {/*NavBar*/}   
      <div className="flex py-4 justify-between items-center px-4 ">
        <Image src={logo} alt="logo"/>
        <ul className="flex justify-center h-10 gap-3 py-4 ">
         <Link href="/allProduct" className="font-medium text-base leading-[24px]" > New & Featured</Link>
         <Link href="/product" className="font-medium text-base leading-[24px]">Men</Link>
         <Link href="/login" className="font-medium text-base leading-[24px]">Women</Link>
         <Link href="/join" className="font-medium text-base leading-[24px]">Kids</Link>
         <Link href="/cart" className="font-medium text-base leading-[24px]">Sale</Link>
         <Link href="/checkout" className="font-medium text-base leading-[24px]">SNKRS</Link>
        </ul>
        <div className="bg-[#F5F5F5] rounded-[100px] w-[180px] h-10 flex justify-between items-center px-4 py-3 ">
          <Image src={searchIcon} alt="search"  className="w-[16.72px] h-[16.72px] "/>
          <input type="input" placeholder="Search" className="bg-[#F5F5F5] focus-visible:outline-none w-[84px] h-[18px] "/>
        </div>
        <div className="flex gap-3 py-[12px]">
        <Image src={wishlistIcon} alt="wishlist" className="w-[19.5px] h-[16.76px]"/>
        <Image src={cartIcon} alt="cart"  className="w-[16.5px] h-[16.5px]"/>
        </div>
      </div>

    </>
    )}
export default Header;