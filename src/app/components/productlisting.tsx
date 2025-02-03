 /* eslint-disable @typescript-eslint/no-unused-vars */
'use client'


import Image from "next/image";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { IProduct } from "../../../types/product";

<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>
const ProductListing = ({ products }: { products: IProduct[] }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle adding products to the cart
  const handleClick = (product: IProduct) => {
  
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
  Swal.fire({
    position: "top-right",
    icon: "success",
    title : `${product.productName} 
    added into cart`,
    showConfirmButton: true,
    timer: 2000,
  })

    if (cart[product.productName]) {
      cart[product.productName] = {
        ...cart[product.productName],
        quantity: cart[product.productName].quantity + 1,
    
      };
    } else {
      cart[product.productName] = { ...product, quantity: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 };


  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.colors.includes(searchQuery.toLowerCase())
  );


  return (
    <div className="mx-auto">
       <h1 className="font-bold text-3xl underline text-center mb-4">OUR LATEST COLLECTON</h1>
      <div className="flex justify-center mb-4">
      
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border-2 border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={product._id}>
            <Image
              src={product.imageUrl}
              alt={product.productName}
              width={300}
              height={800}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="font-medium text-[15px] mt-2 text-[#9E3500]">{product.status}</p>
              <p className="text-[15px] font-normal text-black">{product.productName}</p>
              <p className="text-[15px] font-normal text-[#757575]">{product.category}</p>
              <p className="text-[15px] font-normal text-[#757575]">{product.colors}</p>
              <p className="text-[15px] font-normal text-black mt-2">MRP : ₹ {product.price}</p>
              <div className="flex flex-col sm:flex-row justify-between items-center p-2">
  <button
    onClick={() => handleClick(product)}
    className="bg-gray-300 rounded-md p-2 mt-2 font-bold w-full sm:w-auto"
  >
    Add to cart
  </button>
  {/* <Link href={`/productdet/${product.slug}`}> */}
    <button className="bg-gray-300 rounded-md p-2 mt-2 font-bold border-black w-full sm:w-auto sm:ml-2">
      View Details
    </button>
  {/* </Link> */}
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
