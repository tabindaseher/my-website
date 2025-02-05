


import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import cart1 from "@/app/assets/Group (1).png"; // Cart icon
import Header from "@/app/components/header";


// Define types for the page props
interface Props {
  params: {
    slug: string;
  };
}

// Fetch product details based on the slug
const ProductDet = async ({ params }: Props) => {
  const data = await client.fetch(`
    *[_type == 'product' && slug.current == "${params.slug}"] {
      description, 
      productName,
  

      price,
      "imageUrl": image.asset->url
    }
  `);

  
  if (!data || data.length === 0) {
    return <div>Product not found</div>;
  }

 
  const product = data[0];

  return (
    <>
      <Header />
      <div className="w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center">
        {/* Left side - Product Image */}
        <div className="pr-8 flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.productName}
            width={500}
            height={500}
            className="w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain"
          />
        </div>

        {/* Right side - Product Information */}
        <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4">
          <h1 className="font-medium text-[48px] leading-[48px] mb-6">{product.productName}</h1>
          <p className="font-normal text-[15px] leading-[28px] h-auto mb-6">{product.description}</p>
          <p className="font-medium text-[36px] leading-[28px] mb-6">₹ {product.price}</p>

          {/* Add to Cart Button */}
          <button className="rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-black flex justify-center items-center">
            <Image src={cart1} alt="cart" className="pr-1" />
            <Link href="/cartpage">
              <p className="text-[#FFFFFF] font-medium text-[15px] text-center">Shop Air Max</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDet;
