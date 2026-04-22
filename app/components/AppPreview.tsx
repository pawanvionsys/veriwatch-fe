import React from 'react';

export default function AppPreview() {
  return (
    <section className="px-6 md:px-[60px] py-20 flex flex-col md:flex-row gap-20 items-center bg-gradient-to-br from-[#111520] to-[#161B26] border-y border-[rgba(255,255,255,0.07)]">
      <div className="flex-1">
        <div className="label-tag">Your personal ops center</div>
        <h2 className="font-barlow text-[36px] md:text-[42px] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-5">
          Everything on one<br /><span className="text-[#0D9488]">live map.</span>
        </h2>
        <p className="text-[15px] text-[#6A7A92] leading-[1.65] mb-9 max-w-xl">
          VeriWatch aggregates eight real-time data streams into a single, actionable view. No switching between apps. No missing alerts. Just intelligence when you need it.
        </p>
        
        <div className="flex flex-col gap-5">
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#0D9488" strokeWidth="1.3"/><path d="M9 5.5v3.5l2 1" stroke="#0D9488" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">Real-time incident map</div>
              <div className="text-[13px] text-[#6A7A92] leading-[1.55]">Police activity, weather alerts, offender locations, and traffic incidents — all plotted on a single live map centred on your location.</div>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 5.5H17L12 11l2 5.5L9 13l-5 3.5 2-5.5L1 7.5h6.2L9 2z" stroke="#F5A623" strokeWidth="1.3" fill="none"/></svg>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">Push-first alerts</div>
              <div className="text-[13px] text-[#6A7A92] leading-[1.55]">Get notified before local news reports it. Our scanner AI summarises incidents in plain English so you always understand what's happening.</div>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="4" width="12" height="10" rx="1.5" stroke="#2ED573" strokeWidth="1.3"/><path d="M6 8h6M6 11h4" stroke="#2ED573" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="text-[14px] font-medium text-white mb-1">One-tap AI briefing</div>
              <div className="text-[13px] text-[#6A7A92] leading-[1.55]">Ask "Is my neighbourhood safe tonight?" and get an AI-powered safety briefing synthesised from all eight live data sources.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[340px] shrink-0">
        {/* Phone Mockup */}
        <div className="w-[280px] mx-auto relative">
          <div className="bg-[#111520] rounded-[40px] border-2 border-[rgba(255,255,255,0.12)] p-[14px] overflow-hidden">
            <div className="w-20 h-[26px] bg-[#0A0C10] rounded-b-[14px] mx-auto mb-3 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#161B26]" />
            </div>
            
            <div className="bg-[#161B26] rounded-[26px] overflow-hidden">
              <div className="flex justify-between items-center px-4 pt-[10px] pb-[6px] text-[#D8E0EE]">
                <span className="text-[12px]">9:41</span>
                <span className="text-[10px] text-[#6A7A92]">VeriWatch</span>
                <span className="text-[10px]">●●●</span>
              </div>
              
              <div className="h-[180px] bg-[#111520] mx-3 rounded-[14px] relative overflow-hidden border border-[rgba(255,255,255,0.07)]">
                {/* Map Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:30px_30px]" />
                
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-[#FF4757]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-[rgba(255,71,87,0.35)] animate-ring" />
                </div>
                
                <div className="absolute top-[70%] left-[30%] w-2 h-2 rounded-full bg-[#F5A623]" />
                <div className="absolute top-[55%] left-[65%] w-[6px] h-[6px] rounded-full bg-[#0D9488]" />
                
                <div className="absolute top-3 left-3 bg-[#FF4757]/90 rounded-md px-[10px] py-1 text-[10px] font-bold text-white font-barlow">
                  ! Active incident
                </div>
                
                <div className="absolute bottom-[10px] right-[10px] bg-[#0A0C10]/85 rounded-md px-2 py-[3px] text-[9px] font-bold text-[#0D9488] font-barlow border border-[rgba(13,148,136,0.25)] flex items-center gap-[5px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#FF4757] animate-blink" /> LIVE
                </div>
              </div>
              
              <div className="px-3 py-[10px] flex flex-col gap-[6px]">
                <div className="bg-[#1A2030] rounded-[10px] p-[10px_12px] border border-[rgba(255,255,255,0.07)] flex items-start gap-[10px]">
                  <div className="w-[7px] h-[7px] rounded-full shrink-0 mt-[3px] bg-[#FF4757]" />
                  <div>
                    <div className="text-[11px] font-semibold text-white mb-[2px]">Police activity — 0.3 mi away</div>
                    <div className="text-[10px] text-[#6A7A92]">Vehicle pursuit · Oak St & Michigan Ave</div>
                  </div>
                </div>
                
                <div className="bg-[#1A2030] rounded-[10px] p-[10px_12px] border border-[rgba(255,255,255,0.07)] flex items-start gap-[10px]">
                  <div className="w-[7px] h-[7px] rounded-full shrink-0 mt-[3px] bg-[#F5A623]" />
                  <div>
                    <div className="text-[11px] font-semibold text-white mb-[2px]">Tornado watch until 9PM</div>
                    <div className="text-[10px] text-[#6A7A92]">NWS · Move to interior room</div>
                  </div>
                </div>
                
                <div className="bg-[#1A2030] rounded-[10px] p-[10px_12px] border border-[rgba(255,255,255,0.07)] flex items-start gap-[10px]">
                  <div className="w-[7px] h-[7px] rounded-full shrink-0 mt-[3px] bg-[#2ED573]" />
                  <div>
                    <div className="text-[11px] font-semibold text-white mb-[2px]">FDA recall in your area</div>
                    <div className="text-[10px] text-[#6A7A92]">Spinach brand · Listeria risk</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-[6px] px-3 pt-2 pb-[14px]">
                <div className="bg-[#1E2535] rounded-lg p-[8px_6px] text-center border border-[rgba(255,255,255,0.07)]">
                  <div className="font-barlow text-[16px] font-extrabold text-[#0D9488]">14</div>
                  <div className="text-[9px] text-[#6A7A92] mt-[2px]">Alerts today</div>
                </div>
                <div className="bg-[#1E2535] rounded-lg p-[8px_6px] text-center border border-[rgba(255,255,255,0.07)]">
                  <div className="font-barlow text-[16px] font-extrabold text-[#0D9488]">2</div>
                  <div className="text-[9px] text-[#6A7A92] mt-[2px]">Offenders nearby</div>
                </div>
                <div className="bg-[#1E2535] rounded-lg p-[8px_6px] text-center border border-[rgba(255,255,255,0.07)]">
                  <div className="font-barlow text-[16px] font-extrabold text-[#0D9488]">HIGH</div>
                  <div className="text-[9px] text-[#F5A623] mt-[2px]">Threat level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
