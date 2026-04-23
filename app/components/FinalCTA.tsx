import React from 'react';

export default function FinalCTA() {
  return (
    <section className="px-6 md:px-[60px] py-16 md:py-[80px] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.07)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="label-tag">Ready to know everything?</div>
      <h2 className="font-barlow text-[32px] sm:text-[40px] md:text-[52px] font-extrabold text-white leading-[1.1] tracking-[-1px] mb-[18px]">
        Your neighbourhood.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-[#2dd4bf] to-cyan">Fully visible.</span> Always free.
      </h2>
      <p className="text-[16px] text-[#6A7A92] mb-10 max-w-lg mx-auto">
        Join 500,000+ Americans who never miss a safety alert. Download VeriWatch in 30 seconds.
      </p>

      <div className="flex flex-col items-center gap-6 mb-10">
        <a href="https://veriwatch.io/auth" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan text-ink text-[15px] font-black px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(13,148,136,0.4)] overflow-hidden tracking-widest uppercase">
          <span className="relative z-10">Get Your Free Account</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
      
      <div className="text-[12px] text-[#6A7A92] flex flex-wrap justify-center gap-x-3 gap-y-1">
        <span>No credit card</span>
        <span className="text-[#3A4558]">·</span>
        <span>No ads</span>
        <span className="text-[#3A4558]">·</span>
        <span>Forever free tier</span>
      </div>
    </section>
  );
}
