import { motion } from "framer-motion";
import { Zap, DollarSign, Clock, Users, Target, TrendingUp } from "lucide-react";

const benefits = [
  { 
    icon: Zap,
    label: "Predictable development velocity", 
    description: "Know exactly what to expect",
    color: "from-emerald-500 to-teal-500",
    x: -35,
    y: -25
  },
  { 
    icon: Clock,
    label: "Lightning-fast hiring cycles", 
    description: "7 days, not months",
    color: "from-blue-500 to-cyan-500",
    x: 0,
    y: -35
  },
  { 
    icon: DollarSign,
    label: "Budget-optimized engineering", 
    description: "No hidden markups",
    color: "from-indigo-500 to-purple-500",
    x: 35,
    y: -25
  },
  { 
    icon: Users,
    label: "Less management overhead", 
    description: "We handle HR & compliance",
    color: "from-pink-500 to-rose-500",
    x: -40,
    y: 15
  },
  { 
    icon: Target,
    label: "Works from sprint one", 
    description: "Instant productivity",
    color: "from-orange-500 to-amber-500",
    x: 40,
    y: 15
  },
  { 
    icon: TrendingUp,
    label: "Immediate team scaling", 
    description: "Add or reduce anytime",
    color: "from-violet-500 to-fuchsia-500",
    x: 0,
    y: 30
  },
];

export default function BenefitsCloud() {
  return (
    <section id="benefits" className="py-40 bg-[#050505] overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30"
        >
          <span className="text-purple-400 text-sm font-bold uppercase tracking-wider">Benefits</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Designed for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            rapid scale
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 mb-24 max-w-2xl mx-auto"
        >
          Everything you need to build world-class teams fast
        </motion.p>

        {/* Benefits Grid - Hexagon Style */}
        <div className="relative w-full max-w-5xl mx-auto h-[600px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: index * 0.08,
              }}
              className="absolute"
              style={{
                top: `${50 + benefit.y}%`,
                left: `${50 + benefit.x}%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  zIndex: 50,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`relative w-52 h-52 rounded-3xl bg-gradient-to-br ${benefit.color} p-1 cursor-pointer group shadow-lg`}
              >
                {/* Border gradient effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" 
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))` }}
                />
                
                {/* Inner content */}
                <div className="relative w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center p-5">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${benefit.color} p-3 rounded-2xl mb-3 shadow-lg`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-base mb-2 text-center leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all line-clamp-3">
                    {benefit.label}
                  </h3>
                  <p className="text-white/50 text-xs text-center group-hover:text-white/80 transition-colors line-clamp-3">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central connection network (optional visual element) */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
            </defs>
            {/* Subtle connecting lines */}
            <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="30%" y1="50%" x2="50%" y2="80%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="70%" y1="50%" x2="50%" y2="80%" stroke="url(#networkGradient)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
