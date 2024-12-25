import Image from "next/image";
import logo from "@/app/assets/Image (15).png";
import cartIcon from "@/app/assets/Vector (2).png";
import { TbMessage } from "react-icons/tb";
import icon from "@/app/assets/Frame (10).png";
import pic6 from "@/app/assets/Image (6).png";
import image4 from "@/app/assets/Image (4).png";

const CheckOut = () => {
  return (
    < div>
    {/* header */}
        <header className="flex justify-between px-2 mx-w-3xl mx-auto items-center h-auto mt-6">
            {/* logo */}
            <Image src={logo} alt="img" className=" h-[21.75px]"/> 
            {/* nav icons */}
            <div className=" space-x-8 items-center px-4 hidden md:flex">
                <p>000 800 100 9538</p>
                <TbMessage/>
                <Image src={cartIcon} alt="cart" aria-label="cart" className="w-[16.5px] h-[16.5px]"/>
            </div>
         </header>

         {/* hero section */}
         <section className="w-full flex flex-col sm:flex-row sm:justify-between h-auto px-4 sm:px-44">
         {/* left side */}
            {/* left side  */}
            <div className="w-full sm:w-[440px] py-8">
                <h1 className="font-medium text-xl py-2">How would you like to get your order?</h1>
                <p className="font-normal text-sm text-[#757575] py-2">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                <div className="border-[2px] rounded-xl py-[29px] gap-6 border-black flex">
                <Image src={icon} alt="img"  className="ml-6"/> 
                    <p>Deliver It</p>
                </div>
                {/* form */}
                <div className="w-full sm:w-[440px] mt-8">
                    <h2 className="font-medium text-xl py-8">Enter your name and address:</h2>
                    <div className="flex flex-col  space-y-3">
                    
                    <label className="py-4 pl-4 pr-[341px] rounded-[4px] border " >
                        <p>First Name</p>
                    </label>

                    <label className="py-4 pl-4 pr-[341px] rounded-[4px]  border">
                        <p>Last Name</p>
                    </label>
                    <label className="py-4 pl-4  rounded-[4px] border" >
                        <p>Address Line 1</p>
                    </label>
                    <label className="py-4 pl-4 rounded-[4px] border">
                        <p>Address Line 2</p>
                    </label>
                    <label className="py-4 pl-4 rounded-[4px] border">
                    <p>Address Line 3</p>
                    </label>
              
                   <div className=" flex gap-4">
                    <label  className="py-4 pl-4  rounded-[4px] border  w-[211.9px] ">
                        <p>Postal Code</p>
                    </label>
                    <label  className="py-4 pl-4  rounded-[4px] border w-[211.9px] ">
                   <p> Locality</p>
                    </label>
                </div>

                <div className=" flex gap-4">
                    <label className="py-4 pl-4  rounded-[4px] border  w-[211.9px] ">
                    <p>State/Terrority</p>
                    </label>
                    <label className="py-4 pl-4  rounded-[4px] border w-[211.9px] ">
                    <p>India</p>
                    </label>
                </div>
                <div className="flex items-center gap-4">
                <div className="w-[17px] h-[17px] border-[1px] rounded-[4px]"></div>
                <p>Save this address to my profile</p>
                </div>

                <div className="flex items-center gap-4">
                <div className="w-[17px] h-[17px] border-[1px] bg-[#CCCCCC] rounded-[4px]"></div>
                <p>Make this my preferred address</p>
                </div>

                <h2 className="font-medium text-xl py-8">What&apos;s your contact information?</h2>
                <label className="py-4 pl-4  rounded-[4px] border">
                    <p>Email</p>
                </label>
                <p className="text-[#757575] font-normal text-xs">A confirmation email will be sent after checkout.</p>
                <label className="py-4 pl-4 rounded-[4px] border">
                    <p>Phone Number</p>
                </label>
                <p className="text-[#757575] font-normal text-xs">A carrier might contact you to confirm delivery.</p>
                <h2 className="font-medium text-xl py-8">What&apos;s your PAN?</h2>
                <label className="py-4 pl-4  rounded-[4px] border">
                    <p>PAN</p>
                </label>
                <p className="text-[#757575] font-normal">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
              
                
                <div className="flex items-center gap-4 mt-4">
                <div className="w-[17px] h-[17px] border-[1px] rounded-[4px]"></div>
                <p className="text-[#757575] font-normal text-xs">Save PAN details to Nike Profile</p>
                </div>

                <div className="flex  gap-4 py-8 ">
                <div className="w-[38px] h-[17px] border-[1px] rounded-[4px]"></div>
                <p className="text-[#757575] font-normal text-xs">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</p>
                 </div>
 
                <div className="py-4 pb-4 bg-[#F5F5F5] rounded-[30px] h-16 text-center">
                    <p className="text-[#757575] ">continue</p></div>
                <div className="py-8">
                <div className=" border-t pt-4 py-2"></div>
                <h3 className="text-[#111111] font-medium text-[20px] py-2">Delivery</h3>
                <div className=" border-t pt-4 py-2"></div>
                <h3 className="font-medium text-xl py-2 text-[#757575]">Shipping</h3>
                <div className=" border-t pt-4 py-2"></div>
                <h3 className="font-medium text-xl py-2 text-[#757575]">Billing</h3>
                <div className=" border-t pt-4 py-2"></div>
                <h3 className="font-medium text-xl py-2 text-[#757575]">Payment</h3>
                </div>

                    </div>
                  
            </div>
            </div>

            {/* right side  */}
            <div className="w-full sm:w-[350.67px] mx-auto p-6 sm:p-8 h-auto">
  {/* Summary Heading*/}
    <div className="space-y-4 mb-auto ">
    <h2 className="text-[18px] sm:text-[21px] font-medium leading-[28px] sm:leading-[33px]">Summary</h2>

    {/* Subtotal */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Subtotal</p>
      <p className="font-normal text-base">₹ 20 890.00</p>
    </div>

    {/* Delivery & Handling */}
    <div className="flex justify-between items-center">
      <p className="font-normal text-base">Estimated Delivery & Handling</p>
      <p className="font-normal text-base">Free</p>
    </div>

    {/* Total amount */}
    <div className="flex justify-between items-center border-t pt-4">
      <p className="font-normal text-[14px]">Total</p>
      <p className="font-normal text-[14px]">₹ 20 890.00</p>
      </div>
    
  </div>
{/* vertical line */}
  <div className="flex justify-between items-center border-t pt-4"></div>
  {/* reflect */}
<p className="font-normal text-[9px] mt-4">(The total reflects the price of your order, including all duties and taxes)</p>
<h3 className="font-bold text-[15px] mt-4">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
{/* Men short-Sleeve  */}

<div className="flex mt-4 gap-1 flex-col sm:flex-row">
<Image src={pic6} alt="Nike Product" className="w-full sm:w-[208px] h-auto sm:h-[208px]"></Image>
<div>
<p className="font-normal text-[13px]">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
<p className="text-[#8D8D8D]">Qty 1</p>
<p className="text-[#8D8D8D]">Size L</p>
<p className="text-[#8D8D8D]">₹ 3 895.00</p>
</div>
</div>


{/* foot image */}
<div className="flex mt-4 gap-1 flex-col sm:flex-row">
<Image src={image4} alt="pic1" className="w-full sm:w-[208px] h-auto sm:h-[208px]"/>
<div className="font-normal text-[13px]">
<p>Nike Air Max 97 SE Men's Shoes</p>
<p className="text-[#8D8D8D]">Qty 1</p>
<p className="text-[#8D8D8D]">Size UK 8</p>
<p className="text-[#8D8D8D]">₹ 16 995.00</p>
</div>
</div>

     </div>
         </section>

    </div>
  )
}

export default CheckOut