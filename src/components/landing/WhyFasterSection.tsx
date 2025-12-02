import { motion } from "framer-motion";
import { Zap, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description: "Our algorithm instantly analyzes 20M+ developers and identifies perfect matches for your tech stack in seconds, not weeks.",
    gradient: "from-yellow-500 to-orange-500",
    stat: "48 hours to match"
  },
  {
    icon: Brain,
    title: "Pre-Vetted Talent Pool",
    description: "Every developer has passed technical assessments, AI interviews, and human review. No time wasted on unqualified candidates.",
    gradient: "from-purple-500 to-pink-500",
    stat: "99% quality rate"
  },
  {
    icon: BarChart3,
    title: "Instant Onboarding",
    description: "Contracts, compliance, and payments handled automatically. Your hire starts working immediately. Full support for contractors and full-time.",
    gradient: "from-green-500 to-emerald-500",
    stat: "24-hour turnaround"
  }
];

export default function WhyFasterSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-[#050505] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
          >
            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Why We're Different</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Why tech teams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              hire faster with Talexu
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Three key advantages that compress hiring timelines from months to days
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className={`relative bg-gradient-to-br ${feature.gradient} p-0.5 rounded-2xl overflow-hidden`}>
                <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col">
                  {/* Animated background orb */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6 flex-grow relative z-10">
                    {feature.description}
                  </p>

                  {/* Stat badge */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-white/10 w-fit relative z-10`}
                  >
                    <span className="text-white font-bold text-sm">{feature.stat}</span>
                  </motion.div>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                whileHover={{ opacity: 0.5 }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* 3D Visualization - Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative h-80 bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm p-8">
            {/* 3D-like visualization */}
            <svg className="w-full h-full" viewBox="0 0 1000 400" style={{ filter: 'drop-shadow(0 0 30px rgba(26, 145, 255, 0.2))' }}>
              <defs>
                <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1A91FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Left box - Candidates */}
              <rect x="50" y="120" width="180" height="160" fill="#1A91FF" fillOpacity="0.1" stroke="#1A91FF" strokeWidth="2" rx="12" />
              <text x="140" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">20M+</text>
              <text x="140" y="190" textAnchor="middle" fill="#1A91FF" fontSize="14">Developers</text>

              {/* Middle box - Processing */}
              <g>
                <circle cx="500" cy="200" r="60" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0.5" />
                <circle cx="500" cy="200" r="50" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" rx="12" />
                <text x="500" y="215" textAnchor="middle" fill="#A855F7" fontSize="32" fontWeight="bold">AI</text>
              </g>

              {/* Right box - Matched */}
              <rect x="770" y="120" width="180" height="160" fill="#06B6D4" fillOpacity="0.1" stroke="#06B6D4" strokeWidth="2" rx="12" />
              <text x="860" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">Perfect</text>
              <text x="860" y="190" textAnchor="middle" fill="#06B6D4" fontSize="14">Match</text>

              {/* Flowing arrows */}
              <g>
                {/* Left arrow */}
                <path
                  d="M 230 200 Q 350 150 440 200"
                  fill="none"
                  stroke="url(#flowGrad1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  style={{
                    animation: 'dashflow 3s infinite linear'
                  }}
                />
                {/* Right arrow */}
                <path
                  d="M 560 200 Q 680 250 750 200"
                  fill="none"
                  stroke="url(#flowGrad2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  style={{
                    animation: 'dashflow 3s infinite linear 0.5s'
                  }}
                />
              </g>

              {/* Time indicator */}
              <text x="500" y="380" textAnchor="middle" fill="#1A91FF" fontSize="16" fontWeight="bold">48 hours • Zero Manual Screening</text>
            </svg>

            <style>{`
              @keyframes dashflow {
                from {
                  stroke-dashoffset: 1000;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
