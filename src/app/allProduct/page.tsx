import React from 'react'
import Image from 'next/image' 
import filter from "@/app/assets/Frame (5).png"
import sort from "@/app/assets/Frame (6).png"
import arrow from "@/app/assets/Frame (7).png"
import pic1 from "@/app/assets/Rectangle (1).png"
import pic2 from "@/app/assets/Rectangle (2).png"
import pic3 from "@/app/assets/Rectangle (3).png"
import pic4 from "@/app/assets/Rectangle (4).png"
import pic5 from "@/app/assets/Rectangle (5).png"
import pic6 from "@/app/assets/Rectangle (6).png"
import pic7 from "@/app/assets/Rectangle (7).png"
import pic8 from "@/app/assets/Rectangle (8).png"
import pic9 from "@/app/assets/Rectangle (9).png"
import pic10 from "@/app/assets/Rectangle (10).png"
import pic11 from "@/app/assets/Rectangle (11).png"
import pic12 from "@/app/assets/Rectangle (12).png"
import pic13 from "@/app/assets/Rectangle (13).png"
import pic14 from "@/app/assets/Rectangle (14).png"
import pic15 from "@/app/assets/Rectangle (15).png"
import pic16 from "@/app/assets/Rectangle (16).png"
import pic17 from "@/app/assets/Rectangle (17).png"
import pic18 from "@/app/assets/Rectangle (18).png"
import pic19 from "@/app/assets/Rectangle (19).png"
import pic20 from "@/app/assets/Rectangle (20).png"
import pic21 from "@/app/assets/Rectangle (21).png"
import pic22 from "@/app/assets/Rectangle (22).png"
import pic23 from "@/app/assets/Rectangle (23).png"
import pic24 from "@/app/assets/Rectangle (24).png"
import pic25 from "@/app/assets/Rectangle (25).png"
import pic26 from "@/app/assets/Rectangle (26).png"
import pic27 from "@/app/assets/Rectangle (27).png"
import pic28 from "@/app/assets/Rectangle (28).png"
import pic29 from "@/app/assets/Rectangle (29).png"
import pic30 from "@/app/assets/Rectangle (30).png"
import Header from '../components/header'



export default function All_Product () {
  return (
    <div >
      <Header/>
        {/* new (500) navbar */}
        <div className=' justify-between items-center h-auto flex flex-col md:flex-row  md:justify-between gap-4 md:gap-0 p-4'>
            <p className='font-medium text-[24px]'>New (500)</p>
           <div className='flex flex-wrap gap-4 items-center'>
            <p className='font-medium text-[16px]'>Hide Filters</p>
            <Image src={filter} alt="filter" />
            <p className='font-medium text-[15px] '>Sort By</p>
            <Image src={sort} alt="sort" className='w-[14px] h-[14px]' />
        </div>
        </div>
        <div className=' flex '>
        {/* list from right side*/}
        <div className='mt-4 h-[849px] w-[260px] '>
            <div className='h-[400.72px] w-[192px]'> 
                <ul className='font-medium size-[15px] leading-[21.6px] w-[192.38px] pl-4'>
                    <li>Shoes</li>
                    <li>Sports Bras</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Accessories</li>
                    <li>& Equipment</li>
                </ul>
            </div>
            {/* check tick after the list of right side */}
            <div className='p-4 gap-4'>
            <div className='flex items-center justify-between py-2  '>
              {/* gender column */}
                <p>Gender</p>
                <Image src={arrow} alt='arrow' className='h-[14px] w-[14px]'/>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p>Men</p>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p >Women</p>
                </div>
                <div className='flex gap-1'>

                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p >Unisex</p>
                <div className='border-b border-gray-600'></div>
                </div>
    


              {/* Kids columns */}

                <div className='flex items-center justify-between py-2'>
                <p>Kids</p>
                <Image src={arrow} alt='arrow'/>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p>Boys</p>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p>Girls</p> 
                </div>

               {/* shop by price */}
                 <div className='flex items-center justify-between py-2'>
                <p>Shop By Price</p>
                <Image src={arrow} alt='arrow'/>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p>Under ₹ 2 500.00</p>
                </div>
                <div className='flex gap-1'>
                <div className='w-[20px] h-[20px] rounded-[4px] border-[1px]'></div>
                <p>₹ 2 501.00 - ₹ 7 500.00</p>
                </div>
     </div>  
</div>

{/* pictures from left side */}
<div className="container mx-auto p-4">
  <div className="grid grid-cols-3 gap-6">
    {/* pic 1 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic1} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dunk Low Retro</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 695.00</p>
      </div>
    </div>
{/* pic2 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic2} alt="pic1"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Court Vision Low Next Nature</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 4 995.00</p>
      </div>
    </div>

    {/* pic3 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic3} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Force 1 PLT.AF.ORM</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 695.00</p>
      </div>
    </div>

{/* pic4 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic4} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Force 1 React</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 13 295.00</p>
      </div>
    </div>

{/* pic5 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic5} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Promo Exclusion</p>
        <p className="text-[15px] font-normal text-black">Air Jordan 1 Elevate Low</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 11 895.00</p>
      </div>
    </div>

{/* pic6 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic6} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Standard Issue</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Basketball Jersey</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 895.00</p>
      </div>
    </div>

{/* pic7 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic7} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Promo Exclusion</p>
        <p className="text-[15px] font-normal text-black">Nike Dunk Low Retro SE</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 9 695.00</p>
      </div>
    </div>

{/* pic8 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic8} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Sustainable Materials</p>
        <p className="text-[15px] font-normal text-black">Nike Dri-FIT UV Hyverse</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Short-Sleeve Graphic Fitness Top</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 495.00</p>
      </div>
    </div>

{/* pic9*/}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic9} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dunk Low Retro</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 5 695.00</p>
      </div>
    </div>

{/* pic10*/}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic10} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dri-FIT Ready</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Short-Sleeve Fitness Top</p>
       <p className="text-[15px] font-normal text-[#757575]">3 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 495.00</p>
      </div>
    </div>

