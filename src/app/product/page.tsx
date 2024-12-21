
import Image from 'next/image'
import shoe from "@/app/assets/Rectangle.png"
import cart1 from "@/app/assets/Group (1).png";
import Header from '../components/header'

export default function Product_Details () {
  return (
    <>
    <Header/>
    <div className='w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center'>
      <div className='pr-8 flex  justify-center '>
    
          {/* left side */}
        <Image src={shoe} alt='shoe' className='w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain'/>
        </div>

      {/* right side */}
       <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4">
        {/* heading */}
        <h1 className="font-medium text-[48px] leading-[48px] mb-6">Nike Air Force 1 
        PLT.AF.ORM  </h1>
        {/* paragraph */}
        <p className='font-normal text-[15px] leading-[28px] h-auto mb-6'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
        {/* amount */}
        <p className='font-medium text-[36px] leading-[28px] mb-6'>₹ 8 695.00</p>
        {/* button */}
      <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black flex justify-center items-center">
        <Image src={cart1} alt='cart1' className='pr-1'/>
      <p className="text-[#FFFFFF] font-medium text-[15px] text-center pl-1">Shop Air Max</p>
      </button>
      </div>
      </div>
   
  </>
  )
}
