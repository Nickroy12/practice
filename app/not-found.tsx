import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-orange-500/5 border border-orange-100 relative overflow-hidden">
        
        {/* Background Decorative Blur */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF5C00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF5C00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3D / Illustrative Icon */}
        <div className="relative z-10 mx-auto w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
          <Image
            src="/icon/toolkit.png"
            alt="Under Construction Toolkit"
            width={128}
            height={128}
            className="object-contain animate-bounce"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF5C00] bg-orange-50 rounded-full border border-orange-200">
            404 — Page Under Construction
          </span>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            We’re Building Something <span className="text-[#FF5C00]">Awesome!</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            The page you are looking for is currently under construction or does not exist. Please check back later or return to the homepage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5C00] to-[#D94800] rounded-xl hover:opacity-95 transition-all shadow-md shadow-orange-500/20 text-center"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#FF5C00] bg-white border border-[#FF5C00] rounded-xl hover:bg-orange-50 transition-colors shadow-sm text-center"
          >
            Explore Services
          </Link>
        </div>

      </div>
    </main>
  );
}