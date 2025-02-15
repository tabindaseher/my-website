'use client'
/*@typescript-eslint/no-unused-vars*/

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../../types/product';
import Link from 'next/link';


const CheckoutPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]); 
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IProduct[];
    setProducts(items);

    const total = items.reduce((acc: number, product: IProduct) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalAmount(total); // Update total amount
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 ">
      <h2 className="text-3xl font-bold text-center mb-6 underline">Checkout</h2>

      <div className='flex'>
        {/* Products Grid */}
        <div className="flex flex-wrap gap-8 w-2/3">
          {products.map((item) => (
            <div key={item._id} className="flex flex-col space-y-6 w-full sm:w-[350px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div>
                  <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    width={400}
                    height={400}
                    className="w-[150px] h-[150px] object-cover rounded-md"
                  />
                </div>
                {/* Details */}
                <div className="space-y-2">
                  <p className="font-bold text-[15px] leading-[28px]">{item.productName}</p>
                  <p className="font-medium text-[15px] leading-[28px]">MRP: ₹ {(item.quantity * item.price).toFixed(2)}</p>
                  <p className="font-normal text-blue-600 leading-[28px]">{item.category}</p>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <p className="font-medium text-[15px] leading-[28px]">Colour:</p>
                    <p className="font-medium text-[15px] leading-[28px]">{item.colors}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-[15px] leading-[28px]">Quantity:</p>
                      <p className="font-bold text-[15px] leading-[28px]">{item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section (Render Total Amount here) */}
        <div className="w-full sm:w-[350px] mx-auto p-6 sm:p-8 h-auto">
          <div className="space-y-4 mb-auto">
            <h2 className="text-[24px] font-bold leading-[33px] underline">Summary</h2>
            <div className="flex justify-between items-center">
              <p className="font-normal text-base">Subtotal</p>
              <p className="font-normal text-base">₹{totalAmount.toFixed(2)}</p> {/* Use totalAmount here */}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-normal text-base">Estimated Delivery & Handling</p>
              <p className="font-normal text-base">Free</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="font-bold text-[14px]">Total</p>
              <p className="font-bold text-[14px]">₹{totalAmount.toFixed(2)}</p> {/* Use totalAmount here */}
            </div>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-between items-center border-t mt-4">
            <button className="w-full sm:w-[334px] h-[60px] bg-black text-white font-bold hover:bg-gray-900 rounded-[30px] mt-6">
              <Link href="/order">Order Confirm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

