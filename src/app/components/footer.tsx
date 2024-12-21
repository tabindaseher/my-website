import { IoLogoFacebook } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";


 const Footer = () => {
  return (
    < div >
     <div className="w-full bg-[#111111]  py-10 px-6 md:px-8 lg:px-16 mt-28">
     <div className="flex flex-wrap justify-between gap-10 max-w-screen-lg mx-auto">
      <div className="flex flex-wrap justify-center gap-16">

             {/* find a store list */}
        <div className="flex flex-col gap-5">

          <p className="font-normal text-[10px] leading-[32.67px] text-white ">Find A Store</p>
          <ul className="flex flex-col gap-2">
          <li  className="font-normal text-[10px] leading-[32.67px] text-white ">Become A Member</li>
          <li  className="font-normal text-[10px] leading-[32.67px] text-white ">Sign Up for Email</li>
          <li  className="font-normal text-[10px] leading-[32.67px] text-white ">Send Us Feedback</li>
          <li  className="font-normal text-[10px] leading-[32.67px] text-white ">Student Discounts</li>
        </ul>
        </div>

                {/* get help list */}

        <div className="flex flex-col gap-5">
        <p className="font-normal text-[10px] leading-[24px] text-white tracking-[0.5px]">Get Help</p>
        <ul className="flex flex-col gap-2">
          <li  className="font-normal text-[11px] leading-[28px] text-[#7E7E7E]">Order Status</li>
          <li  className="font-normal text-[12px] leading-[28px] text-[#7E7E7E]">Delivery</li>
          <li  className="font-normal text-[12px]  leading-[28px] text-[#7E7E7E] ">Returns</li>
          <li  className="font-normal text-[11px]  leading-[28px] text-[#7E7E7E] ">Payment Options</li>
          <li  className="font-normal text-[11px]  leading-[28px] text-[#7E7E7E] ">Contact Us On Nike.com Inquiries</li>
          <li  className="font-normal text-[11px]  leading-[28px] text-[#7E7E7E] ">Contact Us On All Other Inquiries</li>
        </ul>
        </div>

        {/* About nike list */}

        <div className="flex flex-col gap-5">
        <p className="font-normal text-[10px] leading-[24px] text-white tracking-[0.5px]">About Nike</p>
        <ul className="flex flex-col gap-2">
          <li  className="font-normal text-[12px] leading-[28px] text-[#7E7E7E]">News</li>
          <li  className="font-normal text-[12px] leading-[28px] text-[#7E7E7E]">Careers</li>
          <li  className="font-normal text-[11px]  leading-[28px] text-[#7E7E7E] ">Investors</li>
          <li  className="font-normal text-[11px]  leading-[28px] text-[#7E7E7E] ">Sustainability</li>
         
        </ul>
        </div>
</div>
         {/* all logo */}
                <div className="flex gap-5 flex-wrap justify-center">
                    <FaTwitter  className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <IoLogoFacebook  className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <TfiYoutube className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                    <FaGithubSquare  className="py-2 px-2 bg-white rounded-full bg-opacity-20" size={35}/>
                </div>




</div>
             {/* inner part of footer */}
                 <div className="flex justify-between flex-wrap items-center max-w-screen-lg mt-14 mx-auto">
                <div className="text-[#838383] font-normal text-[12px] flex gap-7 items-center"><span className="flex gap-4 text-white"><IoLocationSharp size={25}/> Pakistan</span><h3 className="flex items-center gap-2">< FaRegCopyright size={15}/> Nike, Inc. 2022. All rights reserved.</h3></div>
                <ul className="flex gap-5 flex-wrap">
                    <li className="text-[0.8em] text-[#737373]">Guides</li>
                    <li className="text-[0.8em] text-[#737373]">Terms & Sales</li>
                    <li className="text-[0.8em] text-[#737373]">Terms & Use</li>
                    <li className="text-[0.8em] text-[#737373]">Nike Privacy Policy</li>
                </ul>
            </div>
</div>
        </div>

 
  )
};
export default Footer
