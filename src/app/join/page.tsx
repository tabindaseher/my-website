import Image from "next/image"
import logo from "@/app/assets/Image (15).png";
import Header from '../components/header'
const JoinUs = () => {
  return (
    <>
    <Header />
    <div className="m-auto xl:w-[25%] my-10 gap-5 lg:w-[35%] md:w-[50%] sm:w-full px-4 flex flex-col justify-center items-center text-center">
      {/* Logo */}
      <Image src={logo} alt="Nike logo" />

      {/* Heading */}
      <h1 className="font-bold text-lg text-center mt-4">
        BECOME A NIKE MEMBER
      </h1>

      {/* Paragraph */}
      <p className="font-normal text-sm text-center text-gray-500 mt-2">
        Create your Nike Member profile and get first access to the very best
        of Nike products, inspiration, and community.
      </p>

      {/* Join Us Form */}
      <form className="w-full flex flex-col gap-4 mt-6">
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
        <input
          className="w-full h-10 rounded border px-4"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full h-10 rounded border px-4"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full h-10 rounded border px-4"
          type="date"
          placeholder="Date of Birth"
        />
        <p className="text-gray-500 text-xs mt-1">
          Get a Nike Member Reward every year on your birthday.
        </p>
        <input
          className="w-full h-10 rounded border px-4"
          type="text"
          placeholder="Country/Region"
        />
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" className="w-5 h-5 border rounded" />
          <p className="text-gray-500 text-xs">
            Sign up for emails to get updates from Nike on products, offers,
            and your Member benefits.
          </p>
        </div>
      </form>

      {/* Terms and Privacy */}
      <p className="text-gray-500 text-xs mt-4">
        By creating an account, you agree to Nike&apos;s{" "}
        <span className="underline">Privacy Policy</span> and{" "}
        <span className="underline">Terms of Use</span>.
      </p>

      {/* Join Us Button */}
      <button className="w-full h-10 bg-black text-white rounded mt-4">
        JOIN US
      </button>

      {/* Already a Member */}
      <p className="text-gray-500 text-xs mt-4">
        Already a Member?{" "}
        <span className="underline text-black">Sign In.</span>
      </p>
    </div>
  </>
  )
}
 
export default JoinUs