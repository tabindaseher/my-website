// 'use client'
// import Image from "next/image";
// import logo from "@/app/assets/Image (15).png";
// import cartIcon from "@/app/assets/Vector (2).png";
// import { TbMessage } from "react-icons/tb";
// import icon from "@/app/assets/Frame (10).png";


// import { useEffect, useState } from "react";
// import { IProduct } from "../../../types/product";
// import Link from "next/link";

// const CheckOut = () => {

//     const [products, setProducts] = useState<IProduct[]>([]); // You can define the type here
   
  
//     useEffect(() => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//       const items = Object.values(cart) as IProduct[]
//       setProducts(items);
  
//       // const total = items.reduce((acc: number, product: IProduct ) => {
//       //   return acc + product.price * product.quantity;
//       // }, 0);
    
//     }, []);
//   return (
//     < div>
  
//     {/* header */}
//         <header className="flex justify-between px-2 mx-w-3xl mx-auto items-center h-auto mt-6">
//             {/* logo */}
//             <Image src={logo} alt="img" className=" h-[21.75px]"/> 
//             {/* nav icons */}
//             <div className=" space-x-8 items-center px-4 hidden md:flex">
//                 <p>000 800 100 9538</p>
//                 <TbMessage/>
//                 <Image src={cartIcon} alt="cart" aria-label="cart" className="w-[16.5px] h-[16.5px]"/>
//             </div>
//          </header>

//          {/* hero section */}
//          <section className="w-full flex flex-col sm:flex-row sm:justify-between h-auto px-4 sm:px-44">
//          {/* left side */}
//             {/* left side  */}
//             <div className="w-full sm:w-[440px] py-8">
//                 <h1 className="font-medium text-xl py-2">How would you like to get your order?</h1>
//                 <p className="font-normal text-sm text-[#757575] py-2">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
//                 <div className="border-[2px] rounded-xl py-[29px] gap-6 border-black flex">
//                 <Image src={icon} alt="img"  className="ml-6"/> 
//                     <Link href={"/"}><p>Place Order</p></Link>
//                 </div>
//                 {/* form */}
//                 <div className="w-full sm:w-[440px] mt-8">
//                     <h2 className="font-medium text-xl py-8">Enter your name and address:</h2>
//                     <div className="flex flex-col space-y-3">
//   <div className="relative">

//     <input
//       type="text"
//       className="py-4 pl-4 pr-[341px] rounded-[4px] border w-full"
//       placeholder=" First Name"
//       required
//     />
//   </div>

//   <div className="relative">

//     <input
//       type="text"
//       className="py-4 pl-4 pr-[341px] rounded-[4px] border w-full"
//       placeholder=" Last Name"
//       required
//     />
//   </div>

//   <div className="relative">

//     <input
//       type="text"
//       className="py-4 pl-4 rounded-[4px] border w-full"
//       placeholder="Enter Address Line 1"
//       required
//     />
//   </div>

//   <div className="relative">

//     <input
//       type="text"
//       className="py-4 pl-4 rounded-[4px] border w-full"
//       placeholder="Enter Address Line 2"
//     />
//   </div>

//   <div className="relative">
 
//     <input
//       type="text"
//       className="py-4 pl-4 rounded-[4px] border w-full"
//       placeholder="Enter Address Line 3"
//     />
//   </div>

//   <div className="flex gap-4">
//     <div className="relative w-[211.9px]">
   
//       <input
//         type="text"
//         className="py-4 pl-4 rounded-[4px] border w-full"
//         placeholder="Enter Postal Code"
//       />
//     </div>

//     <div className="relative w-[211.9px]">
  
//       <input
//         type="text"
//         className="py-4 pl-4 rounded-[4px] border w-full"
//         placeholder="Enter Locality"
//       />
//     </div>
//   </div>

//   <div className="flex gap-4">
//     <div className="relative w-[211.9px]">
  
//       <input
//         type="text"
//         className="py-4 pl-4 rounded-[4px] border w-full"
//         placeholder="Enter Postal Code"
//       />
//     </div>

//     <div className="relative w-[211.9px]">
   
//       <input
//         type="text"
//         className="py-4 pl-4 rounded-[4px] border w-full"
//         placeholder="Enter Locality"
//       />
//     </div>
//   </div>


//   <div className="flex items-center gap-4">
//     <input type="checkbox" className="w-[17px] h-[17px] border-[1px] rounded-[4px]" />
//     <p>Save this address to my profile</p>
//   </div>

//   <div className="flex items-center gap-4">
//     <input type="checkbox" className="w-[17px] h-[17px] border-[1px] bg-[#CCCCCC] rounded-[4px]" />
//     <p>Make this my preferred address</p>
//   </div>

//   <h2 className="font-medium text-xl py-8">What&apos;s your contact information?</h2>
  
//   <div className="relative">
   
