import { Terminal, Layout, Layers, Heart, Mail, ShieldCheck, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  { title: "Budget Management", desc: "Take proactive control of your spending metrics with intuitive budget tools." },
  { title: "Payment Reminders", desc: "Never miss an upcoming bill or account payment with localized background alerts." },
  { title: "Generate PDF Reports", desc: "Compile details instantly into clean, exportable, summary-ready PDF logs." },
  { title: "Weekly Spend Charts", desc: "Visualize transaction habits clearly using high-contrast, beautiful trend vectors." },
  { title: "Clutter-Free Lists", desc: "Scan and trace your historical entries through a minimalist ledger matrix layout." },
  { title: "Color Preferences", desc: "Personalize your layout interface styling canvas with curated premium dark choices." },
  { title: "Lightweight & Offline", desc: "Absolute privacy with zero external connectivity requirements. Data stays entirely yours." },
];

export const AboutUs = () => {
  return (
    <section className="relative bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
      
      {/* Premium Minimalist Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Soft Ambient Brand Glow Behind Header Matrix */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none mix-blend-screen opacity-15"
        style={{
          background: "radial-gradient(circle, #4caf50 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Core Header Branding Area */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 bg-[#121214] border-2 border-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center p-1 shadow-[0_16px_32px_rgba(0,0,0,0.5)]">
              {logo ? (
                <img
                  src={logo}
                  alt="PulsPense App Icon"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-[#4caf50] text-2xl font-black">P.</span>
              )}
            </div>
          </div>
          
          <p className="text-xs font-bold tracking-widest text-[#4caf50] uppercase mb-3">
            Our Origin Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            About PulsPense
          </h1>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-[#121214] border border-zinc-800 rounded-full text-xs font-medium text-zinc-400">
            <Heart className="w-3 h-3 text-[#4caf50] fill-current animate-pulse" />
            Empowering Financial Independence
          </div>
        </div>

        {/* Core Concept Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[#4caf50]/10 border border-[#4caf50]/20 flex items-center justify-center text-[#4caf50] mb-4">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">The Problem We Solved</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Ever feel like your money just… disappears? We've been there. That's why we built our expense tracker, born from a simple idea: managing your money shouldn't be an annoying daily chore, it should be thoroughly empowering.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                <Layout className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Designed & Crafted For You</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                We meticulously crafted a minimalist UI because we believe powerful utilities don't need complicated interfaces. Every layout component, gesture swipe, and tracker flow was assembled for frictionless data entry, letting you focus on understanding your metrics.
              </p>
            </div>
          </div>
        </div>

        {/* App Functional Feature Matrices */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8 border-b border-zinc-800/80 pb-4">
            <Layers className="w-4 h-4 text-[#4caf50]" />
            <h2 className="text-xl font-bold text-white tracking-tight">Features That Make A Difference</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div key={i} className="p-5 bg-[#121214]/40 border border-zinc-800/60 rounded-xl space-y-1.5 transition-all duration-200 hover:border-zinc-800">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] mb-2 shadow-[0_0_8px_rgba(76,175,80,0.6)]" />
                <p className="text-sm font-semibold text-zinc-200 tracking-tight">{feat.title}</p>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Group Panel */}
        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/40 border border-zinc-800 rounded-2xl p-8 mb-16 text-center relative overflow-hidden shadow-[0_32px_64px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#4caf50]/5 blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800 text-zinc-300 mb-4">
            <Terminal className="w-5 h-5" />
          </div>
          <p className="text-[10px] font-bold tracking-widest text-[#4caf50] uppercase">Core Developers</p>
          <h2 className="text-3xl font-black text-white tracking-tight mt-1 mb-3">#2CODE-TEAM</h2>
          <p className="text-xs text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
            Committed to shipping smooth, zero-bloat tracking utilities with top-tier aesthetic design. Your device is the server; your data is secure.
          </p>
        </div>

        {/* Contact Links Footer Card */}
        <div className="border-t border-zinc-800/80 pt-8 text-center">
          <div className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-4">
            <Mail className="w-4 h-4 text-[#4caf50]" />
            Connect With Our Desk
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-1">
            <a 
              href="mailto:pulspensehelpdesk@gmail.com" 
              className="w-full sm:w-auto bg-[#121214] border border-zinc-800 hover:border-zinc-700 hover:bg-[#1a1a1e] px-5 py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" /> pulspensehelpdesk@gmail.com
            </a>
            <a 
              href="mailto:hash2codeteam@gmail.com" 
              className="w-full sm:w-auto bg-[#121214] border border-zinc-800 hover:border-zinc-700 hover:bg-[#1a1a1e] px-5 py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200"
            >
              hash2codeteam@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};