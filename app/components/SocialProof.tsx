'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { n: '50', l: 'States covered' },
  { n: '32+', l: 'Live scanner feeds' },
  { n: '15,000+', l: 'Traffic cameras' },
];

const reviews = [
  {
    text: "I had no idea there was a registered sex offender two blocks from my daughter's school until VeriWatch told me. I check this app every single morning now. Worth every penny.",
    author: "Sarah M.",
    location: "Columbus, OH · Parent of 3",
    initials: "SM",
  },
  {
    text: "Replaced four apps with one. The live scanner feature alone is worth downloading. The AI assistant is wild — it summarises scanner chatter into plain English I can actually understand.",
    author: "Marcus T.",
    location: "Chicago, IL · Daily commuter",
    initials: "MT",
    highlight: true,
  },
  {
    text: "As a neighbourhood watch volunteer I've been using a physical scanner for 12 years. VeriWatch is everything I had, plus weather, plus food recalls, plus an AI I can actually ask questions to.",
    author: "Diane W.",
    location: "Scottsdale, AZ · Watch captain",
    initials: "DW",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SocialProof() {
  return (
    <section className="px-6 md:px-[60px] py-16 md:py-[80px] text-center bg-[#0A0C10]">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="label-tag mb-12"
      >
        Intelligence for the masses
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[60px] mb-[60px] md:mb-[100px] max-w-5xl mx-auto"
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants} className="text-center group">
            <div className="font-barlow text-[32px] sm:text-[42px] md:text-[60px] font-extrabold text-[#0D9488] leading-none group-hover:scale-110 transition-transform duration-500">{stat.n}</div>
            <div className="text-[10px] md:text-[14px] font-bold uppercase tracking-widest text-[#6A7A92] mt-4 group-hover:text-white transition-colors">{stat.l}</div>
          </motion.div>
        ))}
        <div className="col-span-full text-center -mt-8 md:-mt-8">
          <span className="text-[14px] md:text-[16px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] opacity-80">— All in One App —</span>
        </div>
      </motion.div>
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`bg-[#111520] border rounded-[28px] p-8 text-left transition-all duration-500 relative overflow-hidden group ${rev.highlight ? 'border-[#0D9488]/30 shadow-[0_20px_40px_rgba(13,148,136,0.1)]' : 'border-white/[0.05] hover:border-[#0D9488]/20'}`}
          >
            {/* Subtle glow for highlight */}
            {rev.highlight && (
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0D9488]/5 blur-3xl" />
            )}

            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-amber fill-amber" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            
            <p className="text-[15px] text-[#D8E0EE] leading-[1.8] italic mb-8 relative z-10 group-hover:text-white transition-colors">"{rev.text}"</p>
            
            <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/[0.05]">
              <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center text-[12px] font-bold text-cyan font-barlow shrink-0 group-hover:bg-cyan group-hover:text-ink transition-all">
                {rev.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-white font-bold tracking-tight">{rev.author}</span>
                <span className="text-[12px] text-[#6A7A92] uppercase font-bold tracking-widest">{rev.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
