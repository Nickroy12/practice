'use client'
import React from 'react';
import { motion } from 'framer-motion';

// public/icon/ directory image mapping
const ICONS = {
  lock: '/icon/6c6353036b6a266460402fe5538d4e83f7ededf4.png',
  bot: '/icon/3f4e16aefb4ba441f78f83a98b5af3467d707a16.png',
  chart: '/icon/528b0c0593029eae02b0a76cb6669cbe079d86bb.png',
  trophy: '/icon/achievement.png',
};

const advantagesData = [
  {
    id: 1,
    title: 'We Never Ask for Your Password',
    description:
      "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
    icon: ICONS.lock,
  },
  {
    id: 2,
    title: 'We Use Real Users, Not Bots',
    description:
      'This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That\'s when bans happen.',
    icon: ICONS.bot,
  },
  {
    id: 3,
    title: 'We Deliver Gradually',
    description:
      'Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.',
    icon: ICONS.chart,
  },
  {
    id: 4,
    title: 'Our Track Record',
    description:
      '207,370 completed orders. Not a single customer has reported an account ban caused by our services. That\'s not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.',
    icon: ICONS.trophy,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12 sm:py-20 text-center overflow-hidden bg-white select-none">
      {/* Background Soft Wave Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100/50 to-transparent rounded-full filter blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff6b00] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[2px] after:bg-[#ff6b00]">
          ADVANTAGES
        </span>
        
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3">
          Advantages of using <span className="text-[#ff6b00]">our panel services</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed px-4">
          Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
        </p>
      </motion.div>

      {/* 2x2 Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {advantagesData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-slate-100/80 rounded-2xl p-6 sm:p-8 text-left shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.06)] transition-all duration-300 flex flex-col items-start"
          >
            {/* 3D Icon Container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>

            {/* Card Content */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
              {item.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}