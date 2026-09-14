import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto my-16 px-4">
 
      <div className="relative rounded-3xl bg-[#FFF8F0] px-6 pt-10 pb-0 md:px-16 md:py-16 flex flex-col md:flex-row items-center md:justify-between min-h-[420px]">
        
        {/* World Map Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-40 pointer-events-none md:left-24 overflow-hidden rounded-3xl">
          <Image
            src="/icon/globe.png"
            alt="World Map Background"
            width={700}
            height={400}
            className="object-contain w-full h-full max-w-2xl"
            priority
          />
        </div>

        {/* Left Content Column */}
        <div className="relative z-10 max-w-xl text-center md:text-left space-y-5 pb-6 md:pb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight tracking-tight">
            Ready to Grow Your Social Media{" "}
            <span className="text-[#FF5C00] block sm:inline">in Bangladesh?</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Join over 58,000 users who are already using SMM to grow faster on
            Facebook, Instagram, YouTube, TikTok, and more. Getting started is free
            and takes less than 60 seconds.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-3 pt-2">
            <Link
              href="/services"
              className="px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#FF5C00] bg-white border border-[#FF5C00] rounded-xl hover:bg-orange-50 transition-colors shadow-sm whitespace-nowrap"
            >
              See All Services
            </Link>

            <Link
              href="/register"
              className="px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF5C00] to-[#D94800] rounded-xl hover:opacity-95 transition-opacity shadow-md shadow-orange-500/20 whitespace-nowrap"
            >
              Create Free Account
            </Link>
          </div>
        </div>

      
        <div className="relative z-10 w-full md:absolute md:right-4 md:-top-10 md:w-[420px] h-[340px] sm:h-[380px] md:h-[460px] flex justify-center md:justify-end items-end mt-4 md:mt-0">
          <Image
            src="/icon/g.png"
            alt="Customer Support Representative"
            width={450}
            height={550}
            className="object-contain object-bottom h-full w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}