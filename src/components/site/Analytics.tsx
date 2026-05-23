import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const Stat = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="group">
      <p className="text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums group-hover:text-[#4caf50] transition-colors duration-300">
        {n.toLocaleString()}{suffix}
      </p>
      <p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
};

export const Analytics = () => {
  // SVG chart points
  const points = [10, 28, 22, 45, 38, 60, 55, 78, 70, 88, 82, 96];
  const max = 100;
  const w = 520, h = 200;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <section id="analytics" className="bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Informational Content */}
        <div>
          <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Analytics
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Understand your spending{" "}
            <span className="bg-gradient-to-r from-white via-[#4caf50] to-[#388e3c] bg-clip-text text-transparent">
              like never before
            </span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
            Live charts, smart breakdowns, and AI-driven insights help you spot patterns 
            and make smarter financial decisions every single day.
          </p>

          
        </div>

        {/* Right Dashboard Mockup Panel Component */}
        <div className="relative group">
          
          {/* Subtle brand backlighting glow layer instead of heavy blur rings */}
          <div className="absolute -inset-4 bg-[#4caf50]/5 rounded-[2.5rem] blur-2xl group-hover:bg-[#4caf50]/8 transition-colors duration-500 -z-10 pointer-events-none" />

          {/* Main Card Element */}
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[2rem] p-6 md:p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-zinc-700/80">
            
            {/* Widget Header Elements */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Total spent · This Month</p>
                <p className="text-3xl sm:text-4xl font-black text-white mt-1">
                  ₹3,248<span className="text-xl text-zinc-500 font-normal">.50</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[#4caf50] text-xs font-bold bg-[#4caf50]/10 border border-[#4caf50]/20 rounded-full px-3 py-1.5 shadow-[0_4px_12px_rgba(76,175,80,0.1)]">
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} /> 12.4%
              </div>
            </div>

            {/* Premium Customized SVG Graph Line Vector */}
            <div className="relative my-4">
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48 overflow-visible">
                <defs>
                  {/* Highly polished gradient fill for vector area grounding */}
                  <linearGradient id="brandChartGlow" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4caf50" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4caf50" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Gradient Fill Under Path */}
                <path d={area} fill="url(#brandChartGlow)" />
                {/* Clean, Sharp Main Green Trend line */}
                <path d={path} fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Minimalist Grid Node Anchors */}
                {points.map((p, i) => (
                  <circle 
                    key={i} 
                    cx={i * step} 
                    cy={h - (p / max) * h} 
                    r="4" 
                    fill="#121214" 
                    stroke="#4caf50" 
                    strokeWidth="2.5"
                    className="hover:r-5 transition-all duration-150 cursor-pointer"
                  />
                ))}
              </svg>
            </div>

            {/* Bottom Secondary Grid Row Cards */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Activity, label: "Avg/day", value: "₹108", color: "text-zinc-400" },
                { icon: TrendingDown, label: "Saved", value: "₹420", color: "text-[#4caf50]" },
                { icon: TrendingUp, label: "Income", value: "₹5.2k", color: "text-sky-400" },
              ].map((s) => (
                <div key={s.label} className="bg-[#1a1a1e] border border-zinc-800/60 rounded-xl p-3.5 transition-all duration-300 hover:border-zinc-700 hover:bg-[#222227]">
                  <s.icon className={`w-4 h-4 ${s.color} mb-3`} strokeWidth={2.2} />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{s.label}</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">{s.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};