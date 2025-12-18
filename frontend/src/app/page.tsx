"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageNavigation from "@/components/PageNavigation";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#00FFF0]/30 bg-[#00FFF0]/5">
          <span className="text-[#00FFF0] text-sm font-mono">CASE FILE: #QC-2025</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'Space Grotesk, monospace' }}>
          Unlocking Quantum Computing
        </h1>
        <p className="text-xl text-[#E6E6E6] max-w-2xl mx-auto">
          A hands-on mystery workshop using Python and Qiskit
        </p>
      </motion.header>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative p-8 rounded-2xl border border-[#00FFF0]/30 bg-gradient-to-br from-[#00FFF0]/10 to-[#8A2BE2]/10 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A2BE2] rounded-full blur-[120px] opacity-20" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Welcome, Investigator</h2>
            <p className="text-[#E6E6E6] mb-4">
              Over the next <strong className="text-[#00FFF0]">4 hours</strong>, you will build real quantum circuits,
              run them on simulators, and gain intuition for how quantum computing actually works.
            </p>
            <p className="text-[#E6E6E6]">
              No physics degree required. No quantum hardware needed. Just your laptop and curiosity.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-6" style={{ fontFamily: 'Space Grotesk, monospace' }}>What You Will Learn</h2>
        <div className="grid gap-4">
          {[
            { title: "Qubits", desc: "The fundamental unit of quantum information", color: "#00FFF0" },
            { title: "Superposition", desc: "How qubits can be in multiple states at once", color: "#8A2BE2" },
            { title: "Entanglement", desc: "The 'spooky' connection between qubits", color: "#00FFF0" },
            { title: "Quantum Circuits", desc: "How to build and run quantum programs", color: "#8A2BE2" },
            { title: "Grover's Algorithm", desc: "Your first real quantum algorithm", color: "#00FFF0" },
          ].map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-[#00FFF0]/20 bg-[#0B0C10]/50 hover:border-[#00FFF0]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} />
              <div>
                <h3 className="font-semibold" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-[#E6E6E6]/80 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-6" style={{ fontFamily: 'Space Grotesk, monospace' }}>Workshop Format</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📖", title: "Learn", desc: "Concepts explained in plain English", color: "#00FFF0" },
            { icon: "🔬", title: "Practice", desc: "Hands-on exercises in Google Colab", color: "#8A2BE2" },
            { icon: "💬", title: "Discuss", desc: "Reflection and group discussion", color: "#00FFF0" },
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 border border-[#00FFF0]/20 rounded-xl bg-[#0B0C10]/50 hover:border-[#00FFF0]/40 hover:bg-[#00FFF0]/5 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-1 group-hover:text-[#00FFF0] transition-colors" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-sm text-[#E6E6E6]/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative p-8 rounded-2xl border border-[#8A2BE2]/30 bg-gradient-to-br from-[#0B0C10] to-[#1a1d29] overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00FFF0] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8A2BE2] rounded-full blur-[120px] opacity-10" />
        <div className="relative text-center">
          <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Ready to Begin?</h2>
          <p className="text-[#E6E6E6] mb-6">
            Click the button below to start your investigation.
          </p>
          <Link
            href="/start-here"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FFF0] to-[#8A2BE2] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,240,0.5)]"
          >
            Begin Investigation
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
          </Link>
        </div>
      </motion.section>

      <PageNavigation />
    </div>
  );
}
