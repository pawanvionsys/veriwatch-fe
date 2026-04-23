'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { section } from 'framer-motion/client';

const features = [
  { name: 'Live police scanner', veri: 'Free', others: '$19.99/mo', unique: false },
  { name: 'Sex offender map', veri: 'Free', others: 'Paid Add-on', unique: false },
  { name: 'AI safety assistant', veri: 'UNIQUE', others: '✕', unique: true },
  { name: 'FDA food recall alerts', veri: 'UNIQUE', others: '✕', unique: true },
  { name: 'CDC disease alerts', veri: 'UNIQUE', others: '✕', unique: true },
  { name: 'Terrorism advisories', veri: 'UNIQUE', others: '✕', unique: true },
  { name: 'Live traffic cameras', veri: 'UNIQUE', others: '✕', unique: true },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Compare() {
  return (
    <section className="px-6 md:px-[60px] py-16 md:py-[80px] bg-[#0A0C10] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-[80px]">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tag"
          >
            The Intelligence Gap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-barlow text-[32px] sm:text-[42px] md:text-[56px] font-extrabold text-white tracking-[-1.2px] leading-[1.05] mb-6"
          >
            VeriWatch vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-[#2dd4bf] to-cyan">The Rest.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[18px] text-[#6A7A92] max-w-[600px] mx-auto leading-relaxed font-light"
          >
            Don't settle for partial safety. See how VeriWatch stacks up against industry incumbents.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Capability Card (Hidden on mobile, shown on md+) */}
          <motion.div variants={cardVariants} className="hidden md:flex bg-[#111520]/50 backdrop-blur-xl border border-white/[0.05] rounded-[32px] p-8 flex-col h-full">
            <h3 className="font-barlow font-bold text-[#6A7A92] text-[18px] uppercase tracking-[0.1em] mb-10">Capability</h3>
            <ul className="space-y-8 flex-1">
              {features.map((f, i) => (
                <li key={i} className="text-white font-medium text-[15px] h-6 flex items-center">{f.name}</li>
              ))}
              <li className="text-[#0D9488] font-bold text-[15px] h-6 flex items-center pt-8 border-t border-white/[0.05]">Monthly Subscription</li>
            </ul>
          </motion.div>

          {/* VeriWatch Card */}
          <motion.div 
            variants={cardVariants} 
            className="bg-[#161B26] border-2 border-[#0D9488]/40 rounded-[32px] p-6 md:p-8 flex flex-col h-full relative shadow-[0_0_40px_rgba(13,148,136,0.15)] md:transform md:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D9488] text-ink text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_10px_20px_rgba(13,148,136,0.3)] z-20">
              Recommended
            </div>
            <h3 className="font-barlow font-bold text-white text-[24px] md:text-[28px] mb-8 md:mb-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan/20 border border-cyan/30 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="3"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              VeriWatch
            </h3>
            <ul className="space-y-6 md:space-y-8 flex-1 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-[14px]">
                  <span className="md:hidden text-[10px] font-bold text-[#6A7A92] uppercase tracking-wider">{f.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className={f.unique ? "text-cyan font-bold" : "text-white"}>{f.veri}</span>
                  </div>
                </li>
              ))}
              <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 pt-8 border-t border-white/[0.05]">
                <span className="md:hidden text-[10px] font-bold text-[#6A7A92] uppercase tracking-wider">Pricing</span>
                <span className="text-white font-black text-[20px] md:text-[24px] tracking-tight">
                  $0.00 <span className="text-[12px] text-muted font-bold ml-2 uppercase tracking-widest">Free Forever</span>
                </span>
              </li>
            </ul>
            <a href="https://veriwatch.io/auth" className="w-full py-4 rounded-2xl bg-cyan text-ink font-black uppercase tracking-widest text-[12px] hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(13,148,136,0.2)] mt-auto flex items-center justify-center">
              Access All Layers Now
            </a>
          </motion.div>

          {/* Others Card */}
          <motion.div variants={cardVariants} className="bg-[#111520] border border-white/[0.05] rounded-[32px] p-6 md:p-8 flex flex-col h-full transition-all">
            <h3 className="font-barlow font-bold text-[#6A7A92] text-[24px] md:text-[28px] mb-8 md:mb-10">Others</h3>
            <ul className="space-y-6 md:space-y-8 flex-1 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-[14px]">
                  <span className="md:hidden text-[10px] font-bold text-[#6A7A92] uppercase tracking-wider">{f.name}</span>
                  <div className="flex items-center gap-3">
                    {f.others === '✕' ? (
                      <div className="w-5 h-5 rounded-full bg-red/10 border border-red/20 flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    )}
                    <span className="text-[#6A7A92]">{f.others}</span>
                  </div>
                </li>
              ))}
              <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 pt-8 border-t border-white/[0.05]">
                <span className="md:hidden text-[10px] font-bold text-[#6A7A92] uppercase tracking-wider">Pricing</span>
                <span className="text-[#6A7A92] font-bold text-[20px] md:text-[24px] tracking-tight">
                  $19.99 <span className="text-[12px] text-muted font-bold ml-2 uppercase tracking-widest">Per Month</span>
                </span>
              </li>
            </ul>
            <div className="w-full py-4 rounded-2xl border border-white/10 text-[#3A4558] font-bold uppercase tracking-widest text-[12px] flex items-center justify-center">
              Switch to Better
            </div>
          </motion.div>
        </motion.div>
        </div>
    </section>
  );
}
