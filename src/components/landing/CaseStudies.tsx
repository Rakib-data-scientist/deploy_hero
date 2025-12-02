import { motion } from "framer-motion";
import { Quote, Zap, Star, Sparkles } from "lucide-react";
import case1 from "@assets/generated_images/modern_tech_startup_collaborative_workspace.png";
import case3 from "@assets/generated_images/premium_remote_developer_workspace_setup.png";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Teams that scaled successfully <br /> with Talexu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[1000px] md:h-[600px]">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <img src={case1} alt="Office Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Fintech scale-up "Ledger"</h3>
              <p className="text-white/80">Expanded engineering team by 15 members in Q3.</p>
            </div>
            <Zap className="absolute top-6 right-6 text-blue-400 w-8 h-8 drop-shadow-lg" />
          </motion.div>

          {/* Quote Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden border border-white/10"
          >
            <Quote className="w-10 h-10 text-blue-500/20 mb-4" />
            <p className="text-lg font-medium text-white mb-4">
              "We hired two senior engineers in under 10 days and accelerated our release by 4 weeks. Talexu didn't add bodies — they added execution speed."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full" />
              <div>
                <p className="text-sm font-bold text-white">Tech Founder</p>
                <p className="text-xs text-white/60">YC-backed Startup</p>
              </div>
            </div>
            <Sparkles className="absolute top-4 right-4 text-yellow-400 w-6 h-6 opacity-50" />
          </motion.div>

          {/* Small Image Card */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="relative rounded-3xl overflow-hidden group"
          >
            <img src={case3} alt="Remote Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
             <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <p className="text-xs font-bold text-white">Remote First</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
