'use client'
import Image from "next/image";
import tag1 from "@/app/assets/Frame (4).png";
import tag2 from "@/app/assets/Frame (3).png";
import pic6 from "@/app/assets/Image (6).png";
import pic7 from "@/app/assets/Image (7).png";
import pic8 from "@/app/assets/Image (8).png";
import pic9 from "@/app/assets/Image (9).png";
import { useRouter } from 'next/navigation';

const GearUp = () => {
  const router = useRouter(); // Next.js router hook for navigation
  
  // Function to handle redirection
  const handleRedirect = (category : string) => {
    if (category === 'men') {
      router.push('/shop/men'); // Redirect to men's shop page
    } else if (category === 'women') {
      router.push('/shop/women'); // Redirect to women's shop page
    }
  };

  return (
    <>
      <div className="w-full h-auto mt-6 px-4 md:px-8 lg:px-12">
        <p className="font-medium text-[23px] leading-[28px] mb-6 text-center md:text-left">Gear Up</p>

        {/* men women section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* Shop Men Women Arrow Button */}
          <div className="hidden md:flex justify-between items-center gap-2 pl-10 lg:pl-[22rem]">
            <p className="text-sm md:text-base">Shop Men&apos;s</p>
            <button
              className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] flex items-center justify-center"
              onClick={() => handleRedirect('men')} // Trigger redirection to men's section
            >
              <Image src={tag1} alt="Men's Tag" />
            </button>
            <button
              className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] flex items-center justify-center"
              onClick={() => handleRedirect('women')} // Trigger redirection to women's section
            >
              <Image src={tag2} alt="Women's Tag" />
            </button>
          </div>

          {/* Shop Women */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-sm md:text-base">Shop Women&apos;s</p>
            <button
              className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] pl-2"
              onClick={() => handleRedirect('women')} // Trigger redirection to women's section
            >
              <Image src={tag1} alt="Women's Tag" />
            </button>
            <button
              className="w-[48px] h-[48px] rounded-full bg-[#E5E5E5] pl-3"
              onClick={() => handleRedirect('men')} // Trigger redirection to men's section
            >
              <Image src={tag2} alt="Men's Tag" />
            </button>
          </div>
        </div>
      </div>


  {/* Product Grid Section */}
  <section className="my-4 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* First Product */}
      <div className="flex flex-col gap-2">
        <Image src={pic6} alt="Nike Dri-FIT ADV TechKnit Ultra" width={300} height={400} />
        <div className="md:flex justify-between">
          <div>
            <h3 className="font-poppins text-[15px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
            <span className="text-[#737373] font-poppins text-[15px]">
              Men&apos;s Short-Sleeve Running Top
            </span>
          </div>
          <p className="text-[15px] font-poppins">₹ 3,895</p>
        </div>
      </div>

      {/* Second Product */}
      <div className="flex flex-col gap-2">
        <Image src={pic7} alt="Nike Dri-FIT Challenger" width={300} height={400} />
        <div className="md:flex justify-between">
          <div>
            <h3 className="font-poppins text-[15px]">Nike Dri-FIT Challenger</h3>
            <span className="text-[#737373] font-poppins text-[0.8em]">Men&apos;s 18cm 2-in-1 Versatile Shorts</span>
          </div>
          <p className="text-[1em] font-poppins">₹ 2,495</p>
        </div>
      </div>

      {/* Third Product */}
      <div className="flex flex-col gap-2">
        <Image src={pic8} alt="Nike Dri-FIT ADV Run Division" width={300} height={400} />
        <div className="md:flex justify-between">
          <div>
            <h3 className="font-poppins text-[1.1em]">Nike Dri-FIT ADV Run Division</h3>
            <span className="text-[#737373] font-poppins text-[0.8em]">Women&apos;s Long-Sleeve Running Top</span>
            <p className="text-[#737373] font-poppins text-[0.8em]">Lightweight and cozy</p>
          </div>
          <p className="text-[1em] font-poppins">₹ 5,295</p>
        </div>
      </div>

      {/* Fourth Product */}
      <div className="flex flex-col gap-2">
        <Image src={pic9} alt="Nike Fast Women's Running Shoes" width={300} height={400} />
        <div className="md:flex justify-between">
          <div>
            <h3 className="font-poppins text-[1.1em]">Nike Fast</h3>
            <span className="text-[#737373] font-poppins text-[0.8em]">Women&apos;s Shoes for Running</span>
            <p className="text-[#737373] font-poppins text-[0.8em]">Enhanced grip and flexibility</p>
          </div>
          <p className="text-[1em] font-poppins">$197.00</p>
        </div>
      </div>

    </div>
  </section>
</>

  )};
  export default GearUp