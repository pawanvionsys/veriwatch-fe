import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#021626] backdrop-blur-xl mt-2 rounded-full border-bottom border-[rgba(255,255,255,0.07)] px-6 md:px-[60px] h-16 flex items-center justify-between sticky top-2 z-50">
      <a href="/" className="flex items-center">
        <Image 
          src="https://veriwatch.io/veriwatch-logo.png" 
          alt="VeriWatch Logo" 
          width={120} 
          height={32} 
          style={{ width: 'auto' }}
          className="h-12 md:h-14 lg:h-16"
          priority
        />
      </a>
      <div className="hidden md:flex gap-8">
        <a href="/" className="text-sm text-[#6A7A92] hover:text-white transition-colors">Home</a>
        <a href="#features" className="text-sm text-[#6A7A92] hover:text-white transition-colors">Features</a>
        <a href="#pricing" className="text-sm text-[#6A7A92] hover:text-white transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://veriwatch.io/auth" className="hidden sm:block text-sm font-semibold text-[#6A7A92] hover:text-white transition-colors">Sign In</a>
        <a href="https://veriwatch.io/auth" className="bg-[#0D9488] text-[#0A0C10] text-[13px] font-bold px-6 py-[10px] rounded-full font-barlow hover:brightness-110 transition-all">
          Get started
        </a>
      </div>
    </nav>
  );
}
