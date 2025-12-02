import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "Time to Hire", talexu: "7 Days", agency: "1–3 Months", freelance: "Unpredictable" },
  { name: "Vetting Quality", talexu: "Proven + Technical + Communication", agency: "Variable", freelance: "None / Self-reported" },
  { name: "Timezone Overlap", talexu: "4+ Hours Guaranteed", agency: "Not Guaranteed", freelance: "Varies" },
  { name: "Replacement Guarantee", talexu: "Instant", agency: "Slow", freelance: "None" },
  { name: "Compliance & Payroll", talexu: "Included", agency: "Extra Cost", freelance: "Your Responsibility" },
  { name: "Cost Efficiency", talexu: "High", agency: "Low (High Markup)", freelance: "Medium" },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Why smart founders choose Talexu
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            See how we stack up against traditional hiring methods.
          </p>
        </div>

        <div className="overflow-x-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="min-w-[800px] bg-slate-900/50 rounded-3xl p-2 border border-white/10"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-white/60 font-medium w-1/4">Features</th>
                  <th className="p-6 text-center bg-slate-800/50 rounded-t-2xl shadow-sm border-x border-t border-white/10 w-1/4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-xs">T</div>
                      <span className="text-blue-400 font-bold text-lg">Talexu</span>
                    </div>
                  </th>
                  <th className="p-6 text-center text-white/60 font-medium w-1/4">Traditional Agencies</th>
                  <th className="p-6 text-center text-white/60 font-medium w-1/4">Freelance Sites</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0">
                    <td className="p-6 text-white font-bold">{row.name}</td>
                    
                    {/* Talexu Column */}
                    <td className="p-6 text-center bg-slate-800/50 border-x border-white/10 shadow-sm relative">
                      <span className="font-bold text-white">{row.talexu}</span>
                      {index === 0 && (
                        <div className="absolute top-0 right-0 -mt-3 -mr-3">
                           <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best</span>
                        </div>
                      )}
                    </td>
                    
                    {/* Agency Column */}
                    <td className="p-6 text-center text-white/60">{row.agency}</td>
                    
                    {/* Freelance Column */}
                    <td className="p-6 text-center text-white/60">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
