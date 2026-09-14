'use client'
import React from 'react';
import { motion } from 'framer-motion';

const ICONS = {
  globe: '/icon/globe.png',
  paypal: '/icon/Paypal.png',
  gpay: '/icon/gpay.png',
  visa: '/icon/visa.png',
  mastercard: '/icon/mastercard.png',
  rocket: '/icon/image.png',
  sepa: '/icon/sepa.png',
  applepay: '/icon/applepay.png',
};

const paymentIcons = [
  { id: 1, name: 'PayPal', src: ICONS.paypal },
  { id: 2, name: 'Google Pay', src: ICONS.gpay },
  { id: 3, name: 'SEPA', src: ICONS.sepa },
  { id: 4, name: 'Visa', src: ICONS.visa },
  { id: 5, name: 'Mastercard', src: ICONS.mastercard },
  { id: 6, name: 'Rocket', src: ICONS.rocket },
  { id: 7, name: 'Apple Pay', src: ICONS.applepay },
];

export default function PaymentMethods() {
  const totalIcons = paymentIcons.length;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-10 sm:py-16 text-center overflow-hidden bg-white select-none">
      
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Subtitle Badge */}
        <div className="inline-block mb-3">
          <span className="text-xs sm:text-sm font-semibold text-[#ff6b00] tracking-wide relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#ff6b00] after:to-transparent">
            Payment Methods
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Multiple Payment <span className="text-[#ff6b00]">Methods</span>
        </h2>

        {/* Description Text */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base text-slate-500 leading-relaxed mb-8 sm:mb-10 px-2">
          We accept Visa, Mastercard, American Express, bKash, Nagad, Rocket, and more, so pay whichever way at checkout. Deposits are instant, and you can start with as little as $1, which means minimum restrictions well before placing your first order.
        </p>
      </motion.div>

      {/* Arc Stage Container */}
      <div className="relative w-full max-w-3xl h-[260px] xs:h-[300px] sm:h-[380px] mx-auto flex justify-center items-end overflow-hidden bg-white">
        
        {/* Map Background */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={ICONS.globe}
          alt="World Map"
          className="absolute top-0 sm:top-4 w-full h-full object-contain opacity-75 sm:opacity-80 z-0 pointer-events-none"
        />

        {/* Inner Solid White Circle Masking Area */}
        <div className="absolute -bottom-[180px] xs:-bottom-[210px] sm:-bottom-[280px] w-[360px] xs:w-[420px] sm:w-[560px] h-[360px] xs:h-[420px] sm:h-[560px] rounded-full bg-white z-10" />

        {/* Outer Arc Dashed Ring Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute -bottom-[180px] xs:-bottom-[210px] sm:-bottom-[280px] w-[360px] xs:w-[420px] sm:w-[560px] h-[360px] xs:h-[420px] sm:h-[560px] rounded-full border border-orange-500/10 z-10"
        />

        {/* Inner Arc Dashed Ring Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute -bottom-[140px] xs:-bottom-[165px] sm:-bottom-[220px] w-[280px] xs:w-[330px] sm:w-[440px] h-[280px] xs:h-[330px] sm:h-[440px] rounded-full border border-dashed border-orange-500/25 z-10"
        />

        {/* Animated Payment Icons */}
        {paymentIcons.map((icon, index) => {
          const angleStep = 180 / (totalIcons - 1);
          const angleInDegrees = 180 - index * angleStep;
          const angleInRadians = (angleInDegrees * Math.PI) / 180;

          const cos = Math.cos(angleInRadians);
          const sin = Math.sin(angleInRadians);

          return (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, scale: 0, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.3 + index * 0.08,
              }}
              whileHover={{
                scale: 1.18,
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.08)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="absolute z-20 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md sm:shadow-lg shadow-slate-200 border border-slate-100 cursor-pointer"
              style={{
                left: `calc(50% + ${cos} * var(--radius))`,
                bottom: `calc(${sin} * var(--radius) - var(--offset-y))`,
                transform: 'translate(-50%, 50%)',
                '--radius': 'min(38vw, 220px)',
                '--offset-y': '20px',
              }}
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="max-w-[60%] max-h-[60%] object-contain"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Watermark Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-xl xs:text-3xl sm:text-6xl font-black text-orange-500/10 whitespace-nowrap tracking-wider pointer-events-none uppercase z-0"
      >
        MULTIPLE PAYMENTS
      </motion.div>
    </section>
  );
}