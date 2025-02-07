
 /* eslint-disable @typescript-eslint/no-unused-vars */
 'use client'
 import { client } from '@/sanity/lib/client';
import { useState } from 'react';
 import Swal from "sweetalert2";
 import { IProduct } from '../../../types/product';
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
//=======================================

