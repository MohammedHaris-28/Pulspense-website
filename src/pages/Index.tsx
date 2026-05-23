import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Analytics } from "@/components/site/Analytics";
import { Security } from "@/components/site/Security";
import { Screens } from "@/components/site/Screens";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Pulspense — Take Control of Your Money, Effortlessly";
    const desc = "Pulspense is a premium expense tracker and personal finance app. Track spending, manage budgets, and visualize your financial future.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <Security />
      <Screens />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
