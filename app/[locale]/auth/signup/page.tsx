'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-6 bg-[#f5f5f5] p-6 py-4">
      {/* Email */}
      <div className="relative flex items-center border border-[#FE93B9] rounded-md  overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image
          src={"/email.svg"}
          width={20}
          height={20}
          alt='email'
          />
        </span>
        <input
          type="email"
          placeholder="Email"
          name='email'
          autoComplete="email"
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
        />
      </div>

      {/* First Name & Last Name */}
      <div className="flex gap-2 max-[767px]:flex-col ">
        <div className="max-[767px]:w-full relative flex items-center border border-[#FE93B9] rounded-md w-1/2 overflow-hidden">
          <span className=" absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image
          src={"/user.svg"}
          width={20}
          height={20}
          alt='email'
          />
          </span>
          <input
            type="text"
            placeholder="First Name"
            name='firstName'
            className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          />
        </div>
        <div className="max-[767px]:w-full relative flex items-center border border-[#FE93B9] rounded-md w-1/2 overflow-hidden">
          <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image
          src={"/user.svg"}
          width={20}
          height={20}
          alt='email'
          />
          </span>
          <input
            type="text"
            placeholder="Last Name"
            name='lastName'
            className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          />
        </div>
      </div>

      {/* Password */}
      <div className="relative flex items-center border border-[#FE93B9] bg-[#F8F8F8] rounded-md  overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image
          src={"/password.svg"}
          width={20}
          height={20}
          alt='email'
          />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="w-full outline-none bg-[#F8F8F8]  px-3 py-2 pl-10"
          name='password'
        />
        <button
          type="button"
          className="px-2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Image
          src={"/eye.svg"}
          width={20}
          height={20}
          alt='email'
          />
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative flex items-center border bg-[#F8F8F8]  border-[#FE93B9] rounded-md  overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
        <Image
          src={"/password.svg"}
          width={20}
          height={20}
          alt='email'
          />
        </span>
        <input
          type={showConfirm ? 'text' : 'password'}
          placeholder="Confirm Password"
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          name='confirmPassword'
        />
        <button
          type="button"
          className="px-2"
          onClick={() => setShowConfirm((prev) => !prev)}
        >
          <Image
          src={"/eye.svg"}
          width={20}
          height={20}
          alt='email'
          />
        </button>
      </div>

      {/* Checkboxes */}
      <div className="space-y-2 text-sm text-gray-700">
        <label className="flex items-center gap-2  max-[425px]:text-[12px]">
       <div className="relative">
         <input
           type="checkbox"
           id="check"
           name='accept '
           className="peer appearance-none w-[19px] h-[18px] bg-[#f8f8f8] border border-[#868686] rounded-[3px] cursor-pointer checked:bg-[#FE93B9] checked:border-[#FE93B9]"
         />

         <span className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-[15px] opacity-0 peer-checked:opacity-100 pointer-events-none select-none">
           <FaCheck  className='mt-[1px]'/>
         </span>
       </div>

          I accept the{' '}
          <a href="#" className="text-blue-500 underline">
            Terms of Service and Privacy Policy
          </a>
        </label>
        <label className="flex items-center gap-2  max-[425px]:text-[12px]">
       <div className="relative">
         <input
           type="checkbox"
           id="check"
           name='subscribe'
           className="peer appearance-none w-[19px] h-[18px] bg-[#f8f8f8] border border-[#868686] rounded-[3px] cursor-pointer checked:bg-[#FE93B9] checked:border-[#FE93B9]"
         />
         {/* علامة الصح تظهر فقط عند التحديد */}
         <span className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-[15px] opacity-0 peer-checked:opacity-100 pointer-events-none select-none">
           <FaCheck  className='mt-[1px]'/>
         </span>
       </div>
          Subscribe to our newsletter
        </label>
      </div>

      {/* Submit */}
      <button className="w-full bg-[#FE93B9] text-[#393939] py-2 rounded-md cursor-pointer">
        Sign Up
      </button>
    </div>
  );
}
