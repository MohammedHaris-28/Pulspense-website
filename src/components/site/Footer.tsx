import { Link } from "react-router-dom"; // Or change to regular 'a' tags if not using react-router
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#09090b] border-t border-zinc-800 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Group with Custom Container Logo */}
        <div className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 bg-[#1a1a1e] border border-zinc-800 rounded-lg overflow-hidden flex items-center justify-center p-0.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            {logo ? (
              <img
                src={logo}
                alt="Pulspense Logo"
                className="w-full h-full object-cover rounded-[6px]"
              />
            ) : (
              <span className="text-[#4caf50] text-sm font-black">P.</span>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-black tracking-tight text-white text-base">
              Pulspense
            </span>
            <span className="text-[11px] text-zinc-600 font-medium tracking-wide">
              © 2026
            </span>
          </div>
        </div>

        {/* Solid Matte Navigation Links Stack */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          <a
            href="/privacy"
            className="text-zinc-500 hover:text-[#4caf50] transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-zinc-500 hover:text-[#4caf50] transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <a
            href="/userguide"
            className="text-zinc-500 hover:text-[#4caf50] transition-colors duration-200"
          >
            User Guide
          </a>
          <a
            href="/about"
            className="text-zinc-500 hover:text-[#4caf50] transition-colors duration-200"
          >
            About Us
          </a>
        </nav>
        
      </div>
    </footer>
  );
};