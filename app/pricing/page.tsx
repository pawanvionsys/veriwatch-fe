import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans py-20 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
          Your Personal Intelligence <br />
          <span className="text-[#14b8a6]">Operations Center</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          For less than the cost of a tank of gas, get a 24/7 intelligence team watching your back.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2030] border border-white/5 text-gray-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            Sex Offender Registry
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2030] border border-white/5 text-gray-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            Weather Alerts
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2030] border border-white/5 text-gray-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Terrorism Advisories
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Scout Plan */}
        <div className="flex flex-col rounded-2xl bg-[#0F1423] border border-white/10 p-6 flex-1 h-full">
          <div className="flex items-center gap-2 mb-2 text-white text-lg font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Scout
          </div>
          <p className="text-sm text-gray-400 mb-6">Get started free</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$0</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">Free forever</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            {['National frequencies (NIFOG)', 'Basic incident map', '1 saved location', '5 camera views/day', '10 AI chats/day', 'Weather alerts'].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>{feature}</span>
              </li>
            ))}
            {['Tank & Daisy AI (unlimited)', 'Sex offender registry', 'Terrorism alerts'].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-500">
                <svg className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 rounded-md border border-white/10 text-gray-400 font-semibold hover:bg-white/5 transition-colors mt-auto">
            Current Plan
          </button>
        </div>

        {/* Basic Plan */}
        <div className="flex flex-col rounded-2xl bg-[#0F1423] border border-[#2563EB] p-6 flex-1 h-full shadow-[0_0_15px_rgba(37,99,235,0.15)] relative">
          <div className="flex items-center gap-2 mb-2 text-white text-lg font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Basic
          </div>
          <p className="text-sm text-gray-400 mb-6">Full access to essentials</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$12</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">per month</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            {[
              { text: 'All 50 states frequencies', bold: true },
              { text: 'Unlimited cameras & scanners', bold: true },
              { text: '50 AI chats/day' },
              { text: 'Voice alerts & briefings' },
              { text: 'Sex offender registry', bold: true },
              { text: 'Weather & terrorism alerts' },
              { text: '3 Watch Zones' },
              { text: 'AI threat analysis' },
              { text: 'Ad-free experience' },
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span className={feature.bold ? 'font-semibold text-white' : ''}>{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 rounded-md bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors mt-auto">
            Go Basic - $12/mo
          </button>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col rounded-2xl bg-[#0F1423] border border-[#14b8a6] p-6 flex-1 h-full shadow-[0_0_20px_rgba(20,184,166,0.15)] relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#14b8a6] text-black text-xs font-bold px-3 py-1 rounded-sm flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Most Popular
          </div>
          
          <div className="flex items-center gap-2 mb-2 text-white text-lg font-bold mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Pro
          </div>
          <p className="text-sm text-gray-400 mb-6">Unlimited AI + priority</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$16</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">per month</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            {[
              { text: 'Everything in Basic' },
              { text: 'Unlimited AI chats', bold: true },
              { text: '10 Watch Zones' },
              { text: 'Priority alerts', bold: true },
              { text: 'Family sharing (2 members)' },
              { text: 'Daily intelligence briefing' },
              { text: 'Export to scanner' },
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span className={feature.bold ? 'font-semibold text-white' : ''}>{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 rounded-md bg-[#14b8a6] text-black font-bold hover:bg-teal-500 transition-colors mt-auto">
            Go Pro - $16/mo
          </button>
        </div>

        {/* Business Plan */}
        <div className="flex flex-col rounded-2xl bg-[#0F1423] border border-[#9333EA] p-6 flex-1 h-full shadow-[0_0_15px_rgba(147,51,234,0.15)] relative">
          <div className="flex items-center gap-2 mb-2 text-white text-lg font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
            Business
          </div>
          <p className="text-sm text-gray-400 mb-6">For teams & organizations</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$40</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">per month</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            {[
              { text: 'Everything in Pro' },
              { text: 'Unlimited Watch Zones', bold: true },
              { text: 'Up to 5 team members', bold: true },
              { text: 'API access' },
              { text: 'Data export (CSV)' },
              { text: 'Custom branding' },
              { text: 'Priority support', bold: true },
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span className={feature.bold ? 'font-semibold text-white' : ''}>{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 rounded-md bg-[#9333EA] text-white font-semibold hover:bg-purple-600 transition-colors mt-auto">
            Go Business - $40/mo
          </button>
        </div>

      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-400 font-medium">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Cancel anytime
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Secure Stripe payment
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          30-day money back
        </div>
      </div>

      {/* What's New Section */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-2xl font-bold text-center text-white mb-8">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A0D15] border border-white/5 p-6 rounded-xl flex flex-col items-start">
            <svg className="w-8 h-8 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <h3 className="font-bold text-white mb-2">Sex Offender Registry</h3>
            <p className="text-gray-400 text-sm mb-4">View registered offenders in your area directly on the map. Data from public state registries.</p>
            <span className="inline-block px-3 py-1 bg-blue-900/30 text-[#60A5FA] text-xs font-bold rounded mt-auto">Basic+</span>
          </div>
          <div className="bg-[#0A0D15] border border-white/5 p-6 rounded-xl flex flex-col items-start">
            <svg className="w-8 h-8 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            <h3 className="font-bold text-white mb-2">Weather Alerts</h3>
            <p className="text-gray-400 text-sm mb-4">Real-time severe weather warnings from the National Weather Service.</p>
            <span className="inline-block px-3 py-1 bg-green-900/30 text-[#10B981] text-xs font-bold rounded mt-auto">All Plans</span>
          </div>
          <div className="bg-[#0A0D15] border border-white/5 p-6 rounded-xl flex flex-col items-start">
            <svg className="w-8 h-8 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <h3 className="font-bold text-white mb-2">Terrorism Advisories</h3>
            <p className="text-gray-400 text-sm mb-4">DHS threat level bulletins and FBI alerts for your watch zones.</p>
            <span className="inline-block px-3 py-1 bg-blue-900/30 text-[#60A5FA] text-xs font-bold rounded mt-auto">Basic+</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-24 mb-12">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            "Can I cancel anytime?",
            "What happens to my data if I downgrade?",
            "Is the Lifetime deal really forever?",
            "What's included in the sex offender registry?",
            "How do terrorism alerts work?"
          ].map((question, i) => (
            <div key={i} className="flex items-center justify-between bg-[#0A0D15] border border-white/5 p-5 rounded-md cursor-pointer hover:bg-white/[0.02] transition-colors">
              <span className="text-sm font-medium text-gray-200">{question}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
