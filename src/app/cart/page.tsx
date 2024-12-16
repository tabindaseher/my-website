import React from 'react'
import Image from 'next/image';
import pic6 from "@/app/assets/Image (6).png";
import wishlistIcon from "@/app/assets/Vector (1).png"
import delet from "@/app/assets/Frame (8).png";
import topLogo from "@/app/assets/Vector.png"
import Link from 'next/link';
import sign  from "@/app/assets/Frame (9).png"
import logo from "@/app/assets/Frame.png";
import searchIcon from "@/app/assets/Vector (3).png"
import cartIcon from "@/app/assets/Vector (2).png"
 const Cart = () => {
  return (
    <>

    {/* Top header */}  
    <div className="flex justify-between py-[10px] pr-[6.13px] pl-3 gap-[15.38px] bg-[#F5F5F5]">
        <Image src={topLogo} alt="toplogo" className="w-[19.2px] h-[17.97px]"/>
        <ul className="flex  gap-[15.38px]">
           <li className="leading-[14px] font-medium text-[11px] pr-2">
            <Link href="#">Find a Store</Link>
            <span className="w-[6px] h-[18px] pl-3">|</span>
           </li>
           <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Help</Link>
          <span className="w-[4px] h-[18px] pl-3">|</span>
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          <Link href="#">Hi, Rajarshi</Link>
          
          </li>
          <li className="leading-[14px] font-medium text-[11px] pr-2">
          < Image src={sign} alt='signin image'  className='w-[24px] h-[24px]'/>
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
 

        <div className='flex '>
        {/* left side */}
             <div className='w-full left-[155.5px] relative'>
        {/* Box */}
            <div className=' w-[627.38px]  bg-[#E5E5E5] pl-4 pt-2'>
              <p className='font-medium text-[13px] leading-[14px] tracking-[0.5px]'>Free Delivery</p>
              <p className='font-medium text-[11px] leading-[24px]'>Applies to orders of ₹ 14 000.00 or more.
                <span className='font-medium text-[11px] leading-[24px] underline pl-6'>View details</span>
              </p>
              </div>
      {/* Heading of Bag */}
           <div>
              <h2 className='font-medium text-[22px] leading-[33px] mt-2'>Bag</h2>
      {/* box of Pic, description , details */}
            <div className="grid grid-cols-2 mt-8 mr-64 ">
      {/* Image */}
           <div >
          <Image src={pic6} alt="Nike Product"  className="w-[150px] h-[150px] object-cover rounded-md" />
           </div>
      {/* Deatils */}
      <div className="space-y-2">
      <div className='flex justify-between items-center'>
      <p className="font-medium text-[15px] leading-[28px]">Nike Dri-FIT ADV TechKnit Ultra</p>
      <p className="font-normal text-[15px] leading-[28px]">MRP: ₹ 3 895.00</p>
      </div>
      {/* Description */}
       <p className="font-normal text-[15px] leading-[28px] text-[#757575]">
      Men&apos;s Short-Sleeve Running Top
       </p>
      <p className="font-normal text-[15px] leading-[28px] text-[#757575]">
      Ashen Slate/Cobalt Bliss
      </p>

    {/* Size and Quantity */}
    <div className=" flex pr-2">
      <div className="flex items-center space-x-2">
        <p className="font-normal text-[15px] leading-[28px] text-[#757575]">Size:</p>
        <p className="font-normal text-[15px] leading-[28px]">L</p>
      </div>
      <div className="flex items-center space-x-2 pl-10">
        <p className="font-normal text-[15px] leading-[28px] text-[#757575]">Quantity:</p>
        <p className="font-normal text-[15px] leading-[28px]">1</p>
      </div>
    </div>

    {/* Icons */}
    <div className="flex space-x-4 mt-2">
      <Image src={wishlistIcon} alt="Add to Wishlist" className="w-[19.5px] h-[16.76px] cursor-pointer" />
      <Image src={delet} alt="Remove Item" className="w-[19.5px] h-[16.76px] cursor-pointer" />
    </div>
  </div>

</div>


{/*box of without Pic, description , details  */}
<div className="grid grid-cols-2 mt-8 mr-64">
                   
  {/* Hidden Image */}
  <div>
    <Image src={pic6} alt="Nike Product"  className="w-[150px] h-[150px] object-cover rounded-md hidden" />
  </div>
  {/* details */}
<div className="space-y-2">
<div className='flex justify-between'>
<p className="font-medium text-[15px] leading-[28px]">Nike Air Max 97 SE</p>

<p className="font-normal text-[15px] leading-[28px] ">MRP: ₹ 16 995.00</p>
</div>
{/* Description */}
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">
Men&apos;s Shoes
</p>
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">
Flat Pewter/Light Bone/Black/White
</p>

{/* Size and Quantity */}
<div className=" flex pr-2">
<div className="flex items-center space-x-2">
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">Size:</p>
<p className="font-normal text-[15px] leading-[28px]">8</p>
</div>
<div className="flex items-center space-x-2 pl-10">
<p className="font-normal text-[15px] leading-[28px] text-[#757575]">Quantity:</p>
<p className="font-normal text-[15px] leading-[28px]">1</p>
</div>
</div>

{/* Icons */}
<div className="flex space-x-4 mt-2">
<Image src={wishlistIcon} alt="Add to Wishlist" className="w-[19.5px] h-[16.76px] cursor-pointer" />
<Image src={delet} alt="Remove Item" className="w-[19.5px] h-[16.76px] cursor-pointer" />
</div>
</div>

</div>
 </div>
   
    </div>


{/* right side */}
 <div className=" w-[350.67px] mb-96 mx-auto p-8 h-auto  ">
  {/* Summary Heading*/}
    <div className="space-y-4 mb-auto ">
    <h2 className="text-[21px] font-medium leading-[33px]">Summary</h2>

    {/* Subtotal */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Subtotal</p>
      <p className="font-normal text-base">₹ 20 890.00</p>
    </div>

    {/* Delivery & Handling */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Estimated Delivery & Handling</p>
      <p className="font-normal text-base">Free</p>
    </div>

    {/* Total amount */}
    <div className="flex justify-between items-center border-t pt-4">
      <p className="font-normal text-[14px]">Total</p>
      <p className="font-normal text-[14px]">₹ 20 890.00</p>
      </div>
    
  </div>
  <div className="flex justify-between items-center border-t mt-4">

  {/* Checkout Button */}
  <button className=" w-[334px] h-[60px] bg-black text-white font-medium  hover:bg-gray-800  rounded-[30px] mt-6 pr-4">
    Checkout Members
  </button>
  </div>
</div>
</div>
</>

   
  )
}
export default Cart

