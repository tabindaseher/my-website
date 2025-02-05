

 const Lists = () => {
  return (
    <div className='w-full '>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 top-[96px] relative pl-4">
  {/* Icons */}
        <ul >
        <h3 className='font-medium text-[15px] leading-6  text-[#111111] mb-8'>Icons</h3>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Air Force 1</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Huarache</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Air Max 90</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Air Max 95</li>
        </ul>

{/* shoes */}
        <ul>
        <h3 className='font-medium text-[15px] leading-6 mb-8'>Shoes</h3>
            <li className='font-medium text-[15px] leading-6 text-[#757575] mt-2' >All Shoes</li>
            <li className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Custom Shoes</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Jordan Shoes</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Running Shoes</li>
        </ul>

{/* Clothing */}

        <ul>
        <h3 className='font-medium text-[15px] leading-6 mb-8  '>Clothing</h3>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>All Clothing</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Modest Wear</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Hoodies & Pullovers</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Shirts & Tops</li>
        </ul>

{/* Kids */}

        <ul>
        <h3 className='font-medium text-[15px] leading-6  mb-8'>Kids&apos; </h3>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Infant & Toddler Shoes</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Kids&apos; Shoes</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Kids&apos; Jordan Shoes</li>
            <li  className='font-medium text-[15px] leading-6 text-[#757575] mt-2'>Kids&apos; Basketball Shoes</li>
        </ul>
        </div>

    </div>
  )
};
export default Lists
