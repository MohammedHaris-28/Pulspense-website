import phoneAnalytics from "@/assets/phone-analytics.png";
import phoneBudget from "@/assets/phone-budget.png";
import phoneTransactions from "@/assets/phone-transactions.png";
import phoneHero from "@/assets/phone-hero.png";

const screens = [
  { src: phoneHero, label: "Dashboard" },
  { src: phoneBudget, label: "Budgets" },
  { src: phoneAnalytics, label: "Analytics" },
  { src: phoneTransactions, label: "Transactions" },
];

export const Screens = () => (
  <section id="screens" className="bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      {/* Header Context */}
      <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
        App Tour
      </p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
        A delightful experience,{" "}
        <span className="bg-gradient-to-r from-white via-[#4caf50] to-[#388e3c] bg-clip-text text-transparent">
          screen by screen
        </span>.
      </h2>
      <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
        Every detail crafted — from the first tap to the final report.
      </p>
    </div>

    {/* Premium Infinite Auto-Scrolling Carousel Container */}
    <div className="mt-20 relative w-full overflow-hidden">
      
      {/* Left and Right Edge Soft-Fade Vignettes for High-End Cinematic Look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

      {/* Track Wrapper */}
      <div className="flex gap-8 w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {/* We loop through the array twice to ensure seamless continuous scrolling */}
        {[...screens, ...screens, ...screens].map((s, i) => (
          <div key={i} className="relative shrink-0 w-[260px] group select-none">
            
            {/* Elegant, ultra-subtle ambient green ground-glow behind mockups */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-[#4caf50]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Image Border Wrapper to create an "Apple-like" premium frame */}
            <div className="relative bg-[#121214] border border-zinc-800 rounded-[2.2rem] p-2 transition-all duration-300 ease-out group-hover:border-zinc-700 group-hover:bg-[#161619] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
              <img
                src={s.src}
                alt={`${s.label} screen of Pulspense app`}
                loading="lazy"
                width={260}
                height={520}
                className="w-full h-auto rounded-[1.8rem] block pointer-events-none"
              />
            </div>

            {/* Screen Caption Typography */}
            <p className="text-center text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 mt-5">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);