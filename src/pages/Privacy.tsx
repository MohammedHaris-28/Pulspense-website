import { Shield, EyeOff, Terminal, Mail, Lock, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export const PrivacyPolicy = () => {
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
            Legal Framework
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-[#121214] border border-zinc-800 rounded-full text-xs font-medium text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            Last Updated: June 21, 2025
          </div>
        </div>

        {/* Core Philosophy Banner Card */}
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            We built <span className="text-white font-semibold">PulsPense</span> with your financial well-being and privacy at its core. We believe managing your expenses should be simple, secure, and entirely within your control. That's why this privacy policy is as straightforward as our app: <span className="text-white font-medium underline decoration-[#4caf50] decoration-2 underline-offset-4">we don't collect your personal financial data.</span>
          </p>
        </div>

        {/* Content Section Matrix */}
        <div className="space-y-12">
          
          {/* Section: What We Don't Collect */}
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#4caf50]/10 border border-[#4caf50]/20 flex items-center justify-center text-[#4caf50]">
                <EyeOff className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">What Information We Don't Collect</h2>
            </div>
            
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              It's simple: we don't collect, store, or transmit any of your personal spending data, financial transactions, account information, or any other details you input into the app.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1e] border border-zinc-800/60 rounded-xl p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] mb-3 shadow-[0_0_8px_rgba(76,175,80,0.6)]" />
                <p className="text-sm text-zinc-300 font-medium">Local Isolation</p>
                <p className="text-xs text-zinc-500 mt-1.5 font-light leading-relaxed">Your spending data stays on your device. It's never sent to our servers or any third party.</p>
              </div>
              <div className="bg-[#1a1a1e] border border-zinc-800/60 rounded-xl p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] mb-3 shadow-[0_0_8px_rgba(76,175,80,0.6)]" />
                <p className="text-sm text-zinc-300 font-medium">Zero Tracking</p>
                <p className="text-xs text-zinc-500 mt-1.5 font-light leading-relaxed">We don't track your usage patterns. We're focused on helping you track your money, not on tracking you.</p>
              </div>
              <div className="bg-[#1a1a1e] border border-zinc-800/60 rounded-xl p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] mb-3 shadow-[0_0_8px_rgba(76,175,80,0.6)]" />
                <p className="text-sm text-zinc-300 font-medium">No Identifiers</p>
                <p className="text-xs text-zinc-500 mt-1.5 font-light leading-relaxed">We don't ask for your personal identifiers like name, email, or phone number to use core features.</p>
              </div>
            </div>
          </div>

          {/* Section: What We Might Collect */}
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">What Information We Might Collect (Very Limited)</h2>
            </div>
            
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              To ensure the app runs smoothly and we can fix any issues, we may collect anonymous, non-identifiable technical data used purely for troubleshooting and app improvement.
            </p>

            <div className="space-y-3">
              <div className="flex gap-4 p-4 bg-[#121214] border border-zinc-800 rounded-xl">
                <div className="mt-0.5 text-[#4caf50]"><CheckCircle className="w-4 h-4" /></div>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">Crash logs</p>
                  <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">If the app crashes, we might receive an anonymous report about the crash to help us understand and fix bugs. These reports do not contain any of your personal financial data.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-[#121214] border border-zinc-800 rounded-xl">
                <div className="mt-0.5 text-[#4caf50]"><CheckCircle className="w-4 h-4" /></div>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">Basic device information</p>
                  <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">Such as your operating system version or device model, solely for troubleshooting and stability improvement. This information is anonymous and cannot be used to identify you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: How Your Data is Used & Security */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#121214] border border-zinc-800/80 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-4 text-white font-bold tracking-tight">
                <div className="w-6 h-6 rounded bg-zinc-800 grid place-items-center"><Shield className="w-3.5 h-3.5 text-zinc-400" /></div>
                How Your Data is Used
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Since we don't collect your personal financial data, there's nothing for us to use, share, or sell. Your expense lists, charts, and PDF reports are generated and stored locally on your device. You have complete control over them.
              </p>
            </div>

            <div className="p-6 bg-[#121214] border border-zinc-800/80 rounded-2xl">
              <div className="flex items-center gap-2.5 mb-4 text-white font-bold tracking-tight">
                <div className="w-6 h-6 rounded bg-zinc-800 grid place-items-center"><Lock className="w-3.5 h-3.5 text-zinc-400" /></div>
                Data Security
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Because your financial data resides only on your device, it's secured by your device's own security features (like passcodes, biometrics, etc.). We encourage you to use these native features to protect your device data.
              </p>
            </div>
          </div>

          {/* Section: Policy Changes */}
          <div className="p-6 bg-[#1a1a1e] border border-zinc-800/60 rounded-xl">
            <h3 className="text-sm font-bold text-zinc-200 mb-2 tracking-tight">Changes to This Policy</h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last Updated" date at the top of this policy.
            </p>
          </div>

          {/* Section: Contact Us Links */}
          <div className="border-t border-zinc-800/80 pt-8 text-center">
            <div className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-4">
              <Mail className="w-4 h-4 text-[#4caf50]" />
              Contact Help Desk
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