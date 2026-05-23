import { useState } from "react";
import { Shield, Fingerprint, Lock, Eye } from "lucide-react";

const items = [
  { icon: Lock, label: "Device Provided Encryption", on: true },
  { icon: Fingerprint, label: "Biometric app lock", on: true },
  
];

export const Security = () => {
  const [state, setState] = useState(items.map((i) => i.on));
  
  return (
    <section id="security" className="bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Interactive Interactive Control Panel - Left Side on Desktop */}
        <div className="order-2 lg:order-1 relative group">
          {/* Subtle logo-green background illumination mapping */}
          <div className="absolute -inset-4 bg-[#4caf50]/5 rounded-[2.5rem] blur-2xl group-hover:bg-[#4caf50]/8 transition-colors duration-500 -z-10 pointer-events-none" />

          <div className="bg-[#121214] border border-zinc-800/80 rounded-[2rem] p-6 md:p-8 max-w-md mx-auto shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-zinc-700/80">
            
            {/* Control Dashboard Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-[#4caf50]/10 border border-[#4caf50]/20 text-[#4caf50] shadow-[0_4px_20px_rgba(76,175,80,0.15)]">
                <Shield className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-base font-bold text-white tracking-tight">Privacy Center</p>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mt-0.5">All controls in one place</p>
              </div>
            </div>

            {/* Premium Solid Functional Toggle Rows */}
            <div className="space-y-3">
              {items.map((it, i) => (
                <button
                  key={it.label}
                  type="button"
                  onClick={() => setState((s) => s.map((v, idx) => (idx === i ? !v : v)))}
                  className="w-full flex items-center justify-between bg-[#1a1a1e] border border-zinc-800/60 rounded-xl px-4 py-4 hover:bg-[#222227] hover:border-zinc-700 transition-all duration-200 group/row"
                >
                  <span className="flex items-center gap-3.5">
                    <it.icon className={`w-4 h-4 transition-colors duration-200 ${state[i] ? "text-[#4caf50]" : "text-zinc-500 group-hover/row:text-zinc-400"}`} strokeWidth={2} />
                    <span className="text-sm font-medium text-zinc-200 group-hover/row:text-white transition-colors">{it.label}</span>
                  </span>
                  
                  {/* Premium Native Custom Switch Pill */}
                  <span
                    className={`relative w-10 h-6 rounded-full transition-all duration-300 ${
                      state[i] 
                        ? "bg-[#4caf50] shadow-[0_0_15px_rgba(76,175,80,0.4)]" 
                        : "bg-zinc-800 border border-zinc-700"
                    }`}
                  >
                    <span
                      className={`absolute top-[3px] left-[3px] w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                        state[i] ? "translate-x-4 bg-black" : ""
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Informational Copy Deck - Right Side on Desktop */}
        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Security
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Private. Secure.{" "}
            <span className="bg-gradient-to-r from-white via-[#4caf50] to-[#388e3c] bg-clip-text text-transparent">
              Yours.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
            Your data stays on your device. Fully encrypted, locked behind biometrics, and
            never sold. Pulspense is designed so you — and only you — see your finances.
          </p>

          {/* Luxury Minimalist Point Matrix */}
          <ul className="mt-10 space-y-4 text-sm font-medium">
            {[
              "Zero third-party trackers",
              "Local-first architecture",
              "Optional encrypted cloud backup",
              "Open privacy policy",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3.5 text-zinc-300 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50] shadow-[0_0_8px_rgba(76,175,80,0.6)] transition-transform duration-300 group-hover/item:scale-125" />
                <span className="group-hover/item:text-white transition-colors duration-200">{t}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};