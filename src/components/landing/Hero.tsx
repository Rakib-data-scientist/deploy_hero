import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/luxury_mountain_lake_sunset_landscape.png";
import alexChen from "@assets/generated_images/professional_headshot_of_alex_chen_engineer.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1f28] pt-20">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        {/* Mountain landscape image */}
        <img 
          src={heroBg} 
          alt="Luxury Mountain Landscape" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Soft overlay to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/40" />
        
        {/* Gentle floating glow elements for depth */}
        {/* Floating glow 1 - subtle upper left */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212, 165, 116, 0.4) 0%, transparent 70%)' }}
        />
        
        {/* Floating glow 2 - subtle lower right */}
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(42, 122, 143, 0.3) 0%, transparent 70%)' }}
        />
        
        {/* Floating glow 3 - center subtle */}
        <motion.div
          animate={{ 
            y: [-10, 15, -10],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255, 200, 124, 0.25) 0%, transparent 70%)' }}
        />

        {/* Flying Birds - Subtle background silhouettes */}
        {/* Bird 1 - Upper left area */}
        <motion.div
          animate={{ x: [-80, window.innerWidth + 100], y: [-10, 0, -10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 opacity-25"
        >
          <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
            <g stroke="#3d5a6f" strokeWidth="1.5" fill="none">
              <path d="M15 15 L35 15" strokeLinecap="round" />
              <path d="M20 15 Q18 8 15 15" strokeLinecap="round" />
              <path d="M30 15 Q32 8 35 15" strokeLinecap="round" />
              <circle cx="22" cy="14" r="1.5" fill="#3d5a6f" />
            </g>
          </svg>
        </motion.div>

        {/* Bird 2 - Middle area */}
        <motion.div
          animate={{ x: [window.innerWidth + 100, -80], y: [-5, 5, -5] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute top-1/3 right-0 opacity-20"
        >
          <svg width="55" height="35" viewBox="0 0 55 35" fill="none">
            <g stroke="#2d4a5f" strokeWidth="1.5" fill="none">
              <path d="M18 18 L37 18" strokeLinecap="round" />
              <path d="M23 18 Q20 9 18 18" strokeLinecap="round" />
              <path d="M32 18 Q35 9 37 18" strokeLinecap="round" />
              <circle cx="27" cy="16" r="1.5" fill="#2d4a5f" />
            </g>
          </svg>
        </motion.div>

        {/* Bird 3 - Lower area */}
        <motion.div
          animate={{ x: [-100, window.innerWidth + 80], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 8 }}
          className="absolute top-1/2 left-0 opacity-22"
        >
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
            <g stroke="#3a5a70" strokeWidth="1.5" fill="none">
              <path d="M14 14 L34 14" strokeLinecap="round" />
              <path d="M19 14 Q16 7 14 14" strokeLinecap="round" />
              <path d="M29 14 Q32 7 34 14" strokeLinecap="round" />
              <circle cx="24" cy="13" r="1.5" fill="#3a5a70" />
            </g>
          </svg>
        </motion.div>

        {/* Bird 4 - Right side */}
        <motion.div
          animate={{ x: [window.innerWidth + 50, -100], y: [8, -8, 8] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 6 }}
          className="absolute top-2/5 right-0 opacity-18"
        >
          <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
            <g stroke="#2f4d62" strokeWidth="1.5" fill="none">
              <path d="M16 16 L36 16" strokeLinecap="round" />
              <path d="M21 16 Q18 8 16 16" strokeLinecap="round" />
              <path d="M31 16 Q34 8 36 16" strokeLinecap="round" />
              <circle cx="26" cy="15" r="1.5" fill="#2f4d62" />
            </g>
          </svg>
        </motion.div>
        
        {/* Data visualization networks - topographic lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }} preserveAspectRatio="none" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="dataFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1A91FF', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#00D9FF', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#1A91FF', stopOpacity: 0 }} />
            </linearGradient>
            <linearGradient id="dataFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7B2CBF', stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: '#00D9FF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#1A91FF', stopOpacity: 0 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Flowing data streams */}
          <path d="M0,300 Q250,280 500,320 T1000,300" stroke="url(#dataFlow1)" strokeWidth="3" fill="none" filter="url(#glow)" strokeLinecap="round" />
          <path d="M0,450 Q250,420 500,480 T1000,450" stroke="url(#dataFlow2)" strokeWidth="2.5" fill="none" filter="url(#glow)" strokeLinecap="round" opacity="0.7" />
          <path d="M100,200 Q350,250 600,180 L800,350" stroke="#00D9FF" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.5" strokeLinecap="round" />
          
          {/* Cascading waterfall particles */}
          <g opacity="0.4">
            <circle cx="400" cy="250" r="3" fill="#00D9FF" filter="url(#glow)" />
            <circle cx="410" cy="280" r="2.5" fill="#00D9FF" />
            <circle cx="405" cy="310" r="2" fill="#1A91FF" />
            <circle cx="415" cy="340" r="2.5" fill="#00D9FF" />
            <circle cx="400" cy="370" r="2" fill="#1A91FF" />
          </g>
          
          <g opacity="0.4">
            <circle cx="650" cy="200" r="2.5" fill="#00D9FF" filter="url(#glow)" />
            <circle cx="660" cy="240" r="2" fill="#00D9FF" />
            <circle cx="655" cy="280" r="2.5" fill="#1A91FF" />
            <circle cx="665" cy="320" r="2" fill="#00D9FF" />
            <circle cx="650" cy="360" r="2.5" fill="#1A91FF" />
          </g>
        </svg>

        {/* Animated floating particles/wisps */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ y: [20, -10, 20], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-15"
        />
        <motion.div
          animate={{ y: [-10, 15, -10], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      {/* Cards positioned on right side - ONLY within hero section */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col z-30 gap-6 pointer-events-auto">
        {/* Profile Card - Top */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="w-80 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(212, 165, 116, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={alexChen} 
              alt="Alex Chen" 
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-400/50"
            />
            <div>
              <h3 className="text-white font-semibold text-base">Alex Chen</h3>
              <p className="text-white/60 text-sm">AI/Gen AI Engineer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/70 text-xs border border-white/15">Python</span>
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/70 text-xs border border-white/15">LLMs</span>
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/70 text-xs border border-white/15">JAX</span>
            <span className="px-3 py-1.5 rounded-full bg-white/8 text-white/70 text-xs border border-white/15">CUDA</span>
          </div>
          <div className="flex items-center gap-2 text-teal-300 text-sm font-medium">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Hired in 5 days
          </div>
        </motion.div>

        {/* Stats Card - Bottom Diagonal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="w-80 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(42, 122, 143, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
          }}
        >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/40 to-indigo-500/40 border border-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white/60 text-xs font-semibold">&lt;&gt;</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">⭐</span>
                <span className="text-lg font-bold text-white">5.0</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-xl flex-shrink-0">$</span>
                <div>
                  <p className="text-white/60 text-xs">Hourly Rate</p>
                  <p className="text-white font-semibold text-sm">$35-55/hr</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-lg flex-shrink-0">🏢</span>
                <div>
                  <p className="text-white/60 text-xs">Experience</p>
                  <p className="text-white font-semibold text-sm">8+ years shipping</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-lg flex-shrink-0">📍</span>
                <div>
                  <p className="text-white/60 text-xs">Timezone</p>
                  <p className="text-white font-semibold text-sm">Est. 6-8hr overlap</p>
                </div>
              </div>
            </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative z-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Hire proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              engineers fast
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
            Get developers who've shipped for YC startups and enterprises. Ready to contribute from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#1A91FF] hover:bg-[#1570C9] text-white rounded-full h-14 px-8 text-lg font-semibold shadow-[0_0_20px_-5px_rgba(26,145,255,0.5)] transition-all hover:scale-105"
              onClick={() => window.open("https://calendly.com/rakib-ai-ds/30min", "_blank")}
            >
              Start Hiring <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
