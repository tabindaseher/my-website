import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import cart1 from "@/app/assets/Group (1).png";
import Header from "@/app/components/header";

// Generate static paths for dynamic slugs
export async function generateStaticParams() {
  const data = await client.fetch(`*[_type == 'product'] { "slug": slug.current }`);
  return data.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

const ProductDet = async ({ params }: { params: { slug: string } }) => {
  // Fetch product data based on dynamic slug
  const data = await client.fetch(`
    *[_type == 'product' && slug.current == "${params.slug}"] {
      description, 
      productName,
      "slug": slug.current,
      category,
      price,
      "imageUrl": image.asset->url
    }
  `);

  if (!data || data.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="w-full h-auto top-[96px] relative flex flex-col md:flex-row justify-center">
        <div className="pr-8 flex justify-center">
          {/* Left side */}
          <Image
            src={data[0]?.imageUrl ?? "/default-image.jpg"}
            alt={data[0]?.productName ?? "Default Product"}
            width={500}
            height={500}
            className="w-[653px] h-[653px] bg-[#F5F5F5] flex items-center justify-center object-contain"
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-[376px] h-auto md:h-[1041px] relative p-4">
          {/* Heading */}
          <h1 className="font-medium text-[48px] leading-[48px] mb-6">{data[0]?.productName}</h1>
          {/* Paragraph */}
          <p className="font-normal text-[15px] leading-[28px] h-auto mb-6">{data[0]?.description}</p>
          {/* Amount */}
          <p className="font-medium text-[36px] leading-[28px] mb-6">₹ {data[0]?.price}</p>
          {/* Button */}
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




