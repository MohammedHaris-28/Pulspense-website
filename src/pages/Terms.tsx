import { Scale, ShieldCheck, RefreshCw, Mail, Smartphone } from "lucide-react";
import logo from "@/assets/logo.png";

export const TermsAndConditions = () => {
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
        
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
            User Agreement
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Terms & Conditions
          </h1>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-[#121214] border border-zinc-800 rounded-full text-xs font-medium text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]" />
            Welcome to PulsPense
          </div>
        </div>

        {/* Welcome Briefing Box */}
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-center sm:text-left">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Please read these Terms and Conditions carefully before using the <span className="text-white font-semibold">PulsPense</span> mobile application. By choosing to use this application, you accept the guidelines laid out below.
          </p>
        </div>

        {/* Content Section Matrix */}
        <div className="space-y-12">
          
          {/* Section 1: Acceptance of Terms */}
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Scale className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access or use the Service.
            </p>
          </div>

          {/* Section 2: Your Data & Privacy */}
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#4caf50]/10 border border-[#4caf50]/20 flex items-center justify-center text-[#4caf50]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">2. Your Data & Privacy</h2>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              PulsPense is designed with your privacy in mind. We want to be completely clear about how information is structured:
            </p>

            {/* Core Privacy Pillar Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#121214] border border-zinc-800/80 rounded-xl p-5">
                <p className="text-sm font-semibold text-zinc-200">Zero Server Data Storage</p>
                <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
                  We <span className="text-white font-medium">DO NOT</span> collect, store, or transmit any of your personal financial data (transactions, budgets, reminders, etc.) to our servers. All your financial records are stored locally on your device.
                </p>
              </div>

              <div className="bg-[#121214] border border-zinc-800/80 rounded-xl p-5">
                <p className="text-sm font-semibold text-zinc-200">Pro Mode Payments</p>
                <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
                  Your payment credentials for Pro Mode are handled solely by the respective app store (e.g., Google Play Store) and are <span className="text-white font-medium">NEVER</span> stored or collected by PulsPense.
                </p>
              </div>
            </div>

            {/* Device Encryption Notice Block */}
            <div className="p-5 bg-[#1a1a1e] border-l-2 border-[#4caf50] rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5 text-[#4caf50]" />
                Security Recommendation
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                For enhanced security of your locally stored data, we highly recommend enabling your device's built-in encryption features, such as a strong password, PIN, or biometric authentication (fingerprint/face ID). If your device encryption is not enabled, your local data may be at a higher risk of unauthorized access if your device is compromised.
              </p>
            </div>

            {/* Google Drive Clause */}
            <p className="text-xs text-zinc-500 font-light leading-relaxed mt-4 px-1">
              * While your app data can be backed up to your personal Google Drive account (if you choose to enable this feature), backing up your app data ensures your financial records are preserved, but does not pertain to your payment methods or purchase verification, which remains tied strictly to your app store account.
            </p>
          </div>

          {/* Section 3: Changes to Terms */}
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">3. Changes to Terms</h2>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least <span className="text-white font-medium">30 days notice</span> prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          {/* Contact Footer Block */}
          <div className="border-t border-zinc-800/80 pt-8 text-center">
            <div className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-4">
              <Mail className="w-4 h-4 text-[#4caf50]" />
              Questions About Our Terms?
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-1">
              <a 
                href="mailto:pulspensehelpdesk@gmail.com" 
                className="w-full sm:w-auto bg-[#121214] border border-zinc-800 hover:border-zinc-700 hover:bg-[#1a1a1e] px-4 py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200"
              >
                pulspensehelpdesk@gmail.com
              </a>
              <a 
                href="mailto:hash2codeteam@gmail.com" 
                className="w-full sm:w-auto bg-[#121214] border border-zinc-800 hover:border-zinc-700 hover:bg-[#1a1a1e] px-4 py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200"
              >
                hash2codeteam@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};