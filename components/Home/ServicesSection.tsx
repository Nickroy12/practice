import React from 'react';

const services = [
  { id: 'facebook', name: 'Facebook', icon: '/icon/facebook.png' },
  { id: 'instagram', name: 'Instagram', icon: '/icon/instragram.png' },
  { id: 'x', name: 'X (Twitter)', icon: '/icon/x.png' },
  { id: 'youtube', name: 'YouTube', icon: '/icon/youtube.png' },
  { id: 'tiktok', name: 'TikTok', icon: '/icon/tiktok.png' },
  { id: 'linkedin', name: 'LinkedIn', icon: '/icon/lilnkedin.png' },
  { id: 'telegram', name: 'Telegram', icon: '/icon/tg.png' },
  { id: 'discord', name: 'Discord', icon: '/icon/discord.png' },
  { id: 'spotify', name: 'Spotify', icon: '/icon/sf.png' },
  { id: 'soundcloud', name: 'SoundCloud', icon: '/icon/cloud.png' },
  { id: 'snapchat', name: 'Snapchat', icon: '/icon/sc.png' },
  { id: 'traffic', name: 'Website Traffic', icon: '/icon/growth.png' },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-12 px-4 flex flex-col items-center">
      {/* Header Tag */}
      <div className="flex flex-col items-center mb-2">
        <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
          OUR SERVICES
        </span>
        <div className="w-8 h-0.5 bg-orange-500 rounded-full mt-1"></div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-3">
        Powerful <span className="text-orange-500">SMM Services</span> for Fast Growth
      </h2>

      {/* Subtitle */}
      <p className="text-slate-500 text-xs md:text-sm text-center max-w-2xl mb-8 leading-relaxed">
        Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered.
      </p>

      {/* Services Grid */}
      <div className="max-w-5xl w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative p-[1.5px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            {/* Slow Animated Rotating Gradient Border */}
            <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#fdba74_50%,#f97316_100%)] opacity-70 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite]" />

            {/* Inner Button Content */}
            <button className="relative w-full h-full flex items-center justify-center space-x-2.5 px-3 py-3 rounded-[10px] bg-orange-50/90 text-slate-700 text-xs font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white">
              {/* Icon Container */}
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="whitespace-nowrap">{service.name}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}