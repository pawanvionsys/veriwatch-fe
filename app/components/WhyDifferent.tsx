'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const items = [
  {
    title: "All-in-one platform",
    desc: "No more switching between 10 different apps. Everything you need for safety in one tactical view.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    )
  },
  {
    title: "Proactive alerts",
    desc: "Don't wait for the news. Get notified BEFORE something affects you with our low-latency alert engine.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  },
  {
    title: "Affordable",
    desc: "Starting at just $12/month (less than a tank of gas). Premium safety shouldn't be a luxury.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>
      </svg>
    )
  },
  {
    title: "No fear-mongering",
    desc: "Information, not paranoia. We provide cold, hard data so you can make rational decisions for your family.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
];

function Card({ item, index }: { item: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { damping: 20, stiffness: 200 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])},
      rgba(13, 148, 136, 0.1),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX,
        rotateY,
      }}
      className="group relative h-full rounded-[32px] bg-[#111520]/50 backdrop-blur-xl border border-white/[0.05] p-10 transition-colors duration-500 hover:border-cyan/30 hover:bg-[#161B26]"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Border Beam Effect */}
      <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <div className="absolute inset-0 rounded-[32px] border border-cyan/10 shadow-[inset_0_0_20px_rgba(13,148,136,0.05)]" />
      </div>

      {/* Floating Icon */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        className="w-16 h-16 rounded-[22px] bg-cyan/5 border border-cyan/10 flex items-center justify-center mb-10 text-cyan group-hover:text-white group-hover:bg-cyan/20 group-hover:border-cyan/30 group-hover:shadow-[0_0_30px_rgba(13,148,136,0.3)] transition-all duration-500 relative z-10"
      >
        {item.icon}
      </motion.div>

      <h3 className="font-barlow font-bold text-white text-[26px] mb-4 tracking-[-0.6px] relative z-10 group-hover:translate-x-1 transition-transform duration-500">
        {item.title}
      </h3>
      
      <p className="text-[#6A7A92] text-[15px] leading-[1.7] group-hover:text-white/80 transition-colors duration-500 relative z-10 flex-grow">
        {item.desc}
      </p>

      {/* Interactive Footer */}
      <div className="mt-10 flex items-center gap-4 relative z-10">
        <div className="h-[1px] flex-grow bg-white/[0.05] group-hover:bg-cyan/30 transition-all duration-700 origin-left scale-x-100" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-cyan/20 group-hover:bg-cyan group-hover:shadow-[0_0_10px_rgba(13,148,136,1)] transition-all" 
        />
      </div>

      {/* Subtle Corner Accent */}
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(13,148,136,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
        </svg>
      </div>
    </motion.div>
  );
}

export default function WhyDifferent() {
  return (
    <section className="px-6 md:px-[60px] py-20 md:py-[60px] bg-[#0A0C10] relative overflow-hidden">
      {/* Premium Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan/10 rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan/5 rounded-full blur-[140px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-[60px] md:mb-[100px]">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tag mb-6"
          >
            Tactical Edge
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-barlow text-[32px] sm:text-[36px] md:text-[44px] font-extrabold text-white tracking-[-1.5px] leading-[0.95] mb-8"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-[#2dd4bf] to-cyan">Resilience.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[19px] text-[#6A7A92] max-w-[680px] mx-auto leading-relaxed font-light"
          >
            VeriWatch is the first intelligence platform built for citizens, by experts. We prioritize clarity, speed, and uncompromising reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
