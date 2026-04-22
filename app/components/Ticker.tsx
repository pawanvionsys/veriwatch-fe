import React from 'react';

const tickerItems = [
  { type: 'Police', city: 'Chicago, IL', msg: 'Structure fire near Wicker Park, 3 units responding', color: 'var(--red)' },
  { type: 'Weather', city: 'Austin, TX', msg: 'Tornado watch issued until 10PM CDT', color: 'var(--amber)', badgeClass: 'text-[#F5A623] bg-[rgba(245,166,35,0.12)]' },
  { type: 'FDA Recall', city: 'Nationwide', msg: 'Listeria contamination: 4 produce brands recalled', color: 'var(--green)', badgeClass: 'text-[#2ED573] bg-[rgba(46,213,115,0.1)]' },
  { type: 'Scanner', city: 'Denver, CO', msg: 'I-25 northbound closure, major accident mile 218', color: 'var(--cyan)', badgeClass: 'text-[#0D9488] bg-[rgba(13,148,136,0.15)]' },
  { type: 'Sex Offender', city: 'Phoenix, AZ', msg: 'New registration within 0.5mi of Arcadia Elementary', color: 'var(--red)' },
  { type: 'Weather', city: 'Tampa, FL', msg: 'Hurricane watch: Category 2 landfall expected in 18hrs', color: 'var(--amber)', badgeClass: 'text-[#F5A623] bg-[rgba(245,166,35,0.12)]' },
  { type: 'CDC Alert', city: 'Southeast US', msg: 'Elevated flu activity reported in 6 states', color: 'var(--green)', badgeClass: 'text-[#2ED573] bg-[rgba(46,213,115,0.1)]' },
  { type: 'Scanner', city: 'Los Angeles, CA', msg: 'Vehicle pursuit on I-10, LAPD involved', color: 'var(--cyan)', badgeClass: 'text-[#0D9488] bg-[rgba(13,148,136,0.15)]' },
];

export default function Ticker() {
  const allItems = [...tickerItems, ...tickerItems]; // Duplicate for seamless loop

  return (
    <div className="border-y border-[rgba(255,255,255,0.07)] bg-[#161B26]/70 overflow-hidden whitespace-nowrap">
      <div className="inline-flex py-3 animate-ticker">
        {allItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-[10px] px-8 border-r border-[rgba(255,255,255,0.07)]">
            <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: item.color }} />
            <span className={`text-[9px] font-bold font-barlow tracking-[0.08em] px-[7px] py-[2px] rounded-full uppercase ${item.badgeClass || 'text-[#FF4757] bg-[rgba(255,71,87,0.12)]'}`}>
              {item.type}
            </span>
            <span className="text-sm text-[#D8E0EE]">{item.city}</span>
            <span className="text-sm text-[#6A7A92]"> — {item.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
