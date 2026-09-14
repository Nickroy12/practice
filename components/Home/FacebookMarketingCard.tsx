import React from "react";

const services = [
  {
    id: "01",
    title: "Facebook Post Likes:",
    description: "Boost post engagement and visibility with real likes.",
  },
  {
    id: "02",
    title: "Facebook Likes:",
    description: "Grow your page popularity with high quality likes.",
  },
  {
    id: "03",
    title: "Facebook Comments:",
    description: "Increase interaction with engaging comments.",
  },
  {
    id: "04",
    title: "Facebook Shares:",
    description: "Expand your reach with powerful shares.",
  },
  {
    id: "05",
    title: "Facebook Video Views:",
    description: "Get more visibility with high-retention video views.",
  },
  {
    id: "06",
    title: "Facebook Reactions:",
    description: "Make your posts more engaging with diverse reactions.",
  },
];

export default function FacebookMarketingCard() {
  return (
    /* Outer wrapper with padding on the left to allow the overlapping icon space */
 <>

    <div className=" max-w-5xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 my-10">
      
      {/* 3D Floating Facebook Icon overlapping the outer card edge */}
     

      {/* Main Container Card */}
      <div className="relative rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/40 via-white to-orange-50/30 p-4 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: Rocket Artwork Box */}
          <div className="md:col-span-5 relative rounded-xl overflow-hidden bg-gradient-to-b from-orange-50 to-orange-400 p-6 flex items-center justify-center min-h-[320px]">
            <img
              src="/icon/rocket.png"
              alt="Facebook Marketing Rocket"
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Right Side: Content & Services List */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                Facebook Marketing Services
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Boost your brand visibility, connect with your ideal audience,
                and drive more traffic, engagement, and sales through strategic
                Facebook marketing campaigns.
              </p>
            </div>

            {/* Service Items */}
            <div className="space-y-2.5">
              {services.map((service) => (
                <div key={service.id} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-xs shadow-sm">
                    {service.id}
                  </span>
                  <p className="text-gray-700 leading-tight pt-0.5">
                    <strong className="text-orange-600 font-semibold mr-1">
                      {service.title}
                    </strong>
                    <span className="text-gray-600">{service.description}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white text-xs sm:text-sm font-medium shadow-md hover:opacity-95 transition-opacity">
                View Facebook Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
      <div className="relative hidden md:flex -left-2 md:bottom-8 z-20 w-450 h-450 sm:w-24 sm:h-24 drop-shadow-xl pointer-events-none">
        <img
          src="/icon/facebbok.png"
          alt="Facebook Icon"
          className=" object-contain -rotate-12"
        />
      </div>
 </>
  );
}