'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: 'Is it safe to use SMM services for my account?',
    answer:
      'Yes, as long as you use real, active accounts and natural delivery speeds. We never ask for your password and operate strictly within social media platform guidelines to ensure your account remains 100% safe.',
  },
  {
    id: 2,
    question: 'How long does delivery take?',
    answer:
      'Most orders start instantly within a few minutes. Full delivery time depends on the package size and type, as we spread delivery naturally over hours or days to protect your account.',
  },
  {
    id: 3,
    question: 'How do I add money?',
    answer:
      'You can add funds easily via Visa, Mastercard, bKash, Nagad, Rocket, PayPal, Apple Pay, and crypto via our instant automated payment gateway.',
  },
  {
    id: 4,
    question: 'Will followers drop over time?',
    answer:
      'We focus on high-quality real profiles to minimize drop rates. In case any drop occurs, many of our services include a refill guarantee period.',
  },
  {
    id: 5,
    question: 'What is a Mass Order feature?',
    answer:
      'Mass order allows you to place multiple orders with different links simultaneously, saving time if you manage several campaigns or social accounts at once.',
  },
  {
    id: 6,
    question: 'Is drip-feed safe?',
    answer:
      'Yes! Drip-feed allows you to build engagement gradually (e.g., adding 100 likes every 30 minutes) which imitates 100% organic growth.',
  },
  {
    id: 7,
    question: 'Do you offer custom services?',
    answer:
      'Yes, we provide custom targeting, specific comment lists, and tailored package quantities according to your requirements.',
  },
  {
    id: 8,
    question: 'Which platform is best for business growth?',
    answer:
      'It depends on your target audience. Facebook and Instagram are great for visual products and broad reach, while LinkedIn and YouTube suit B2B and educational content.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Split data into two equal columns for desktop view
  const leftColumn = faqData.slice(0, 4);
  const rightColumn = faqData.slice(4, 8);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12 sm:py-20 bg-white select-none overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff6b00] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[2px] after:bg-[#ff6b00]">
          FAQ
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3">
          Frequently Asked <span className="text-[#ff6b00]">Questions</span>
        </h2>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed px-4">
          Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
        </p>
      </motion.div>

      {/* Accordion 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftColumn.map((faq) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightColumn.map((faq) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQCard({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'bg-gradient-to-r from-[#e05600] to-[#ff6b00] border-transparent text-white shadow-lg shadow-orange-500/20'
          : 'bg-[#f8fafc] border-slate-100 hover:border-orange-200 text-slate-800'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
      >
        <span
          className={`text-xs sm:text-sm font-bold leading-snug ${
            isOpen ? 'text-white' : 'text-slate-800'
          }`}
        >
          {faq.question}
        </span>

        {/* Dynamic +/- Icon Indicator */}
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
            isOpen
              ? 'bg-white/20 text-white rotate-180'
              : 'bg-white border border-slate-200 text-slate-600 shadow-xs'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Expandable Content Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-orange-50/90 leading-relaxed border-t border-white/10 pt-3">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}