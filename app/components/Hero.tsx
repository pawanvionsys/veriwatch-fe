import React from 'react';
import Image from 'next/image';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <>
    <section className="min-h-[80vh] lg:h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[60px] py-20 lg:py-24 relative overflow-hidden bg-[#0A0C10]">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.15)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.1)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Animated Mesh/Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-left w-full max-w-2xl">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex h-2 w-2 relative">
              <span className=" absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">Live Safety Intelligence</span>
          </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
          Own Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-[#2dd4bf] to-cyan">Neighborhood.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg mb-12 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          The only platform aggregating <b className="text-white font-medium">Government Data real-time intelligence layers</b> into one single view. Police scanner, weather, offender maps, and AI briefings.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <a href="https://veriwatch.io/auth" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan text-ink text-[13px] font-black px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(13,148,136,0.4)] overflow-hidden tracking-widest uppercase">
            <span className="relative z-10">Enter Command Center Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-in fade-in duration-1000 delay-700">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="w-12 h-12 rounded-full border-4 border-ink overflow-hidden bg-surface">
                <img src={`https://i.pravatar.cc/100?img=${img + 10}`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-ink bg-cyan flex items-center justify-center text-[11px] font-black text-ink z-10">
              500K
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-4 h-4 text-cyan fill-cyan" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">Trusted by 500k+ Families</span>
          </div>
        </div>
      </div>
      {/* Right Content - Command Center Dashboard */}
      <div className="flex-1 flex justify-center items-center relative w-full mt-16 lg:mt-0 lg:ml-12 perspective-[2000px]">
        <div className="relative w-full max-w-[600px] aspect-[4/3] ">
          
          {/* Main Dashboard Panel */}
          <div className="absolute inset-0 bg-surface/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden">
            
            {/* Header Bar */}
            <div className="h-16 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green/80" />
                </div>
                <div className="w-px h-4 bg-white/10 mx-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Tactical View v4.2</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-red/10 border border-red/20">
                <div className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                <span className="text-[9px] font-bold uppercase text-red">8 Active Alerts</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 h-[calc(100%-4rem)] flex flex-col gap-6">
              
              {/* Map & Metrics Grid */}
              <div className="flex-1 flex gap-6">
                
                {/* Tactical Map */}
                <div className="flex-[2] rounded-3xl bg-ink/80 border border-white/5 relative overflow-hidden group">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-40" />
                  
                  {/* Radar Scan Line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/5 to-transparent w-[50%] h-full -skew-x-12 translate-x-[-100%] animate-[scan_4s_linear_infinite]" />
                  
                  {/* Map Points */}
                  <div className="absolute top-[30%] left-[40%]">
                    <div className="w-4 h-4 bg-red rounded-full relative z-10 animate-blink shadow-[0_0_20px_rgba(255,71,87,1)]" />
                    <div className="w-32 h-32 bg-red/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ring" />
                  </div>
                  <div className="absolute top-[60%] left-[70%]">
                    <div className="w-3 h-3 bg-cyan rounded-full relative z-10 shadow-[0_0_15px_rgba(13,148,136,1)]" />
                  </div>
                  <div className="absolute top-[20%] left-[80%] opacity-40">
                    <div className="w-2 h-2 bg-amber rounded-full relative z-10" />
                  </div>

                  {/* Logo Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#001626] backdrop-blur-[2px]">
                    <Image 
                      src="https://veriwatch.io/veriwatch-logo.png" 
                      alt="VeriWatch-Logo" 
                      width={80}
                      height={80}
                      className="relative z-20 w-48 lg:w-64 h-auto object-contain mt-[-3rem]"
                      priority
                    />
                  </div>
                </div>

                {/* Right Sidebar Metrics */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 rounded-2xl bg-surface/30 border border-white/5 p-4 flex flex-col justify-center gap-2">
                    <span className="text-[9px] font-bold uppercase text-muted tracking-wider">Neighborhood Score</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white tracking-tighter">98.4</span>
                      <span className="text-[10px] font-bold text-green mb-1.5">+2.4%</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-surface/30 border border-white/5 p-4 flex flex-col justify-center gap-2">
                    <span className="text-[9px] font-bold uppercase text-muted tracking-wider">Intelligence Layers</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white tracking-tighter">08</span>
                      <div className="flex gap-0.5 mb-2">
                        {[1,2,3].map(i => <div key={i} className="w-1 h-3 bg-cyan rounded-full" />)}
                        <div className="w-1 h-3 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Feed */}
              <div className="h-32 rounded-3xl bg-ink/40 border border-white/5 p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-bold text-white">Area Intelligence Update</span>
                    <span className="text-[10px] font-medium text-muted">2 mins ago</span>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed">No critical incidents reported in your 5-mile radius. Local scanner is currently clear.</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-black uppercase text-green">Secured</span>
                  <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}

          <div className="absolute -right-8 bottom-[10%] w-56 p-5 rounded-2xl bg-surface/60 backdrop-blur-xl border border-white/10 shadow-2xl [animation-delay:-4s]">
             <div className="flex items-center gap-4 mb-3">
               <div className="w-10 h-10 rounded-full border-2 border-cyan/30 flex items-center justify-center text-[10px] font-bold text-cyan">
                 AI
               </div>
               <div className="flex flex-col">
                 <span className="text-xs font-bold text-white">Intelligence Brief</span>
                 <span className="text-[9px] text-muted uppercase">Ready to view</span>
               </div>
             </div>
             <a href="https://veriwatch.io/auth" className="w-full inline-flex items-center justify-center py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-[10px] font-bold text-cyan uppercase tracking-widest hover:bg-cyan/20 transition-all">
               Open Report
             </a>
          </div>

        </div>
      </div>
    </div>
  </section>
  <div className="relative z-20 mt-10">
    <Ticker />
  </div>
  </>
);
}