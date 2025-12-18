"use client";

import { motion } from "framer-motion";
import PageNavigation from "@/components/PageNavigation";
import { Check, X } from "lucide-react";

export default function StartHerePage() {
  return (
    <div className="max-w-3xl">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">Onboarding</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>Start Here</h1>
      </motion.header>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>What You Need</h2>
        <div className="space-y-3">
          {[
            { item: "A laptop with a modern web browser", check: true },
            { item: "A Google account (for Google Colab)", check: true },
            { item: "Basic Python knowledge (variables, loops, functions)", check: true },
            { item: "Curiosity and patience", check: true },
          ].map((req, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#00FFF0]/10 border border-[#00FFF0]/30 rounded-lg">
              <Check className="w-5 h-5 text-[#00FFF0]" />
              <span className="text-[#E6E6E6]">{req.item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-[#8A2BE2] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>What You Do NOT Need</h2>
        <div className="space-y-3">
          {[
            "A physics degree",
            "Linear algebra expertise",
            "Access to quantum hardware",
            "Any software installation",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 rounded-lg">
              <X className="w-5 h-5 text-[#8A2BE2]" />
              <span className="text-[#E6E6E6]/90">{item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>How This Workshop Works</h2>
        <div className="space-y-4">
          {[
            { num: 1, title: "Read the concept", desc: "Each page explains one idea in plain English with visual aids." },
            { num: 2, title: "Do the exercise", desc: "Click \"Open in Google Colab\" to run code in your browser." },
            { num: 3, title: "Reflect and discuss", desc: "Answer the reflection questions and share with your group." },
            { num: 4, title: "Move to the next topic", desc: "Use the navigation to proceed linearly through the workshop." },
          ].map((step) => (
            <div key={step.num} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#00FFF0] to-[#8A2BE2] text-black rounded-full flex items-center justify-center font-bold">
                {step.num}
              </span>
              <div className="text-[#E6E6E6]">
                <strong className="text-[#00FFF0]">{step.title}</strong> — {step.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>About Google Colab</h2>
        <div className="bg-gradient-to-br from-[#00FFF0]/10 to-[#8A2BE2]/10 border border-[#00FFF0]/30 p-6 rounded-xl">
          <p className="text-[#E6E6E6] mb-4">
            All exercises run in <strong className="text-[#00FFF0]">Google Colab</strong>, a free cloud-based Jupyter notebook environment.
          </p>
          <ul className="space-y-2 text-[#E6E6E6]">
            <li className="flex items-start gap-2">
              <span className="text-[#00FFF0]">•</span>
              No installation required — everything runs in your browser
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00FFF0]">•</span>
              Sign in with your Google account when prompted
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00FFF0]">•</span>
              Click "Copy to Drive" to save your work
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00FFF0]">•</span>
              Run cells with Shift+Enter or the play button
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-10 p-6 border border-[#8A2BE2]/30 bg-gradient-to-br from-[#0B0C10] to-[#1a1d29] rounded-xl"
      >
        <h2 className="text-xl font-bold text-[#8A2BE2] mb-3" style={{ fontFamily: 'Space Grotesk, monospace' }}>Workshop Schedule (Approximate)</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            { hour: "Hour 1", content: "Setup + Qubits + Superposition" },
            { hour: "Hour 2", content: "Entanglement + Circuits" },
            { hour: "Hour 3", content: "Grover's Algorithm" },
            { hour: "Hour 4", content: "Capstone + Wrap-up" },
          ].map((item) => (
            <div key={item.hour} className="p-3 bg-[#0B0C10]/50 border border-[#00FFF0]/20 rounded-lg">
              <div className="text-[#00FFF0] font-medium font-mono">{item.hour}</div>
              <div className="text-[#E6E6E6]">{item.content}</div>
            </div>
          ))}
        </div>
      </motion.section>

      <PageNavigation />
    </div>
  );
}
