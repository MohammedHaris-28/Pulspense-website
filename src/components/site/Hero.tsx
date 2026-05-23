import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";

// Safe asset import configuration
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative bg-[#09090b] text-zinc-50 pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Premium Minimalist Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Soft Ambient Brand Glow Behind Content Matrix */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-20"
        style={{
          background: "radial-gradient(circle, #4caf50 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Messaging Copy Deck */}
        <div className="animate-fade-up">
          
          {/* Version Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-400 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4caf50]" />
            <span>New · Smart Insights v2 is here</span>
          </div>

          {/* Premium High-Contrast Header */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-white via-[#4caf50] to-[#388e3c] bg-clip-text text-transparent">
              Money
            </span>,
            <br />
            Effortlessly.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
            Track expenses, manage budgets, and visualize your financial future —
            all in one beautifully crafted app.
          </p>

          {/* Action Row Links */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button 
              variant="default" 
              size="xl" 
              className="bg-[#4caf50] hover:bg-[#43a047] text-black font-bold rounded-xl px-6 py-6 h-auto transition-all duration-300 shadow-[0_4px_20px_rgba(76,175,80,0.25)] hover:shadow-[0_4px_30px_rgba(76,175,80,0.4)] group"
              asChild
            >
              <a href="#download" className="flex items-center gap-2">
                Download Now
              </a>
            </Button>
            
          </div>

          
        </div>

        {/* Right Side: Premium Logo Icon Showcase Area Container */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative animate-float">
            
            {/* Elegant brand grounding ambient backlight */}
            <div className="absolute -inset-1 bg-[#4caf50]/20 rounded-[2.5rem] blur-2xl scale-95 pointer-events-none" />
            
            {/* Core Solid Frame Wrapper Container with exact overflow-hidden to match smooth corners */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#121214] border-2 border-zinc-800/80 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-[0_32px_64px_-20px_rgba(0,0,0,0.8)]">
              {logo ? (
                <img
                  src={logo}
                  alt="Pulspense App Icon Showcase"
                  className="w-full h-full object-cover select-none pointer-events-none rounded-[2.35rem]"
                />
              ) : (
                /* Fallback clean text icon container if asset fails path compiling */
                <div className="w-full h-full rounded-[2.35rem] bg-[#4caf50]/10 border border-[#4caf50]/20 grid place-items-center">
                  <span className="text-[#4caf50] text-4xl font-black">P.</span>
                </div>
              )}
            </div>
          </div>

          {/* Premium Floating Metric Chip A */}
          <div className="absolute top-8 -left-4 bg-[#1a1a1e] border border-zinc-800 rounded-2xl px-4 py-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 select-none animate-float-delayed z-20">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">This month</p>
            <p className="text-lg font-black text-[#4caf50] mt-0.5">₹2,340</p>
          </div>

          {/* Premium Floating Metric Chip B */}
          <div className="absolute bottom-12 right-0 bg-[#1a1a1e] border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 select-none animate-float z-20">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Saved Balance</p>
            <p className="text-lg font-black text-white mt-0.5">₹8,210</p>
          </div>

        </div>
      </div>
    </section>
  );
};