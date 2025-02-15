

import Image from "next/image";
import image2 from "@/app/assets/Image (1).png";
import image4 from "@/app/assets/Image (4).png";
import image5 from "@/app/assets/Image (5).png";
import tag1 from "@/app/assets/Frame (4).png";
import tag2 from "@/app/assets/Frame (3).png";
import image from "@/app/assets/Image.png";
import Link from "next/link";


export default function Hero() {
   
  return (
    <>
      {/* Heading */}
      <div className="bg-[#F5F5F5] px-4 py-4">
        <h1 className="font-medium text-center text-[#111111] sm:text-[18px] text-[15px]">
          Hello Nike App
        </h1>
        <p className="font-normal text-center sm:text-[16px] text-[14px]">
          Download the app to access everything Nike.
          <span className="font-medium underline">Get Your Great</span>
        </p>
      </div>

      {/* Main Image */}
      <div className="w-full">
        <Image
          src={image}
          alt="Showcasing Nike Air Show"
          className="w-full h-auto object-cover"
          width={1440} 
          height={600}
        />
      </div>

      {/* Air Max Pulse */}
      <div className="flex flex-col items-center py-8 px-6 md:py-12">
        <p className="font-medium text-center text-[16px] md:text-[18px] leading-[24px]">
          First Look
        </p>
        <h1 className="font-medium sm:text-[48px] md:text-[56px] text-center sm:leading-[40px] leading-[56px] mt-2">
          Nike Air Max Pulse
        </h1>
        <p className="font-normal text-center leading-[24px] text-[14px] md:text-[16px] mt-6 text-[#111111] max-w-xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button className="rounded-[30px] py-[7.5px] px-[22px] bg-black">
            <p className="text-[#FFFFFF] font-medium text-[15px] text-center">
              Notify Me
            </p>
          </button>

          <button className="rounded-[30px] py-[7.5px] px-[22px] bg-black">
            <p className="text-[#FFFFFF] font-medium text-[15px] text-center">
              Shop Air Max
            </p>
          </button>
        </div>
      </div>

      {/* Best of Air Max */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4">
        <p className="font-medium text-[18px] md:text-[22px]">Best of Air Max</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <p className="font-medium text-[14px] md:text-[15px]">Shop</p>
          {/* Arrow buttons */}
          <button
            className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] justify-center items-center pl-2"
            aria-label="Previous-items"
          >
            <Image src={tag1} alt="Previous Tag" width={24} height={24} />
          </button>
          <button
            className="w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] justify-center items-center pl-2"
            aria-label="Next-items"
          >
            <Image src={tag2} alt="Next Tag" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Four Shoes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* Shoe 1 */}
        <div className="flex flex-col">
          <Image
            src={image2}
            alt="Nike Air Max Pulse"
            className="w-full h-auto object-cover"
            width={300}
            height={400}
          />
          <div className="flex justify-between mt-2">
            <p className="font-medium text-[15px]">Nike Air Max Pulse</p>
            <span className="font-medium text-[15px]">₹ 13,995</span>
          </div>
          <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
        </div>

        {/* Shoe 2 */}
        <div className="flex flex-col">
          <Image
            src={image2}
            alt="Nike Air Max Pulse"
            className="w-full h-auto object-cover"
            width={300}
            height={400}
          />
          <div className="flex justify-between mt-2">
            <p className="font-medium text-[15px]">Nike Air Max Pulse</p>
            <span className="font-medium text-[15px]">₹ 13,995</span>
          </div>
          <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
        </div>

        {/* Shoe 3 */}
        <div className="flex flex-col">
          <Image
            src={image4}
            alt="Nike Air Max 97 SE"
            className="w-full h-auto object-cover"
            width={300}
            height={400}
          />
          <div className="flex justify-between mt-2">
            <p className="font-medium text-[15px]">Nike Air Max 97 SE</p>
            <span className="font-medium text-[15px]">₹ 16,995</span>
          </div>
          <p className="text-[15px] font-normal text-[#757575]">Men&apos;s Shoes</p>
        </div>

        {/* Shoe 4 */}
        <div className="flex flex-col">
          <Image
            src={image4}
            alt="Nike Air Max SYSTM"
            className="w-full h-auto object-cover"
            width={300}
            height={400}
          />
          <div className="flex justify-between mt-2">
            <p className="font-medium text-[15px]">Nike Air Max SYSTM</p>
            <span className="font-medium text-[15px]">₹ 16,995</span>
          </div>
          <p className="text-[15px] font-normal text-[#757575]">Women&apos;s Shoes</p>
        </div>
      </div>

      {/* Running Boy */}
      <div className="mt-16 px-5">
        <p className="font-medium text-[23px] leading-[28px] mb-6">Featured</p>
        <Image
          src={image5}
          alt="Running Boy"
          className="w-full h-auto object-cover"
          width={1440}
          height={600}
        />
        <div className="text-center mt-10 px-2 lg:px-0">
          <p className="font-medium text-[36px] sm:text-[54px] leading-[42px] sm:leading-[60px]">
            STEP INTO WHAT FEELS GOOD
          </p>
          <p className="font-normal text-[15px] leading-[24px] mt-8 max-w-2xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="rounded-[30px] px-2 py-[7.5px] bg-black mt-8">
            <Link href="/allProduct">
              <p className="text-[#FFFFFF] font-medium text-center">Find Your Shoe</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}


 
  
