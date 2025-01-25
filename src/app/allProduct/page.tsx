
import React from 'react'
import Image from 'next/image' 
import filter from "@/app/assets/Frame (5).png"
import sort from "@/app/assets/Frame (6).png"
import arrow from "@/app/assets/Frame (7).png"
import Header from '../components/header'


import Link from 'next/link'
import { client } from '@/sanity/lib/client'


type IProduct={
  description: string,
   inventory:number,
   colors: string[]
   productName : string,
  _id:string,
   status: string
   category: string
   price: number,
   slug: string,
   imageUrl : string,
   id: number| string
}

export default async function All_Product () {
  const products : IProduct[] =await client.fetch(`
      *[_type == 'product'] {
  productName,
  price,
  category,
  colors,
  "slug":slug.current,
 "imageUrl": image.asset->url,
 _id

}`)
  console.log(products);
  
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
        <div className='md:flex '>
        {/* left side*/}
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
            <div className="p-4 gap-4">
  {/* Gender Section */}
  <div className="flex items-center justify-between py-2">
    <p className="text-sm font-medium">Gender</p>
    <Image 
      src={arrow} 
      alt="Arrow icon" 
      className="h-4 w-4" 
    />
  </div>
  <div className="flex flex-col gap-2">
    {['Men', 'Women', 'Unisex'].map((label) => (
      <div key={label} className="flex items-center gap-2">
        <input 
          type="checkbox" 
          id={label.toLowerCase()} 
          className="w-5 h-5 rounded border" 
        />
        <label htmlFor={label.toLowerCase()} className="text-sm">
          {label}
        </label>
      </div>
    ))}
  </div>
  <div className="border-b border-gray-600 my-2" />

  {/* Kids Section */}
  <div className="flex items-center justify-between py-2">
    <p className="text-sm font-medium">Kids</p>
    <Image 
      src={arrow} 
      alt="Arrow icon" 
      className="h-4 w-4" 
    />
  </div>
  <div className="flex flex-col gap-2">
    {['Boys', 'Girls'].map((label) => (
      <div key={label} className="flex items-center gap-2">
        <input 
          type="checkbox" 
          id={label.toLowerCase()} 
          className="w-5 h-5 rounded border" 
        />
        <label htmlFor={label.toLowerCase()} className="text-sm">
          {label}
        </label>
      </div>
    ))}
  </div>

  {/* Shop By Price Section */}
  <div className="flex items-center justify-between py-2">
    <p className="text-sm font-medium">Shop By Price</p>
    <Image 
      src={arrow} 
      alt="Arrow icon" 
      className="h-4 w-4" 
    />
  </div>
  <div className="flex flex-col gap-2">
    {['Under ₹ 2 500.00', '₹ 2 501.00 - ₹ 7 500.00'].map((label) => (
      <div key={label} className="flex items-center gap-2">
        <input 
          type="checkbox" 
          id={label.toLowerCase().replace(/[^a-z0-9]/g, '-')} 
          className="w-5 h-5 rounded border" 
        />
        <label htmlFor={label.toLowerCase().replace(/[^a-z0-9]/g, '-')} className="text-sm">
          {label}
        </label>
      </div>
    ))}
  </div>
</div> 
</div>

{/* Right side */}
<div className="container mx-auto p-4">


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* pic 1 */}
    {products.map((product : IProduct)=>(



    <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={product._id}>
    <Link href={`/productdet/${product.slug}`} >
     <Image src={product.imageUrl} alt={product.productName}
     width={500}
     height={500}
        className="w-full h-64 object-cover"/>
      <div className="p-4">
      <p className="font-medium text-[15px]mt-2 text-[#9E3500]">{product.status}</p>
        <p className="text-[15px] font-normal text-black">{product.productName}</p>
       <p className="text-[15px] font-normal text-[#757575]">{product.category}</p>
       <p className="text-[15px] font-normal text-[#757575]">{product.colors}</p>
       <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ {product.price}</p>
       <button className='p-1 bg-slate-300 rounded-md text-black font-bold mt-1'>View Details</button>
      </div>
      </Link>
    </div>
  
))}
</div>
</div>
</div>
{/* Related Categories */}
<div className="container mx-auto p-6">
  {/* Heading */}
  <h2 className="font-medium text-[19px] mt-10">Related Categories</h2>

  {/* Grid Layout */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-10 p-1">
    {[
      "Best Selling Products",
      "Best Shoes",
      "New Basketball Shoes",
      "New Football Shoes",
      "New Men's Shoes",
      "New Running Shoes",
      "Best Men's Shoes",
      "Best Women's Shoes",
      "Best Training & Gym",
      "New Jordan Shoes",
    ].map((category, index) => (
      <div  key={index} className="text-center text-sm rounded-[20px] py-2 shadow hover:bg-gray-200 transition border-gray-50">{category} </div>
    ))}
  </div>
</div>
</div>



)}



