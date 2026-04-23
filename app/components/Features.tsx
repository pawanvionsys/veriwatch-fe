"use client"
import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Meet "Tank": Chief Resilience Officer',
    desc: `Former Army mechanic turned trucker, Tank has logged over 2 million miles across all 48 continental states. His 18-wheeler doubles as a mobile command center, equipped with HAM radio, solar panels, and a 6-month food supply.

After witnessing the 2021 Texas grid collapse firsthand while delivering emergency supplies, Tank became obsessed with preparedness. He now spends his off-hours monitoring OSINT feeds, running readiness drills with his local prepper network, and training VeriWatch's AI systems with real-world threat scenarios.
`,
    unique: true,
    className: 'md:col-span-2 md:row-span-2',
    icon: (
      <Image 
        src="https://veriwatch.io/images/tank.png" 
        alt="Tank" 
        width={48} 
        height={48} 
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    bg: 'bg-[radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.1)_0%,transparent_60%)]'
  },
  {
    title: 'Sex offender map',
    desc: 'Nationwide registry mapped to your location. Get instant alerts near home.',
    className: 'md:col-span-1 md:row-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'AI safety assistant',
    desc: 'Ask "Is my neighbourhood safe tonight?" Get an AI briefing from live scanner data and local incidents.',
    className: 'md:col-span-1 md:row-span-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
      </svg>
    ),
    bg: 'bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.08)_0%,transparent_50%)]'
  },
  {
    title: 'Severe weather',
    desc: 'NWS-powered push notifications for tornadoes and hurricanes.',
    status: 'urgent',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/>
        <path d="m13 12-3 5h4l-3 5"/>
      </svg>
    ),
  },
  {
    title: 'Traffic cameras',
    desc: 'Access live DOT cameras. See road conditions in real time.',
    className: 'md:col-span-1 md:row-span-1',
   
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    title: 'CDC disease alerts',
    desc: 'Real-time outbreak notifications from the CDC.',
    className: 'md:col-span-2 md:row-span-1',
   
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="M12 22v-2"/><path d="m19.07 19.07-1.41-1.41"/><path d="M22 12h-2"/><path d="m19.07 4.93-1.41 1.41"/><circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    title: 'FDA food recalls',
    desc: 'Instant alerts for food and drug recalls.',
    className: 'md:col-span-1 md:row-span-1',

    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    title: 'Terrorism advisories',
    desc: 'DHS threat level monitoring and advisories.',
    status: 'urgent',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

export default function Features() {
  return (
    <section className="px-6 md:px-[60px] py-16 md:py-[20px] md:mt-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-[60px]"
      >
        <motion.div variants={itemVariants} id="features" className="label-tag">Everything in one app</motion.div>
        <motion.h2 variants={itemVariants} className="font-barlow text-[32px] sm:text-[36px] md:text-[44px] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-[14px]">
          One app. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-[#2dd4bf] to-cyan">Eight intelligence layers.</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[16px] text-[#6A7A92] max-w-[480px] mx-auto">
          The only platform that gives everyday people access to the same real-time data as law enforcement and emergency responders.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4"
      >
        {features.map((feat, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`group bg-[#1A2030] border border-[rgba(255,255,255,0.07)] rounded-[24px] p-8 transition-all duration-300 hover:border-[rgba(13,148,136,0.3)] relative overflow-hidden flex flex-col justify-between ${feat.className || ''} ${feat.bg || ''}`}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(13,148,136,0.12)] border border-[rgba(13,148,136,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              
              <h3 className={`font-barlow font-bold text-white mb-3 tracking-[-0.3px] ${feat.className?.includes('col-span-2') ? 'text-[24px]' : 'text-[18px]'}`}>
                {feat.title}
              </h3>
              <p className={`text-[#6A7A92] leading-[1.6] whitespace-pre-line ${feat.className?.includes('col-span-2') ? 'text-[15px] max-w-sm' : 'text-[13px]'}`}>
                {feat.desc}
              </p>
            </div>

            {feat.unique && (
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-20">
                <span className="inline-block text-[12px] font-black font-barlow tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg bg-[rgba(13,148,136,0.15)] text-cyan border border-[rgba(13,148,136,0.25)] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                   Only on VeriWatch
                </span>
                {feat.status === 'urgent' && (
                  <span className="inline-flex items-center gap-1.5 text-[8px] font-black font-barlow tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/25 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm animate-pulse">
                    <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                    Live
                  </span>
                )}
              </div>
            )}

            {!feat.unique && feat.status === 'urgent' && (
               <div className="absolute top-6 right-6 z-20">
                  <span className="inline-flex items-center gap-1.5 text-[8px] font-black font-barlow tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/25 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-[#F59E0B] animate-ping" />
                    Alert
                  </span>
               </div>
            )}

            {/* Decorative Grid Pattern for larger cards */}
            {feat.className?.includes('col-span-2') && (
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent)] pointer-events-none" />
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-[#6A7A92] text-sm mb-6 font-medium tracking-wide">Ready to access the ultimate safety toolkit?</p>
        <a 
          href="https://veriwatch.io/auth" 
          className="inline-flex items-center justify-center gap-3 bg-[#0D9488] text-[#0A0C10] text-[15px] font-bold px-10 py-4 rounded-full font-barlow hover:brightness-110 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(13,148,136,0.2)] group w-full sm:w-auto"
        >
          Explore All Features
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </a>
      </motion.div>
    </section>
  );
}
