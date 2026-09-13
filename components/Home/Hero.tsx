import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen  overflow-hidden bg-[#fff8f0]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-200 blur-[100px]" />
      <div className="absolute right-0 bottom-[200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-200 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row">
        {/* Left Content */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="mb-5 flex items-center gap-2 text-xs text-gray-400">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
            </div>

            SOCIAL MEDIA EXPERT
          </div>

          <h1 className="text-2xl font-bold leading-tight text-[#333] md:text-5xl">
            Best <span className="text-orange-500">SMM Panel</span>
            <br />
            in Bangladesh -{" "}
            <span className="text-orange-500">Fast</span>,{" "}
            <span className="text-orange-500">Safe</span> &
            <br />
            Convenient.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
            Grow your business and social media presence with our powerful
            services. Get fast, secure and reliable solutions for your digital
            marketing needs.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-md border border-orange-200 bg-white px-6 py-3 text-xs font-semibold text-orange-500 shadow-sm transition hover:bg-orange-500 hover:text-white">
              View Services
            </button>

            <button className="rounded-md bg-orange-500 px-6 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-orange-600">
              Create Account
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <Image
  src="/women.png"
  alt="Social Media Expert"
  width={500}
  height={600}
  className="object-contain"
/>
       
      </div>
    </section>
  );
};

export default Hero;