import { motion } from "framer-motion";
import { Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#020202] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight">Talexu</span>
            </div>
            <p className="text-white/40 max-w-md mb-8">
              Talexu connects US startups and enterprises with pre-vetted, high-performing engineering talent across 45+ tech stacks. Scale faster, smarter, and more cost-effectively.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white/60">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all text-white/60">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v15A1.5 1.5 0 0 0 2.5 21H21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 21 3H2.5z"/>
                  <path d="M6.5 7h11v2.5h-11V7zm0 4h11v2.5h-11V11zm0 4h11v2.5h-11V15z" fill="#020202"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Hiring Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Talexu Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
