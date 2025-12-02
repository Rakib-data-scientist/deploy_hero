import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import talentImg from "@assets/generated_images/talent_directory_ui_mockup.png";
import calendarImg from "@assets/generated_images/calendar_scheduling_ui_mockup.png";
import payrollImg from "@assets/generated_images/payroll_dashboard_ui_mockup.png";

const features = [
  {
    id: 1,
    title: "Outcome-Driven Vetting",
    description: "We don't just check boxes. Every developer has shipped production code, debugged complex systems, and delivered results under pressure.",
    image: talentImg,
    color: "bg-blue-50",
  },
  {
    id: 2,
    title: "Global Work Culture Ready",
    description: "Our developers understand US startup culture, communicate fluidly in English, and work best practices that align with your team's cadence.",
    image: calendarImg,
    color: "bg-purple-50",
  },
  {
    id: 3,
    title: "Seamless Replacement Guarantee",
    description: "If a developer isn't clicking with your team within 30 days, we replace them instantly at no cost. Zero risk, full commitment.",
    image: payrollImg,
    color: "bg-green-50",
  },
];

export default function FeaturesScroll() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll(".feature-text-section");
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) {
                setActiveFeature(index);
            }
        });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white"
          >
            Why tech teams hire faster <br /> with Talexu
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side - Scrollable Text */}
          <div className="lg:w-1/2 pb-[20vh]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.5 }}
                className="feature-text-section max-w-md mb-[40vh] last:mb-0 min-h-[40vh] flex flex-col justify-center"
              >
                <motion.div 
                  className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  0{index + 1} — Feature
                </motion.div>
                <motion.h3 
                  className="text-5xl font-extrabold text-white mb-6 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-white/70 leading-relaxed mb-8 max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
                {/* Mobile Image Only */}
                <motion.div 
                  className="lg:hidden rounded-3xl overflow-hidden shadow-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Sticky Image Card */}
          <div className="lg:w-1/2 relative hidden lg:flex lg:justify-center">
            <div className="sticky top-24 w-full max-w-2xl h-[600px]">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0,
                    scale: activeFeature === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-white/3"
                >
                  {/* Card background */}
                  <div className={`absolute inset-0 opacity-20`} />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Image container */}
                  <motion.div
                    className="relative w-full h-full flex items-center justify-center p-6"
                    whileHover={{ scale: 1.01 }}
                  >
                    <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover drop-shadow-lg rounded-2xl"
                    />
                    
                    {/* Animated shine effect */}
                    <motion.div
                      animate={{ x: ['150%', '-150%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    />
                  </motion.div>

                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
                </motion.div>
              ))}

              {/* Floating glow effect */}
              <motion.div
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-300/15 via-purple-300/15 to-blue-300/15 blur-3xl -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
