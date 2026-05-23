import {
  Receipt,
  Wallet,
  Bell,
  BarChart3,
  FileText,
  Cloud,
  Lock,
  Palette,
} from "lucide-react";

const features = [
  { 
    icon: Receipt, 
    title: "Expense Tracking", 
    desc: "Log spending in seconds with smart categorization and instant insights.",
    // Premium Emerald Green for cash/expenses
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30"
  },
  { 
    icon: Wallet, 
    title: "Budget Management", 
    desc: "Set monthly budgets and stay on track with real-time alerts.",
    // Soft Blue for financial planning
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/30"
  },
  { 
    icon: Bell, 
    title: "EMI & Reminders", 
    desc: "Never miss a payment with intelligent due-date notifications.",
    // Warm Amber for alerts/notifications
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30"
  },
  { 
    icon: BarChart3, 
    title: "Smart Analytics", 
    desc: "Beautiful charts that reveal exactly where your money goes.",
    // Indigo for structured data & analytics
    colorClass: "text-indigo-400",
    bgClass: "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30"
  },
  { 
    icon: FileText, 
    title: "PDF Reports", 
    desc: "Generate polished monthly statements with a single tap.",
    // Modern Teal for clean documents
    colorClass: "text-teal-400",
    bgClass: "bg-teal-500/10 border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/30"
  },
  { 
    icon: Cloud, 
    title: "Backup & Restore", 
    desc: "Encrypted backups so your data is always safe and portable.",
    // Sleek Sky Blue for cloud storage
    colorClass: "text-sky-400",
    bgClass: "bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/20 group-hover:border-sky-500/30"
  },
  { 
    icon: Lock, 
    title: "App Lock & Security", 
    desc: "Biometric protection keeps your finances private — always.",
    // Regal Violet for core security and privacy
    colorClass: "text-violet-400",
    bgClass: "bg-violet-500/10 border-violet-500/20 group-hover:bg-violet-500/20 group-hover:border-violet-500/30"
  },
  { 
    icon: Palette, 
    title: "Custom Themes", 
    desc: "Personalize Pulspense to match your style and mood.",
    // Vibrant Rose for customization and design
    colorClass: "text-rose-400",
    bgClass: "bg-rose-500/10 border-rose-500/20 group-hover:bg-rose-500/20 group-hover:border-rose-500/30"
  },
];

export const Features = () => (
  <section id="features" className="bg-[#09090b] text-zinc-50 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-3xl">
        <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
          Features
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            master your money
          </span>.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
          Crafted with care to make personal finance feel simple, beautiful, and rewarding.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 transition-all duration-300 ease-out hover:bg-[#161619] hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {/* Subtle glow layer behind the container on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Custom Colored Premium Icon Container */}
            <div className={`w-11 h-11 rounded-xl grid place-items-center border mb-6 transition-all duration-300 ease-out ${f.bgClass}`}>
              <f.icon className={`w-5 h-5 ${f.colorClass} group-hover:scale-105 transition-transform duration-300`} strokeWidth={2} />
            </div>

            {/* Typography */}
            <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors duration-200 mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed font-light">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);