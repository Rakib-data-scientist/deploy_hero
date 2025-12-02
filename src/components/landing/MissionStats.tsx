import { motion } from "framer-motion";
import { Clock, TrendingUp, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { 
    icon: Clock,
    title: "⚡ Shortlist generated within 72 hours", 
    description: "Access pre-vetted talent immediately with zero hiring delays. Your curated team ready to contribute on day one.",
    color: "text-blue-400"
  },
  { 
    icon: TrendingUp,
    title: "🚀 Average time-to-hire: 7 days", 
    description: "From first interview to onboarding — that's how fast top talent can start delivering.",
    color: "text-blue-400"
  },
  { 
    icon: Zap,
    title: "💼 Developer experience: 3–15+ years", 
    description: "Every developer in our network has proven track record across enterprise and startup environments.",
    color: "text-blue-400"
  },
  { 
    icon: CheckCircle,
    title: "🔧 Specialized in Gen AI, Python, Data Science & Full Stack", 
    description: "Our deep expertise spans AI/ML engineers, Python specialists, data scientists, and full-stack developers — the tech stack that matters most.",
    color: "text-blue-400"
  },
];

export default function MissionStats() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative">
      {/* Subtle topographic overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none" viewBox="0 0 1000 400">
        <defs>
          <linearGradient id="topoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1A91FF', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#1A91FF', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#topoGrad)" strokeWidth="2" fill="none" />
        <path d="M0,150 Q250,100 500,150 T1000,150" stroke="#1A91FF" strokeWidth="1" opacity="0.5" fill="none" />
      </svg>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Speed of hiring should match <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">the speed of shipping.</span>
          </motion.h2>
        </div>

        <div className="mb-12">
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            Talexu gives organizations the technical firepower of a full in-house team — without the hiring slowdown, staffing risk, or runaway payroll.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white pt-1">
                  {stat.title}
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-3 font-bold text-lg shadow-lg"
            onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
          >
            Start hiring →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
