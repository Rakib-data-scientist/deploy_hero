import { motion } from "framer-motion";
import { Users, Briefcase, Layers, FileText, CreditCard } from "lucide-react";

const navItems = [
  { icon: Users, label: "About", href: "#mission" },
  { icon: Briefcase, label: "Talent", href: "#features" },
  { icon: Layers, label: "Process", href: "#benefits" },
  { icon: FileText, label: "Case Studies", href: "#case-studies" },
  { icon: CreditCard, label: "Pricing", href: "#cta" },
];

export default function FloatingDock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50 flex items-center gap-1 md:gap-2"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center justify-center p-2 md:px-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <item.icon className="w-5 h-5 text-white/60 group-hover:text-[#1A91FF] transition-colors mb-1 md:hidden" />
            <span className="text-xs md:text-sm font-medium text-white/60 group-hover:text-[#1A91FF] transition-colors hidden md:block">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
