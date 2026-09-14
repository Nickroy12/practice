import React from "react";
import { IoIosLink } from "react-icons/io";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.",
    cornerPattern: "top-left",
  },
  {
    number: "02",
    title: "Add Funds",
    description:
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
    cornerPattern: null,
  },
  {
    number: "03",
    title: "Select Service",
    description:
      "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.",
    cornerPattern: null,
  },
  {
    number: "04",
    title: "Place your order",
    description:
      "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
    cornerPattern: "bottom-right",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/40 via-orange-50/20 to-orange-100/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/60 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            Working Process
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Grow Your <span className="text-orange-500">Socials in 4 Simple Steps</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.
          </p>
        </div>

        {/* 2x2 Steps Grid Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Central Rotating Link Icon Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center pointer-events-none">
            
            {/* Soft Outer Glow Ring */}
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-b from-orange-100/80 to-orange-200/50 p-3 shadow-xl backdrop-blur-sm flex items-center justify-center">
              
              {/* Circular Curved Arrows Visual Layer */}
              <svg
                className="absolute inset-0 w-full h-full text-orange-400 opacity-10 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M 20 50 A 30 30 0 0 1 80 50"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <polygon points="78,44 86,50 78,56" fill="currentColor" />
                <path
                  d="M 80 50 A 30 30 0 0 1 20 50"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <polygon points="22,56 14,50 22,44" fill="currentColor" />
              </svg>

              {/* Central Inner 3D Gradient Sphere */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 shadow-md flex items-center justify-center text-white border-2 border-white/80">
                <IoIosLink className="w-9 h-9 transform -rotate-45 drop-shadow-sm" />
              </div>

            </div>

            {/* Label Underneath */}
            <span className="mt-2 text-xs font-semibold text-slate-700 tracking-wide bg-white/80 px-2.5 py-0.5 rounded-full shadow-sm border border-orange-100">
              working process
            </span>
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white/95 via-orange-50/30 to-orange-100/40 border border-orange-100/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px] flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Dot Patterns */}
              {step.cornerPattern === "top-left" && (
                <div className="absolute top-0 left-0 w-16 h-16 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:8px_8px] opacity-25 rounded-tl-2xl pointer-events-none" />
              )}
              {step.cornerPattern === "bottom-right" && (
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:8px_8px] opacity-25 rounded-br-2xl pointer-events-none" />
              )}

              <div>
                <span className="block text-3xl font-extrabold text-orange-500 mb-1">
                  {step.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-orange-600 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}