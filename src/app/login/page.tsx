import Image from "next/image"
import logo from "@/app/assets/Image (15).png"
import group from "@/app/assets/Group.png";
import Header from '../components/header'


export default function Contact(){
    return (
      <>
      <Header/>
      <div className="py-10 m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-[65%] w-[100%] px-4 flex flex-col h-[100%] justify-center items-center text-center">
   
        <div className="w-[324px] h-[128px] top-[28px] left-[28px] ">
          {/* logo nike */}
        <Image src={logo} alt="img" className="w-[324px] h-[17px]"/>
        {/* heading */}
        
        <h1 className="w-[186.5px] h-[57px]  top-[46px] left-[68.84px] font-bold leading-[26px] text-lg mt-4 ml-12 text-center text-black">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        </div> 
         {/* login form */}
      <div className="w-[324px] h-[305px] top-[156px] left-[28px]">
        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white mb-4">
          <input className="w-[290px]  top-[12px] left-[17px]" type="input" placeholder="Email address"/>
         
        </div>
        <div className="w-[324px] h-[40px] top-[5px] rounded-[3px] border-[1px] bg-white mt-4">
          <input className="w-[290px] top-[12px] left-[17px]" type="input" placeholder="Password"/>
         
        </div>
        <div className="w-[162px] h-[20px] top-[21px] flex  justify-between items-center  relative">
        
        <div className="w-[20px] h-[20px] radius-[3px] border-[1px] border-[#BCBCBC] flex items-center justify-center  "><Image src={group} alt="group1" /> </div>
        </div>
        <div className="flex ml-2 justify-center items-center gap-6">
          <p className="w-[99.61px] h-[14px] top-[4.3px] left-[34px] font-normal text-xs leading-[14px] text-[#8D8D8D] ">Keep me signed in</p>
        
          <p className="w-[139.61px] h-[14px] top-[125px] left-[184.59px] font-normal text-xs leading-[13.8px] text-[#BCBCBC] text-right mr-2">Forgotten your password?</p>
        </div>
      

        <div className="w-[324px] h-[59px] top-[162px] absolutte flex justify-center mt-6">
          <p className="w-[279.31px] h-[30px] top-[4px] text-[#8D8D8D] left-[22.44px] font-normal text-xs leading-[16px] text-center">By logging in, you agree to Nike&apos;s<span className="font-normal text-xs leading-[16px] text-center underline border-solid"> Privacy Policy</span> and <span className="font-normal text-xs leading-[16px] text-center underline border-solid">Terms of Use.</span></p>
        </div>

        {/* sign in buttons */}

        <div className="w-[324px] h-[40px] top-226px] rounded-[3px] border-[1px] bg-[#000000] flex items-center justify-center mt-4">
          <p className="w-[41.04px] h-[18px] top-[10.5px] left-[141.58px] font-normal text-[11px] leading-[17px] text-center text-white ">SIGN IN</p>
        </div>
        {/* Not a members */}

        <div className="w-[324px] h-[24px] top-[276px] flex justify-center mt-4 ">
          <p className="w-[129.61px] h-[14px] top-[10px] left-[97.3px]  font-normal text-xs leading-[14px] text-center text-[#8D8D8D]">Not a Member?<span className="font-normal text-xs leading-[14px] text-center underline border-solid text-black"> Join Us.</span></p>
        </div>

      </div>
 
      </div>
      </>
    )
  };