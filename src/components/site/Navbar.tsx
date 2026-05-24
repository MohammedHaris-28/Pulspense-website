import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Exact asset import for structural branding consistency
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#analytics", label: "Analytics" },
  { href: "#security", label: "Security" },
  { href: "#screens", label: "Screens" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-500 border ${
            scrolled
              ? "bg-[#121214]/90 backdrop-blur-md border-zinc-800 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Brand Identity Grouping with Smooth Container Logo integration */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 bg-[#1a1a1e] border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-0.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105">
              {logo ? (
                <img
                  src={logo}
                  alt="Pulspense Logo Asset"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              ) : (
                <span className="text-[#4caf50] text-lg font-black">P.</span>
              )}
            </div>
            <span className="text-lg font-black tracking-tight text-white transition-colors group-hover:text-zinc-200">
              Pulspense
            </span>
          </a>

          {/* Solid Minimalist Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800/60 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Premium High-Contrast Call to Action */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size="sm"
              className="bg-[#4caf50] hover:bg-[#43a047] text-black font-bold rounded-xl px-4 py-4 h-auto shadow-[0_4px_12px_rgba(76,175,80,0.25)] hover:shadow-[0_4px_20px_rgba(76,175,80,0.4)] transition-all duration-300"
              asChild
            >
              {/* ⭐ FIXED: Hooked desktop button directly to your public folder APK route with download attributes ⭐ */}
              <a href="/pulspense.apk" download="pulspense.apk">
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Interface Trigger */}
          <button
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Premium Mobile Expansion Panel Layout */}
        {open && (
          <div className="md:hidden mt-2 bg-[#121214] border border-zinc-800 rounded-2xl p-4 flex flex-col gap-1 shadow-[0_20px_40px_rgba(0,0,0,0.7)] animate-fade-up">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="default"
              className="bg-[#4caf50] hover:bg-[#43a047] text-black font-bold rounded-xl mt-2 py-5 shadow-[0_4px_12px_rgba(76,175,80,0.25)]"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="/pulspense.apk" download="pulspense.apk" className="flex items-center gap-2">
                Download App
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Micro-Indicator Signature Scroll Progress Engine */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#4caf50] shadow-[0_0_8px_rgba(76,175,80,0.6)]"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </header>
  );
};