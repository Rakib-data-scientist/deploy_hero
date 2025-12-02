import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Upload, CheckCircle, Users, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Share product needs and tech stack",
    description: "Tell us what you're building, your tech requirements, and timeline. We gather just enough context to curate the perfect fit.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 2,
    icon: Users,
    title: "Receive curated shortlist of proven developers",
    description: "Within 72 hours, get 3–5 hand-vetted engineers pre-screened for technical skills, communication, and cultural fit.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Interview only the strongest fits",
    description: "Meet pre-qualified developers who are ready to contribute. No time wasted on filtered candidates or misaligned profiles.",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: 4,
    icon: Zap,
    title: "Start building with risk-free onboarding",
    description: "Developer joins with instant access to your codebase, tools, and team. Full replacement guarantee for first 30 days.",
    color: "from-orange-500 to-amber-500"
  },
  {
    number: 5,
    icon: TrendingUp,
    title: "Scale team up or down flexibly",
    description: "Add more developers, reduce team size, or pivot requirements — we handle all HR, compliance, and payroll behind the scenes.",
    color: "from-pink-500 to-rose-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
          >
            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            From requirement to deployment in 5 simple steps
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-8 last:mb-0 relative"
            >
              <div className="flex gap-8">
                {/* Left side - Icon and number */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg shadow-${step.color.split('-')[0]}/50`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="w-1 h-24 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top"
                    />
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pt-2 pb-12">
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed ml-16">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Book a demo <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
