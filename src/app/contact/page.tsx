import { VscThumbsupFilled } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdEditLocation } from "react-icons/md";
import Image from "next/image"
import searchIcon from "@/app/assets/Vector (3).png";
import Header from '../components/header'

const ContactUs = () => {
    return (
      <div>   
        <Header/>
              {/* get help heading with box */}
              <h1 className="font-medium text-4xl leading-[36px] text-center">GET HELP</h1>
              <div className="flex justify-center mt-4">
              <div className="rounded-lg h-[56px] w-[457.33px] flex border justify-between items-center pl-2">
                <p>What can we help you with?</p>
                <Image src={searchIcon} alt="search" className="w-[24px] h-[18px] pr-2 "/>
              </div>
              </div>

              {/* right side  */}
              <div className=" flex">
              <div className="w-[939.75px] h-auto ">
                <h2 className="font-medium text-[28px] mt-6 ml-6 ">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p className="font-normal text-[15px] mt-6 ml-6">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <div className="pl-8 font-normal text-[15px] mt-6 ml-6">
                  <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                  <p>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                  <p>Apple Pay</p>
                </div>
                {/* nike members with buttons */}
               
                  <p className="font-normal text-base  mt-6 ml-6"><span className="font-medium text-base underline">Nike Members</span>can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                  <div className=" flex  items-center gap-[6px]  mt-6 ml-6 ">
                   <button className="rounded-[30px] py-[7.5px] pr-[21.34px] pl-[21.5px] bg-black  ">
                     <p className="text-[#FFFFFF] font-medium text-base text-center">JOIN US</p>
                   </button>

                   <button className="rounded-[30px] py-[7.5px] pr-[21.34px] pl-[21.5px] bg-black ">
                     <p className="text-[#FFFFFF] font-medium text-base text-center">SHOP NIKE</p>
                   </button>
                </div>
        
                {/* faqs */}
               
                <div className="mt-6 ml-6">
                  <h1 className="font-medium text-xl">FAQs</h1>
                  <p className="font-bold text-base">Does my card need international purchases enabled?</p>
                  <p className="font-normal text-base">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                  <p className="font-normal text-[15px] mt-4">Please note, some banks may charge<span className="font-medium underline"> a small transaction fee </span>for international orders.</p>
                  <p className="font-bold text-base mt-4">Can I pay for my order with multiple methods?</p>
                  <p className="font-normal text-base">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                  <p className="font-bold text-base mt-4">What payment method is accepted for SNKRS orders?</p>
                  <p className="font-normal text-base">You can use any accepted credit card to pay for your SNKRS order.</p>
                  <p className="font-bold text-base mt-4">Why don&apos;t I see Apple Pay as an option?</p>
                  <p className="font-normal text-base w-[922.04px]">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
                  <p className="font-normal text-base mt-6">Was this answer helpful?</p>
                  <div className="flex mt-1">
                    <VscThumbsupFilled/>
                    < VscThumbsdownFilled/>
                  </div>
                  <p  className="font-medium text-base text-[#757575] mt-2">RELATED</p>
                  <p  className="font-medium text-base leading-[28px] underline pl-8 mt-4">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                  <p  className="font-medium text-base leading-[28px] underline pl-8 mt-4">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>

                </div>

              </div>
           
              {/* vertical line */}
              <div className="border-l border-gray-200 h-auto ml-2"></div>
               {/* left side */}

              <div className="grid place-items-center h-screen space-y-6">   
                <h1 className="font-medium text-[28px] leading-8 mt-6 ml-6">CONTACT US</h1>
            
                <ImMobile className="w-[64px] h-[64px]" />
                <p className="font-medium text-base">000 800 919 0566</p>
                <div className="w-[236.15px] h-[112px] text-center pl-4">
                  <p className="font-normal text-base">Products & Orders: 24 hours a day, 7 days a week
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
                < RiMessage2Fill className="w-[64px] h-[64px]" />
                <p className="font-medium text-base">24 hours a day</p>
                <p className="font-medium text-base">7 days a week</p>
                <BsEnvelopeFill className="w-[64px] h-[64px]" />

                <p className="font-medium text-base">We &apos;ll reply within</p>
                <p className="font-medium text-base">five business days</p>
                <MdEditLocation className="w-[64px] h-[64px]" />

                <p className="font-medium text-base">STORE LOCATOR</p>
                <p className="font-medium text-base">Find Nike retail stores near you</p>
                 </div>
          </div>
     
      </div>
    )
  }
   export default ContactUs