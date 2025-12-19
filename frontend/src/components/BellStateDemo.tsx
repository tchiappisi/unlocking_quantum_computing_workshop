"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QubitState = "superposition" | "0" | "1";

export default function BellStateDemo() {
  const [qubitA, setQubitA] = useState<QubitState>("superposition");
  const [qubitB, setQubitB] = useState<QubitState>("superposition");
  const [measuring, setMeasuring] = useState<"A" | "B" | null>(null);
  const [history, setHistory] = useState<{ a: string; b: string }[]>([]);

  const reset = () => {
    setQubitA("superposition");
    setQubitB("superposition");
    setMeasuring(null);
  };

  const measure = (which: "A" | "B") => {
    if (qubitA !== "superposition") return;
    
    setMeasuring(which);
    
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "0" : "1";
      setQubitA(result as QubitState);
      setQubitB(result as QubitState);
      setHistory(prev => [...prev.slice(-4), { a: result, b: result }]);
      setMeasuring(null);
    }, 600);
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Interactive Bell State
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Click a qubit to measure it — watch how measuring one instantly determines the other!
      </p>

      <div className="flex items-center justify-center gap-8 mb-6">
        {/* Qubit A */}
        <div className="flex flex-col items-center">
          <span className="text-[#8A2BE2] text-sm font-mono mb-2">Qubit A</span>
          <motion.button
            onClick={() => measure("A")}
            disabled={qubitA !== "superposition"}
            className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold border-2 transition-all
              ${qubitA === "superposition" 
                ? "bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 border-[#00FFF0] cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,240,0.3)]" 
                : qubitA === "0"
                  ? "bg-[#00FFF0]/20 border-[#00FFF0] cursor-default"
                  : "bg-[#8A2BE2]/20 border-[#8A2BE2] cursor-default"
              }`}
            animate={measuring === "A" ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {qubitA === "superposition" ? (
              <span className="text-[#00FFF0]">|ψ⟩</span>
            ) : (
              <span className={qubitA === "0" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
                |{qubitA}⟩
              </span>
            )}
          </motion.button>
        </div>

        {/* Entanglement connection */}
        <div className="flex flex-col items-center">
          <AnimatePresence>
            {qubitA === "superposition" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-16 h-0.5 bg-gradient-to-r from-[#00FFF0] to-[#8A2BE2]"
                  animate={{ 
                    boxShadow: ["0 0 5px #00FFF0", "0 0 15px #8A2BE2", "0 0 5px #00FFF0"]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#00FFF0] text-xs">⚡</span>
                <motion.div
                  className="w-16 h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#00FFF0]"
                  animate={{ 
                    boxShadow: ["0 0 5px #8A2BE2", "0 0 15px #00FFF0", "0 0 5px #8A2BE2"]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl"
              >
                {qubitA === qubitB ? "✓" : "✗"}
              </motion.div>
            )}
          </AnimatePresence>
          <span className="text-gray-500 text-xs mt-2">
            {qubitA === "superposition" ? "entangled" : "correlated!"}
          </span>
        </div>

        {/* Qubit B */}
        <div className="flex flex-col items-center">
          <span className="text-[#8A2BE2] text-sm font-mono mb-2">Qubit B</span>
          <motion.button
            onClick={() => measure("B")}
            disabled={qubitB !== "superposition"}
            className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold border-2 transition-all
              ${qubitB === "superposition" 
                ? "bg-gradient-to-br from-[#8A2BE2]/20 to-[#00FFF0]/20 border-[#8A2BE2] cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.3)]" 
                : qubitB === "0"
                  ? "bg-[#00FFF0]/20 border-[#00FFF0] cursor-default"
                  : "bg-[#8A2BE2]/20 border-[#8A2BE2] cursor-default"
              }`}
            animate={measuring === "B" ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {qubitB === "superposition" ? (
              <span className="text-[#8A2BE2]">|ψ⟩</span>
            ) : (
              <span className={qubitB === "0" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
                |{qubitB}⟩
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* State display */}
      <div className="text-center mb-4">
        <div className="inline-block bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 font-mono text-sm">
          {qubitA === "superposition" ? (
            <span className="text-[#00FFF0]">|Φ+⟩ = (|00⟩ + |11⟩) / √2</span>
          ) : (
            <span>
              <span className="text-gray-500">Measured: </span>
              <span className={qubitA === "0" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
                |{qubitA}{qubitB}⟩
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Reset button */}
      {qubitA !== "superposition" && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={reset}
            className="px-4 py-2 bg-[#00FFF0]/10 border border-[#00FFF0]/50 rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/20 transition-colors text-sm"
          >
            ↻ Prepare New Bell State
          </button>
        </motion.div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs text-center mb-2">Measurement History</p>
          <div className="flex justify-center gap-2">
            {history.map((h, i) => (
              <div 
                key={i} 
                className={`px-2 py-1 rounded text-xs font-mono ${
                  h.a === "0" ? "bg-[#00FFF0]/20 text-[#00FFF0]" : "bg-[#8A2BE2]/20 text-[#8A2BE2]"
                }`}
              >
                |{h.a}{h.b}⟩
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs text-center mt-2">
            Notice: Always |00⟩ or |11⟩, never |01⟩ or |10⟩!
          </p>
        </div>
      )}
    </div>
  );
}
