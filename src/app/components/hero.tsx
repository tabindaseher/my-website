import Image from "next/image";
import image2 from "@/app/assets/Image (1).png";
import image4 from "@/app/assets/Image (4).png";
import image5 from "@/app/assets/Image (5).png";
import tag1 from "@/app/assets/Frame (4).png";
import tag2 from "@/app/assets/Frame (3).png"
import image from "@/app/assets/Image.png"


export default function Hero() {
  return (
    <>
    {/*Heading*/}
    <div className="bg-[#F5F5F5] ">
      <h1 className="font-medium text-[15px] text-center text-[#111111]">Hello Nike App</h1>
      <p className="font-normal text-center">Download the app to access everything Nike.<span className="font-medium underline ">Get Your Great</span></p>
    </div>

    {/*Main Image*/}
    <Image src={image} alt="herosec"/>

    {/*Air Max pulse*/}
    <div className=" flex flex-col py-12">
      <p className="font-medium text-center leading-[24px] ">First Look</p>
      <h1 className="font-medium text-[56px] text-center leading-[56px] mt-2">Nike Air Max Pulse</h1>
      <p className="font-normal text-center leading-[24px] pr-[248.45px] pl-[248.55px] mt-6 text-[#111111]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
     —designed to push you past your limits and help you go to the max.</p>

      {/*Buutons*/}
    <div className=" flex justify-center items-center gap-[6px] mt-6 ">
     <button className="rounded-[30px] py-[7.5px] pr-[22.08px] pl-[21.5px] bg-black  ">
      <p className="text-[#FFFFFF] font-medium text-[15px] text-center">Notify Me</p>
      </button>

      <button className="rounded-[30px] py-[7.5px] pr-[22.66px] pl-[21.5px] bg-black ">
      <p className="text-[#FFFFFF] font-medium text-[15px] text-center">Shop Air Max</p>
      </button>
      </div>
    </div>
    {/*Best of Air Max*/}
    <div className="flex justify-between items-center ">
      <p className="font-medium text-[22px] pl-4">Best of Air Max</p>
   
      
        <div className=" flex  items-centerspace-x-2 gap-[12.38px] pr-4">
        <p className="font-medium text-[15px] pt-2">Shop</p>
        {/*arrows buttons*/}
        <button className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] pl-2"> 
         <Image src={tag1} alt="tag1"/> </button>
        <button className="w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] pl-3">
        <Image src={tag2} alt="tag1"/>  </button>
        </div>
      </div>

      {/* Four Shoes */}
      <div className="flex space-x-3 p-4">
        {/*shoe 1*/}
      <div className="flex flex-col">
        <Image src={image2} alt="pic1"/>
        <div className="flex justify-between">
        <p className="font-medium text-[15px] mt-2">Nike Air Max Pulse</p>
        <span className="font-medium text-[15px] mt-2 ">₹ 13 995</span>
        </div>
       <p className="text-[15px] font-normal text-[#757575]">Women's Shoes</p>
       </div>

        {/*shoe 2*/}
       <div className="flex flex-col ">
       <Image src={image2} alt="pic1"/>
        <div className="flex justify-between">
        <p className="font-medium text-[15px]mt-2">Nike Air Max Pulse</p>
        <span className="font-medium text-[15px] mt-2 ">₹ 13 995</span>
        </div>
       <p className="text-[15px] font-normal text-[#757575]">Men's Shoes</p>
       </div>

        {/*shoe 3*/}
       <div className="flex flex-col ">
       <Image src={image4} alt="pic1"/>
        <div className="flex justify-between">
        <p className="font-medium text-[15px] mt-2">Nike Air Max 97 SE</p>
        <span className="font-medium text-[15px]  mt-2">₹ 16 995</span>
        </div>
       <p className="text-[15px] font-normal text-[#757575]">Men's Shoes</p>
       </div>

         {/*shoe 4*/}
         <div className="flex flex-col ">
       <Image src={image4} alt="pic1"/>
        <div className="flex justify-between mb-2">
        <p className="font-medium text-[15px] mt-2">Nike Air Max SYSTM</p>
        <span className="font-medium text-[15px] mt-2 ">₹ 16 995</span>
        </div>
       <p className="text-[15px] font-normal text-[#757575]">Women's Shoes</p>
       </div>

   
</div>

{/*Running boy*/}
     <div className="mt-16 pl-5">
     <p className="font-medium text-[23px] leading-[28px] mb-6">Featured</p>
     <Image src={image5} alt="pic5"/>
     <div className="text-center mt-10">
    <p className="font-medium text-[54px] leading-[60px]">STEP INTO WHAT FEELS GOOD</p>
    <p className="font-normal text-[15px] leading-[24px] mt-8">Cause everyone should know the feeling of running in that perfect pair.</p>
    <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black  mt-8">
      <p className="text-[#FFFFFF] font-medium text-center">Find Your Shoe</p>
      </button>

  </div>
</div>




 
  </>
  )}