{/* pic 11 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic11} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike One Leak Protection: Period</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 3 395.00</p>
      </div>
    </div>
{/* pic12 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic12} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Force 1 LV8 3</p>
       <p className="text-[15px] font-normal text-[#757575]">Older Kids&apos; Shoe</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 7 495.00</p>
      </div>
    </div>

{/* pic 13 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic13} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Blazer Low Platform</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 195.00</p>
      </div>
    </div>

{/* pic 14 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic14} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Force 1 '07</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 195.00</p>
      </div>
    </div>

{/* pic 15 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic15} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Pro Dri-FIT</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Tight-Fit Sleeveless Top</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 1 495.00</p>
      </div>
    </div>

{/* pic 16 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic16} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dunk Low Retro</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 695.00</p>
      </div>
    </div>

{/* pic 17 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic17} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Max SC</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 5 995.00</p>
      </div>
    </div>

{/* pic 18 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic18} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dri-FIT UV Miler</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Short-Sleeve Running Top</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 1 695.00</p>
      </div>
    </div>

{/* pic 19 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic19} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Air Max SYSTM</p>
       <p className="text-[15px] font-normal text-[#757575]">Older Kids&apos; Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 6 495.00</p>
      </div>
    </div>

{/* pic20 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic20} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Alate All U</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 195.00</p>
      </div>
    </div>

{/* pic21*/}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic21} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Court Legacy Lift</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 7 495.00</p>
      </div>
    </div>

{/* pic22 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic22} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Swoosh</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Medium-support Padded Sports Bra Tank</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 3 095.00</p>
      </div>
    </div>

{/* pic23 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic23} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike SB Zoom Janoski OG+</p>
       <p className="text-[15px] font-normal text-[#757575]">Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 595.00</p>
      </div>
    </div>

{/* pic24 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic24} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dri-FIT Run Division Rise 365</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Running Tank</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 3 495.00</p>
      </div>
    </div>

{/* pic25 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic25} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Dri-FIT Challenger</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 495.00</p>
      </div>
    </div>

{/* pic26 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic26} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Jordan Series ES</p>
       <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 7 495.00</p>
      </div>
    </div>

{/* pic27 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic27} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Outdoor Play</p>
       <p className="text-[15px] font-normal text-[#757575]">Older Kids&apos; Oversized Woven Jacket</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 3 895.00</p>
      </div>
    </div>

{/* pic28 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic28} alt="pic1"
        className="w-full h-64 object-cover" />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Sportswear Trend</p>
       <p className="text-[15px] font-normal text-[#757575]">Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts</p>
       <p className="text-[15px] font-normal text-[#757575]">2 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 2 495.00</p>
      </div>
    </div>

{/* pic29 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic29} alt="pic1"
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike Blazer Low &apos;77 Jumbo</p>
       <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 8 595.00</p>
      </div>
    </div>

{/* pic 30 */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <Image src={pic30} alt="pic1"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">Just In</p>
        <p className="text-[15px] font-normal text-black">Nike SB Force 58</p>
       <p className="text-[15px] font-normal text-[#757575]">Skate Shoe</p>
       <p className="text-[15px] font-normal text-[#757575]">1 Colour</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ 5 995.00</p>
      </div>
    </div>

  </div>
</div>

</div>
{/* Related Categories */}
<div className="container mx-auto p-6 mr-2 ">
  {/* Heading */}
  <h2 className="font-medium text-[19px] mt-10">Related Categories</h2>
  
  <div className="grid grid-cols-7 gap-3 mt-10 p-1    ">
    {/* First 8 Boxes */}
    <div className=" text-center  text-sm rounded-[20px] py-0 shadow hover:bg-gray-200 transition border-gray-50">
      Best Selling Products
    </div>
    <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
      Best Shoes
    </div>
    <div className="text-center  text-sm rounded-[20px]  shadow hover:bg-gray-200 transition border-gray-50">
      New Basketball Shoes
    </div>
    <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
      New Football Shoes
    </div>
    <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
      New Men&apos;s Shoes
    </div>
    <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
      New Running Shoes
    </div>
    <div className="text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
    Best Men&apos;s Shoes
    </div>

    {/* Next 2 Boxes */}
    <div className="col-span-3 grid grid-cols-3 gap-2 mt-2">
      <div className="text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50  ">
        Best Women&apos;s Shoes
      </div>
      <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50 ">
        Best Training & Gym
      </div>
      <div className=" text-center  text-sm rounded-[20px] shadow hover:bg-gray-200 transition border-gray-50">
      New Jordan Shoes
      </div>
    </div>
  </div>
</div>


</div>


  )
};
