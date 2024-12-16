import Image from "next/image"
import image10 from "@/app/assets/Image (10).png"
import image11 from "@/app/assets/Frame (1).png"
const Jordan = () => {
  return (
    <>
        <div className="mt-16 pl-5">
       <p className="font-medium text-[22px] leading-[28px] mb-6">Don&apos; t Miss</p>
       {/* Image */}
      <Image src={image10} alt="pic5"/>
      {/* flight Essential Heading */}
      <div className="text-center mt-10">
       <p className="font-medium text-[52px] leading-[60px]">FLIGHT ESSENTIALS</p>

       {/* para */}
      <p className="font-normal text-[15px] leading-[24px] mt-8">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>

      {/* button of shop */}
      <button className="rounded-[30px] py-[7.5px] pr-[21.88px] pl-[21.5px] bg-black  mt-8">
      <p className="text-[#FFFFFF] font-medium text-center">Shop</p>
      </button>

  </div>
    </div>
    {/* Essential */}

    <div className="mt-16 pl-5">
      {/* The Essential */}
    <p className="font-medium text-[22px] leading-[28px] mb-6">The Essentials</p>
    {/* Images  */}
     <Image src={image11} alt="pic5"/>
    </div>

    </>
  )
}
export default Jordan