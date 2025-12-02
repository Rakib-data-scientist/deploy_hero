import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Talexu</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
            className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 font-semibold transition-all"
            data-testid="button-start-hiring"
          >
            Start Hiring
          </button>
          <button
            onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
            className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 font-semibold transition-all"
            data-testid="button-become-partner"
          >
            Become Partner
          </button>
        </div>

        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </header>
  );
}
