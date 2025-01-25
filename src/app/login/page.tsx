import Image from "next/image"
import logo from "@/app/assets/Image (15).png"
import group from "@/app/assets/Group.png";
import Header from '../components/header'


export default function Contact(){
    return (
      <>
      <Header />
      <div className="m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-full px-4 flex flex-col justify-center items-center text-center">

        {/* Logo and Heading */}
        <div className="w-[324px] h-[128px]">
          <Image src={logo} alt="Nike logo" className="w-full" />
          <h1 className="font-bold text-lg mt-4 text-black">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>
        </div>

        {/* Login Form */}
        <div className="w-[324px] flex flex-col mt-8 gap-4">
          <input
            className="w-full h-10 rounded border px-4"
            type="email"
            placeholder="Email address"
          />
          <input
            className="w-full h-10 rounded border px-4"
            type="password"
            placeholder="Password"
          />
          <div className="flex items-center gap-2 mt-2">
            <div className="w-5 h-5 rounded border flex items-center justify-center">
              <Image src={group} alt="Checkbox" />
            </div>
            <p className="text-xs text-gray-500">Keep me signed in</p>
            <p className="text-xs text-gray-400 ml-auto underline">
              Forgotten your password?
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By logging in, you agree to Nike's 
            <span className="underline"> Privacy Policy</span> and 
            <span className="underline"> Terms of Use</span>.
          </p>

          <button className="w-full h-10 bg-black text-white rounded mt-4">
            SIGN IN
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Not a Member? <span className="underline text-black">Join Us.</span>
          </p>
        </div>
      </div>
    </>
    )
  };