import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export const CTA = () => (
  <section id="download" className="bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Container with a solid background and custom brand glow */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#121214] border border-zinc-800/80 p-10 md:p-20 text-center shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)]">
        
        {/* Soft, premium brand-color accent ambient light mapping */}
        <div
          className="absolute inset-0 -z-10 opacity-30 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, #4caf50 0%, transparent 65%)",
          }}
        />
        
        {/* Deep background mesh blurs for dimensional depth */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4caf50]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Start managing your money{" "}
            <span className="bg-gradient-to-r from-white via-[#4caf50] to-[#388e3c] bg-clip-text text-transparent">
              today 
            </span>.
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed font-light">
            Download the app now to keep track of your expenses{" "}
            <span className="text-white font-medium">Pulspense</span>. Free to download.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            
            {/* Google Play Button - Premium Brand Highlight */}
            <Button 
              variant="default" 
              size="xl" 
              className="bg-[#4caf50] hover:bg-[#43a047] text-black font-semibold rounded-xl px-6 py-6 h-auto shadow-[0_0_25px_rgba(76,175,80,0.2)] hover:shadow-[0_0_35px_rgba(76,175,80,0.35)] transition-all duration-300 ease-out group"
            >
              <Smartphone className="w-5 h-5 text-black mr-1" strokeWidth={2.5} />
              <span className="flex flex-col items-start text-left leading-tight">
                <span className="text-sm font-bold">Download Now</span>
              </span>
            </Button>


          </div>
        </div>
      </div>

    </div>
  </section>
);