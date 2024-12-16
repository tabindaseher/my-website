
import Image from "next/image";
import tag1 from "@/app/assets/Frame (4).png";
import tag2 from "@/app/assets/Frame (3).png";
import pic6 from "@/app/assets/Image (6).png";
import pic7 from "@/app/assets/Image (7).png";
import pic8 from "@/app/assets/Image (8).png";
import pic9 from "@/app/assets/Image (9).png";

 const GearUp = () => {
  return (
    <>
    <div className="w-fill h-[561px] top-[2868.36px] left-[48px] mt-6">
         <p className="font-medium text-[23px] leading-[28px] mb-6 p-6">Gear Up</p>
         {/* shop men women arrow button */}
         <div className="flex top-[2px] left-[407px] relative items-center gap-2">
         <p>Shop Men&apos; s</p>
         <button className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] pl-2"> 
         <Image src={tag1} alt="tag1"/> </button>
        <button className="w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] pl-3">
        <Image src={tag2} alt="tag1"/>  </button>

        <div className="flex top-[2px] left-[407px] relative items-center gap-2">
         <p>Shop Women&apos; s</p>
         <button className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] pl-2"> 
         <Image src={tag1} alt="tag1"/> </button>
        <button className="w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] pl-3">
        <Image src={tag2} alt="tag1"/>  </button>
        </div>
        </div>

      {/* Four pictures of */}
 
        <section className="flex  my-4 px-4 ">
      
        <div className="flex  gap-4">
   
   {/* first pic */}
          <div >
            <Image src={pic6} alt="product 1 nike shoes" />
            <div className="flex justify-between">
              <div className="first image">
                <h3 className="font-poppins text-[15px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <span className="text-[#737373] font-poppins text-[15px]">
                Men&apos; s Short-Sleeve Running Top
                </span> 
              </div>
              <p className="text-[15px] font-poppins">₹ 3 895</p>
            </div>
          </div>

   {/* second pic */}
          <div className="flex flex-col ">
            <Image src={pic7} alt="product 2 nike shoes" />
            <div className="flex justify-between">
              <div className="second">
                <h3 className="font-poppins text-[1.1em]">Nike Dri-FIT Challenger</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                Men&apos; s 18cm (approx.) 2-in-1 Versatile Shorts
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Durable leather finish</p>
              </div>
              <p className="text-[1em] font-poppins">₹ 2 495</p>
            </div>
          </div>

          {/* Third pic  */}
          
          <div className="flex flex-col gap-2">
            <Image src={pic8} alt="product 3 kids shoes" />
            <div className="flex justify-between">
              <div className="third">
                <h3 className="font-poppins text-[1.1em]">Nike Dri-FIT ADV Run Division</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                Women&apos; s Long-Sleeve Running Top
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Lightweight and cozy</p>
              </div>
              <p className="text-[1em] font-poppins">₹ 5 295</p>
            </div>
          </div>

   
   {/* fourth pic */}
          <div className="flex flex-col gap-2">
            <Image src={pic9} alt="product 4 nike shoes" />
            <div className="flex justify-between">
              <div className="four">
                <h3 className="font-poppins text-[1.1em]">Nike Fast</h3>
                <span className="text-[#737373] font-poppins text-[0.8em]">
                  Women&apos;s Shoes for Running
                </span>
                <p className="text-[#737373] font-poppins text-[0.8em]">Enhanced grip and flexibility</p>
              </div>
              <p className="text-[1em] font-poppins">$197.00</p>
            </div>
          </div>
        </div>
      </section>
 </div>
 </>
  )};
  export default GearUp