import Image from "next/image"
import image10 from "@/app/assets/Image (10).png"
import image11 from "@/app/assets/Frame (1).png";
import Link from "next/link";
const Jordan = () => {
  return (
    <>
        <div className="mt-16 px-5">
       <p className="font-medium text-[22px] leading-[28px] mb-6">Don&apos; t Miss</p>
       {/* Image */}
      <Image src={image10} alt="pic5" className="w-full h-auto object-cover rounded-md"/>
      {/* flight Essential Heading */}
      <div className="text-center mt-10">
       <p className="font-medium text-[32px] md:text-[40px] lg:text-[52px] leading-tight">FLIGHT ESSENTIALS</p>

       {/* para */}
      <p className="font-normal text-[14px] md:text-[16px] leading-[24px] mt-4">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>

      {/* button of shop */}
      <button className="rounded-[30px] py-[7.5px] pr-[21.88px] pl-[21.5px] bg-black  mt-8">
      <Link href="/product"> 
      <p className="text-[#FFFFFF] font-medium text-[14px] md:text-[16px] text-center">Shop</p>
      </Link>
      </button>

  </div>
    </div>
    {/* Essential */}

    <div className="mt-16 px-5 ">
      {/* The Essential */}
    <p className="font-medium text-[22px] leading-[28px] mb-6">The Essentials</p>
    {/* Images  */}
     <Image src={image11} alt="pic5" className="w-full h-auto object-cover rounded-md"/>
    </div>

    </>
  )
}
export default Jordan