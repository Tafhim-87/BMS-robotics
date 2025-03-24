"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import LogoSvg from "@/assets/svgs/LogoSvg";
import login from "@/assets/imgs/login/login.png";
import moblogin from "@/assets/imgs/login/moblogin.png";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex flex-col gap-4 bg-white"
    >
      {/* Email Input */}
      <div className="flex flex-col gap-2">
        <label className="text-base font-medium">Email</label>
        <div className="relative border border-gray-200 rounded-xl p-3 focus-within:border-[#5C73DB]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="w-full bg-transparent outline-none placeholder-gray-400"
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-2">
        <label className="text-base font-medium">Password</label>
        <div className="relative border border-gray-200 rounded-xl p-3 flex items-center focus-within:border-[#5C73DB]">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="****************"
            className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#4763E4] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition"
      >
        Log In {""} →
      </button>
    </form>
  );
};

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="container max-w-[1440px] flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center">
        <div className="w-full md:hidden block">
          <Image
            src={moblogin}
            alt="login"
            width={750}
            height={750}
            className="w-full"
          />
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-3 p-3">
          <LogoSvg />
          <h1 className="text-[32px] leading-10 font-semibold text-gray-900">
            Log In to Admin Dashboard
          </h1>
          <LoginForm />
        </div>
        <div className="w-full hidden md:block">
          <Image
            src={login}
            alt="login"
            width={750}
            height={1020}
            className="h-screen max-h-[1030px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
