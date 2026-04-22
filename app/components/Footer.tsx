import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] px-6 md:px-[60px] py-10 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center">
        <Image 
          src="https://veriwatch.io/veriwatch-logo.png" 
          alt="VeriWatch Logo" 
          width={100} 
          height={24} 
          className="h-6 w-auto brightness-90 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
        />
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-[13px] text-[#6A7A92] hover:text-white transition-colors">Privacy</a>
        <a href="#" className="text-[13px] text-[#6A7A92] hover:text-white transition-colors">Terms</a>
        <a href="#" className="text-[13px] text-[#6A7A92] hover:text-white transition-colors">Support</a>
        <a href="#" className="text-[13px] text-[#6A7A92] hover:text-white transition-colors">Press</a>
        <a href="#" className="text-[13px] text-[#6A7A92] hover:text-white transition-colors">Blog</a>
      </div>
      <div className="text-[12px] text-[#3A4558]">© 2026 VeriWatch Inc. All rights reserved.</div>
    </footer>
  );
}
