'use client'
import React from 'react';
import { motion } from 'framer-motion';

const growthData = [
  {
    timeframe: 'Weeks 1-2',
    steps: [
      {
        number: '01',
        title: 'What You Do',
        description: 'Use SMM services to build initial followers and engagement',
      },
      {
        number: '02',
        title: 'Why it Works',
        description: 'Creates baseline credibility and improves first impression',
      },
      {
        number: '03',
        title: 'Estimated Cost/Time',
        description: '৳2,000–5,000',
      },
    ],
  },
  {
    timeframe: 'Weeks 3-4',
    steps: [
      {
        number: '01',
        title: 'What You Do',
        description: 'Start posting consistent, high-quality content',
      },
      {
        number: '02',
        title: 'Why it Works',
        description: 'Larger follower base increases organic engagement',
      },
      {
        number: '03',
        title: 'Estimated Cost/Time',
        description: 'Mostly content effort',
      },
    ],
  },
  {
    timeframe: 'Months 2-3',
    steps: [
      {
        number: '01',
        title: 'What You Do',
        description: 'Continue content + light support if needed',
      },
      {
        number: '02',
        title: 'Why it Works',
        description: 'Faster reach, better algorithm response',
      },
      {
        number: '03',
        title: 'Estimated Cost/Time',
        description: 'Reduced SMM usage',
      },
    ],
  },
  {
    timeframe: 'Months 3-6',
    steps: [
      {
        number: '01',
        title: 'What You Do',
        description: 'Focus mainly on organic growth',
      },
      {
        number: '02',
        title: 'Why it Works',
        description: 'Strong engagement pushes content naturally',
      },
      {
        number: '03',
        title: 'Estimated Cost/Time',
        description: 'Minimal or no SMM needed',
      },
    ],
  },
];

export default function GrowthStrategy() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 text-center bg-white select-none">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff6b00] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-[#ff6b00]">
          GROWTH
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3">
          Growing on Social Media in <span className="text-[#ff6b00]">Bangladesh</span>
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed px-4">
          The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over.
        </p>
      </motion.div>

      {/* Grid Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {growthData.map((col, colIdx) => (
          <motion.div
            key={colIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: colIdx * 0.1 }}
            className="border border-orange-200/80 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-4 relative"
          >
            {/* Top Pill Tag */}
            <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#c23b00] text-white font-bold text-xs sm:text-sm shadow-sm">
              {col.timeframe}
            </div>

            {/* Vertical Flow Steps */}
            <div className="relative flex flex-col gap-3 my-auto">
              
              {/* Dashed Connecting Line */}
              <div className="absolute left-[22px] top-6 bottom-6 border-l-2 border-dashed border-orange-300 z-0 pointer-events-none" />

              {col.steps.map((step, stepIdx) => (
                <div
                  key={stepIdx}
                  className="relative z-10 bg-[#f8fafc] rounded-xl p-3 sm:p-4 text-left border border-slate-100"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-extrabold text-[#ff6b00] border border-orange-200 rounded-full w-5 h-5 flex items-center justify-center bg-white shadow-xs">
                      {step.number}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug pl-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}