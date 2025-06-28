'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="bg-[#f5f5f5] p-6  space-y-6 py-4">
      {/* Email or Username */}
      <div className="relative flex items-center border bg-[#F8F8F8] border-[#FE93B9] rounded-md overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image src="/email.svg" width={20} height={20} alt="email" />
        </span>
        <input
          type="text"
          placeholder="Username or Email"
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          name="email"
          autoComplete="email"
        />
      </div>

      {/* Password */}
      <div className="relative flex items-center border bg-[#F8F8F8] border-[#FE93B9] rounded-md overflow-hidden">
        <span className="absolute h-full bg-[#FE93B9] px-2 left-0 flex justify-center items-center">
          <Image src="/password.svg" width={20} height={20} alt="password" />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="w-full outline-none bg-[#F8F8F8] px-3 py-2 pl-10"
          name="password"
        />
        <button
          type="button"
          className="px-2 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Image src="/eye.svg" width={20} height={20} alt="toggle visibility" />
        </button>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between items-center text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <div className="relative">
            <input
              type="checkbox"
              id="remember"
              className="peer appearance-none w-[19px] h-[18px] bg-[#eee] border border-[#868686] rounded-[3px] cursor-pointer checked:bg-[#FE93B9] checked:border-[#FE93B9]"
            />
            <span className="absolute top-0 left-1/2 flex justify-center items-center -translate-x-1/2 text-white text-[15px] opacity-0 peer-checked:opacity-100 pointer-events-none select-none">
              <FaCheck className='mt-[1px]' />
            </span>
          </div>
          Remember me
        </label>
        <a href="#" className="text-[#FF3B30] hover:underline">Forgot password?</a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#FE93B9] text-[#393939] py-2 rounded-md  transition"
      >
        Login
      </button>
    </form>
  );
}
