import { 
  User, Plus, Eye, Trash2, Sliders, Calendar, BarChart3, HelpCircle, 
  Settings, Bell, CheckSquare, Image, Search, ChevronRight, FileText 
} from "lucide-react";
import logo from "@/assets/logo.png";

export const UserGuide = () => {
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
            Documentation
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            User Guide & Manual
          </h1>
          <p className="mt-3 text-zinc-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Your simple, master guide to tracking expenses, controlling budgets, and building better spending habits securely.
          </p>
        </div>

        {/* Introduction Philosophy Card */}
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4caf50]/10 border border-[#4caf50]/20 flex items-center justify-center text-[#4caf50] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">Welcome to PulsPense</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                We've designed this app to make managing your money effortless, secure, and entirely in your hands. Get ready to gain complete tactical mastery over your spending metrics without sharing sensitive financial data with anyone.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Grid Step Content Layout */}
        <div className="space-y-12">
          
          {/* 1. Profile Setup */}
          <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 w-6 h-6 rounded-md grid place-items-center">01</span>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <User className="w-4 h-4 text-[#4caf50]" /> Getting Started: Your Profile
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
              Personalize your tracking setup and keep your local account metrics aligned:
            </p>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#4caf50]" /> Tap the <strong className="text-zinc-200">Settings Icon (⚙️)</strong> in the bottom navbar menu.</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#4caf50]" /> Select <strong className="text-zinc-200">"Edit Profile"</strong> from the options layout stack.</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#4caf50]" /> Modify name, email, or your picture, then tap <strong className="text-white font-medium bg-[#4caf50]/10 border border-[#4caf50]/20 px-1.5 py-0.5 rounded">Save Profile</strong>.</li>
            </ul>
          </div>

          {/* 2. Adding Expenses */}
          <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 w-6 h-6 rounded-md grid place-items-center">02</span>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#4caf50]" /> Adding Expenses: Quick & Easy
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
              Recording transactions with your metrics layer is done in moments:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#1a1a1e] border border-zinc-800/60 rounded-xl space-y-1">
                <p className="font-semibold text-zinc-200 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#4caf50]" /> Core Attributes
                </p>
                <p className="text-zinc-500 font-light leading-relaxed">Enter your spent amount, tag it with native categories like "Shopping," "Meal," "Transport," or draft a dynamic "Custom" reason label.</p>
              </div>
              <div className="p-4 bg-[#1a1a1e] border border-zinc-800/60 rounded-xl space-y-1">
                <p className="font-semibold text-zinc-200 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#4caf50]" /> <Image className="w-3 h-3" /> Media Attachments
                </p>
                <p className="text-zinc-500 font-light leading-relaxed">Tap the camera icon to snap physical payment receipts or bills directly from your folder. Media is stored safely on-device.</p>
              </div>
            </div>
          </div>

          {/* 3. Viewing & Searching */}
          <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 w-6 h-6 rounded-md grid place-items-center">03</span>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#4caf50]" /> Viewing Your Spending & Reminders
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#1a1a1e] border border-zinc-800/60 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 mb-2 uppercase tracking-wide">
                  <Search className="w-3.5 h-3.5 text-[#4caf50]" /> Instant Query Search Engine
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Utilize the top search filter bar (🔍) to find past records. Instantly narrow profiles by querying numbers, exact notes, or targeted text blocks like <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">"Jan"</code> or <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">"2024"</code>.
                </p>
              </div>
              <div className="p-4 bg-[#1a1a1e] border border-zinc-800/60 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 mb-2 uppercase tracking-wide">
                  <CheckSquare className="w-3.5 h-3.5 text-[#4caf50]" /> Swipe Actions & Reminders
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Swipe <strong className="text-zinc-300">Right</strong> or tap the checkmark icon to mark a billing item complete and purge it safely. Swipe <strong className="text-zinc-300">Left</strong> to temporarily conceal it from the view scope layout for that application cycle.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Deleting & Batch Selection */}
          <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <span className="text-xs font-bold bg-zinc-800 text-zinc-300 w-6 h-6 rounded-md grid place-items-center">04</span>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-[#4caf50]" /> Managing Records: Deleting Data
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-light">
              <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/40">
                <p className="font-bold text-zinc-300 mb-1">Single Entry Flush</p>
                <p className="text-zinc-500 leading-relaxed">Long-press on a single transaction item on the main dashboard to open up the warning prompt. Confirm to completely delete records along with linked pictures.</p>
              </div>
              <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/40">
                <p className="font-bold text-zinc-300 mb-1">Multi-Selection Action</p>
                <p className="text-zinc-500 leading-relaxed">Long press an item, then click additional blocks to check off multiple entries. Tap the trash icon (🗑️) in the top action deck to drop all highlighted rows cleanly.</p>
              </div>
            </div>
          </div>

          {/* 5 & 6. Budget & Alerts */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#4caf50]" /> 5. Budget Matrix Limits
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Tap the <strong className="text-zinc-300">Budgets Icon (💳)</strong> in the navigation system deck to manage your metrics. Form new thresholds for weekly or monthly metrics, and review standard visual meters to protect yourself from edge overspending patterns.
              </p>
            </div>
            <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#4caf50]" /> 6. Smart Payment Alerts
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Configure calendar frequencies via <strong className="text-zinc-300">Tools → Payment Reminders</strong>. The engine queues reminders locally and pushes system background alerts directly to your desktop or device dashboard at exactly <strong className="text-white">9:00 AM</strong>.
              </p>
            </div>
          </div>

          {/* 7 & 8. Finance Analytics & Config */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#4caf50]" /> 7. Analytics & PDF Reports
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Gain deeper insights via <strong className="text-zinc-300">Tools → Charts</strong>. Swipe sideways across weeks or tap the calendar icon (📅) to select months. Choose <strong className="text-zinc-300">Generate PDF Report</strong> to compile structured summaries ready for export.
              </p>
            </div>
            <div className="bg-[#121214]/60 border border-zinc-800/80 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#4caf50]" /> 8. Customizing Options
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Open the <strong className="text-zinc-300">Settings panel</strong> to switch out system canvas theme setups, explore updated developer logs via the "About Us" view card, or review privacy rules protecting your financial data.
              </p>
            </div>
          </div>

          {/* Golden Quick Tips Row */}
          <div className="p-6 bg-[#1a1a1e] border-t-2 border-[#4caf50] rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#4caf50]" /> Master Tips for Financial Success
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-zinc-400 font-light">
              <p><strong className="text-zinc-300">Consistent Logging:</strong> Make it a habit to log purchases immediately after payment. The more data you log, the more powerful your monthly analytics graphs become.</p>
              <p><strong className="text-zinc-300">Use Descriptions:</strong> Even brief details like "Dinner out with team" help clarify metrics when reviewing statements later in the quarter.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};