//     <input
//       type="email"
//       className="py-4 pl-4 rounded-[4px] border w-full"
//       placeholder="Enter your email"
//       required
//     />
//   </div>
//   <p className="text-[#757575] font-normal text-xs">A confirmation email will be sent after checkout.</p>

//   <div className="relative">
   
//     <input
//       type="text"
//       className="py-4 pl-4 rounded-[4px] border w-full"
//       placeholder="Enter your phone number"
//       required
//     />
//   </div>
//   <p className="text-[#757575] font-normal text-xs">A carrier might contact you to confirm delivery.</p>
// </div>

                  
//             </div>
//             </div>
       
//             {/* right side  */}
//             <div className="w-full sm:w-[350.67px] mx-auto p-6 sm:p-8 h-auto">
            
              
         
          
//   {/* Summary Heading*/}
//     <div className="space-y-4 mb-auto ">

//     <h2 className="text-[18px] sm:text-[21px] font-medium leading-[28px] sm:leading-[33px]">Summary</h2>

//     {/* Subtotal */}
//     <div className="flex justify-between items-center">
//       <p className="font-normal text-base">Subtotal</p>
//       <p className="font-normal text-base">₹ 20 890.00</p>
//     </div>

//     {/* Delivery & Handling */}
//     <div className="flex justify-between items-center">
//       <p className="font-normal text-base">Estimated Delivery & Handling</p>
//       <p className="font-normal text-base">Free</p>
//     </div>

//     {/* Total amount */}
//     <div className="flex justify-between items-center border-t pt-4">
//       <p className="font-normal text-[14px]">Total</p>
//       <p className="font-normal text-[14px]">$ 20 890.00</p>
//       </div>
    
//   </div>
// {/* vertical line */}
//   <div className="flex justify-between items-center border-t pt-4"></div>
//   {/* reflect */}
// <p className="font-normal text-[9px] mt-4">(The total reflects the price of your order, including all duties and taxes)</p>
// <h3 className="font-bold text-[15px] mt-4">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
// {/* Men short-Sleeve  */}

// <div className="flex flex-wrap gap-4 mt-4">
// {products.map((item) => (
//     <div key={item._id} className="flex sm:flex-row flex-col items-center sm:items-start gap-4">
//       {/* Product Image */}
//       <Image
//         src={item.imageUrl}
//         alt={item.productName}
//         width={300}
//         height={300}
//         className="w-full sm:w-[208px] h-auto sm:h-[208px]"
//       />
//       {/* Product Details */}
//       <div className="text-center sm:text-left">
//         <p className="font-normal text-[13px]">{item.productName}</p>
//         <p className="text-[#8D8D8D]">{item.quantity}</p>
//         <p className="text-[#8D8D8D]">{item.colors}</p>
//         <p className="text-[#8D8D8D]">₹ {item.price}</p>
//       </div>


   
//     </div>

    
// ))}

// </div>

//      </div>

//          </section>
 

//     </div>
//   )
// }

// export default CheckOut


//==================================================================
 /* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { client } from '@/sanity/lib/client';
import { useState } from 'react';
import Swal from "sweetalert2";

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  Email: string;
  total: number| string;

};

const BillingInfo = () => {


  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    Email : '',
    total: '',
  
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Gather the form data
    const orderData = {
      _type: 'order', // Define the type of document (should match a schema in Sanity)
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      zipcode: formData.zipCode,
      phone: formData.phoneNumber,
      email: formData.Email,
     
      total: formData.total,
      status: 'pending', // Initial status for the order
    };
  
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.phoneNumber) newErrors.phone = 'Phone Number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipcode = 'Zip Code is required';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      // Start loading state
      setIsLoading(true);
  
      try {
        // Send data to Sanity
        const response = await client.create(orderData); // Use client.create() to create a new document
  
        console.log('Order successfully created in Sanity:', response);
        // Handle success (e.g., show a confirmation message or redirect to a thank you page)
        // For example, you can show a success message here.

        Swal.fire({
          icon: 'success',
          title: 'Order Placed!',
          text: 'Your order has been successfully placed.',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error creating order in Sanity:', error);
        // Handle error (e.g., show an error message)

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while placing the order. Please try again.',
          confirmButtonText: 'OK',
        });
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };
  

 

  return (
    <div className="max-w-lg mx-auto  p-6 bg-gray-50 shadow-lg rounded-lg mt-6">
      <h1 className="font-bold text-3xl underline text-center mb-4">Billing Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-blue-900 ">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.Email && <p className="text-red-500 text-xs">{errors.Email}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-900">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-900 rounded-md"
          />
          {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
        </div>

        <button
  type="submit"
  className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 font-bold"
  disabled={isLoading} // Disable the button while loading
>
  
  {isLoading ? 'Placing Order...' : 'Place Order'} 
</button>
      </form>
    </div>
  );
};

export default BillingInfo;
