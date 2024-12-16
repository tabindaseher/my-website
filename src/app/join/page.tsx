import Image from "next/image"
import logo from "@/app/assets/Image (15).png";
import Header from '../components/header'
const JoinUs = () => {
  return (
    <>
    <Header/>
    <div className=" m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-[65%] w-[100%] px-4 flex flex-col h-[100%] justify-center items-center text-center">
     {/* logo */}
        <Image src={logo} alt="img" />
        {/* heading */}
        <h1 className="font-bold text-lg leading-[26px] text-center ">BECOME A NIKE MEMBER</h1>
        {/* para */}
        <p className="font-normal text-sm leading-[22px] text-center text-[#8D8D8D] ">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
         

        {/*  join us form */}

         <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="Email address"/>
        </div>

        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="Password"/>
        </div>
        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="First Name"/>
        </div>

        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="Last Name"/>
        </div>

        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="dd/mm/yyyy"/>
        </div>
        <p className="text-[#8D8D8D] text-[11px] font-normal ">Get a Nike Member Reward every year on your Birthday.</p>

        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="India"/>
        </div>

        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white ">
         <input className="w-[290px] h-[16px] top-[12px] left-[17px] " type="input" placeholder="India"/>

        </div>

        <div className="w-[324px] h-[28px] flex ">
            <div className="w-[20px] h-[20px] rounded-[3px] border-[1px] "></div>
            <p className="text-[#8D8D8D] text-[11px] font-normal ">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
        </div>

        <div className="w-[324px] h-[59px] ">
   
            <p className="text-[#8D8D8D] text-[11px] font-normal  leading-[16px]">By creating an account, you agree to Nike&apos;s <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span></p>
        </div>
        {/* join us button */}
        <div className="w-[324px] h-[40px]  rounded-[3px] border-[1px] bg-[#000000] flex items-center justify-center ">
          <p className="w-[60px] h-[17px] top-[11px] left-[132.5px] font-normal text-[15px] leading-[17px] text-center text-white ">JOIN US</p>
        </div>
{/*  already members */}
        <div className="w-[324px] h-[24px] top-[776px] flex justify-center  ">
          <p className="w-[148.95px] h-[14px] top-[10px] left-[87.63px]  font-normal text-xs leading-[14px] text-center text-[#8D8D8D]">Already a Member?<span className="font-normal text-xs leading-[14px] text-center underline border-solid text-black">Sign In.</span></p>
        </div>

        

    </div>
    </>
  )
}
 
export default JoinUs