import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartnerModal } from "./PartnerModal";

export default function CTA() {
  return (
    <section id="cta" className="py-32 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Glowing Shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight"
        >
          Speed up hiring, <br />
          <span className="relative inline-block">
            ship faster
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
            className="bg-[#1A91FF] hover:bg-[#1570C9] text-white rounded-full h-16 px-10 text-xl font-bold shadow-[0_0_40px_-10px_rgba(26,145,255,0.6)] transition-all hover:scale-105"
            data-testid="button-become-partner"
          >
            Become Partner
          </button>
          <p className="mt-6 text-white/40 text-sm">
            No credit card required for initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
