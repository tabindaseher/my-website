 import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import cart1 from "@/app/assets/Group (1).png";
import Header from "@/app/components/header";

interface Props{
  params:{
    slug: string

  }
}

const ProductDet =async ({params}:Props) => {
  const data = await client.fetch(`*[_type == 'product' && slug.current =="${params.slug}"] {
  description, 
 productName ,
  "slug":slug.current,
    category,
    price,
    "imageUrl": image.asset->url

}`)

console.log(data);


  return (
    <>
    <Header/>
    <div className='w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center'>
      <div className='pr-8 flex  justify-center '>
    
          {/* left side */}
     <Image src={data[0].imageUrl} alt={data[0].productName}
     width={500}
     height={500}
      className='w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain'/>
        </div>

      {/* right side */}
      <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4"> 
        {/* heading */}
      <h1 className="font-medium text-[48px] leading-[48px] mb-6">{data[0].productName}  </h1>
        {/* paragraph */}
        <p className='font-normal text-[15px] leading-[28px] h-auto mb-6'>{data[0].description}</p>
        {/* amount */}
        <p className='font-medium text-[36px] leading-[28px] mb-6'>₹ {data[0].price}</p>
        {/* button */}
      <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black flex justify-center items-center">
    
        <Image src={cart1} alt='cart'  className='pr-1'/>
        <Link href="/cart">
      <p className="text-[#FFFFFF] font-medium text-[15px] text-center ">Shop Air Max</p></Link>
 
      </button>
      </div>
      </div> 
   
  </>
  )
}

export default ProductDet
