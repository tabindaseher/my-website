

// import { client } from "@/sanity/lib/client";
// import Image from "next/image";


// import cart1 from "@/app/assets/Group (1).png"; // Cart icon
// import Header from "@/app/components/header";
// import Link from "next/link";
// import React from "react";
 

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// const page = async ({params}:Props) => {
//   const { slug } = await params
// const data = await client.fetch(`*[_type == "product" && slug.current =="${params.slug}"]{
//   description, 
//  _id,
//     productName ,
  
//    "slug":slug.current,
//     price,
//     "imageUrl": image.asset->url
// }`)


// console.log(data);

//   return (
//         <>
//       <Header />
//       <div className="w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center">
//         <div className="pr-8 flex justify-center">
//           <Image
//             src={data[0].imageUrl}
//             alt={data[0].productName}
//             width={500}
//             height={500}
//             className="w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain"
//           />
//         </div>
//         <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4">
//           <h1 className="font-medium text-[48px] leading-[48px] mb-6">{data[0].productName}</h1>
//           <p className="font-normal text-[15px] leading-[28px] h-auto mb-6">{data[0].description}</p>
//           <p className="font-medium text-[36px] leading-[28px] mb-6">₹ {data[0].price}</p>

//           <Link href={"/cartpage"} >
//      <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black flex justify-center items-center">
//             <Image src={cart1} alt="cart" className="pr-1" />
//             <p className="text-[#FFFFFF] font-medium text-[15px] text-center">Shop Air Max</p>
//           </button>
//           </Link>
 
//         </div>
//       </div>
//     </>
//   )
// }
// export default page




import { client } from "@/sanity/lib/client";
import Image from "next/image";
import cart1 from "@/app/assets/Group (1).png"; // Cart icon
import Header from "@/app/components/header";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Props) => {
  // Wait for params to resolve if necessary (this might solve the issue)
  const { slug } = await params; // Ensure this is awaited

  const data = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"]{
      description, 
      _id,
      productName,
      "slug": slug.current,
      price,
      "imageUrl": image.asset->url
    }`
  );

  console.log(data);

  return (
    <>
      <Header />
      <div className="w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center">
        <div className="pr-8 flex justify-center">
          <Image
            src={data[0].imageUrl}
            alt={data[0].productName}
            width={500}
            height={500}
            className="w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain"
          />
        </div>
        <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4">
          <h1 className="font-medium text-[48px] leading-[48px] mb-6">{data[0].productName}</h1>
          <p className="font-normal text-[15px] leading-[28px] h-auto mb-6">{data[0].description}</p>
          <p className="font-medium text-[36px] leading-[28px] mb-6">₹ {data[0].price}</p>

          <Link href={"/cartpage"}>
            <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black flex justify-center items-center">
              <Image src={cart1} alt="cart" className="pr-1" />
              <p className="text-[#FFFFFF] font-medium text-[15px] text-center">Shop Air Max</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
