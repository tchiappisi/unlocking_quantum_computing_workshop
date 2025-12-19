"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuantumRNGDemo() {
  const [bits, setBits] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);
  const [currentBit, setCurrentBit] = useState<"0" | "1" | null>(null);
  const numBits = 8;

  const generateBit = () => {
    return Math.random() < 0.5 ? "0" : "1";
  };

  const generate = () => {
    if (generating) return;
    setGenerating(true);
    setBits([]);
    setCurrentBit(null);

    let bitIndex = 0;
    const interval = setInterval(() => {
      const bit = generateBit();
      setCurrentBit(bit as "0" | "1");
      setBits(prev => [...prev, bit]);
      bitIndex++;

      if (bitIndex >= numBits) {
        clearInterval(interval);
        setTimeout(() => {
          setGenerating(false);
          setCurrentBit(null);
        }, 300);
      }
    }, 200);
  };

  const reset = () => {
    setBits([]);
    setCurrentBit(null);
  };

  const binaryToDecimal = (binary: string[]) => {
    return parseInt(binary.join(""), 2);
  };

  const zeros = bits.filter(b => b === "0").length;
  const ones = bits.filter(b => b === "1").length;

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Quantum Random Number Generator
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Generate truly random bits using quantum superposition!
      </p>

      {/* Circuit visualization */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="px-2 py-1 bg-[#00FFF0]/10 border border-[#00FFF0]/30 rounded text-[#00FFF0] text-xs font-mono">
          |0⟩
        </div>
        <div className="w-4 h-0.5 bg-gray-600" />
        <div className="px-2 py-1 bg-[#00FFF0]/20 border border-[#00FFF0] rounded text-[#00FFF0] font-bold text-sm">
          H
        </div>
        <div className="w-4 h-0.5 bg-gray-600" />
        <div className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-400 text-xs">
          📊
        </div>
        <span className="text-gray-500 text-xs ml-1">× {numBits}</span>
      </div>

      {/* Current measurement animation */}
      <div className="flex justify-center mb-4">
        <motion.div
          className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold border-2
            ${currentBit === "0"
              ? "bg-[#00FFF0]/20 border-[#00FFF0] text-[#00FFF0]"
              : currentBit === "1"
                ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]"
                : generating
                  ? "bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 border-[#00FFF0] animate-pulse"
                  : "bg-gray-800 border-gray-600 text-gray-600"
            }`}
          animate={currentBit ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.2 }}
        >
          {currentBit || (generating ? "?" : "⚛")}
        </motion.div>
      </div>

      {/* Bit display */}
      <div className="flex justify-center gap-1 mb-4 min-h-[40px]">
        <AnimatePresence>
          {bits.map((bit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold
                ${bit === "0" ? "bg-[#00FFF0]/20 text-[#00FFF0]" : "bg-[#8A2BE2]/20 text-[#8A2BE2]"}`}
            >
              {bit}
            </motion.div>
          ))}
        </AnimatePresence>
        {bits.length === 0 && !generating && (
          <div className="text-gray-600 text-sm">Click generate to create random bits</div>
        )}
      </div>

      {/* Result display */}
      {bits.length === numBits && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-block bg-gradient-to-r from-[#00FFF0]/10 to-[#8A2BE2]/10 border border-[#00FFF0]/30 rounded-lg px-6 py-3">
            <div className="text-gray-400 text-xs mb-1">Random Number Generated:</div>
            <div className="text-3xl font-bold text-[#00FFF0]">{binaryToDecimal(bits)}</div>
            <div className="text-gray-500 text-xs mt-1">
              Binary: {bits.join("")} | Range: 0-255
            </div>
          </div>
        </motion.div>
      )}

      {/* Distribution */}
      {bits.length > 0 && (
        <div className="max-w-xs mx-auto mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>0s: {zeros}</span>
            <span>1s: {ones}</span>
          </div>
          <div className="flex h-2 rounded-full overflow-hidden border border-gray-700">
            <motion.div
              className="bg-[#00FFF0]"
              animate={{ width: `${bits.length > 0 ? (zeros / bits.length) * 100 : 50}%` }}
            />
            <motion.div
              className="bg-[#8A2BE2]"
              animate={{ width: `${bits.length > 0 ? (ones / bits.length) * 100 : 50}%` }}
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={generate}
          disabled={generating}
          className="px-6 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/30 transition-colors disabled:opacity-50"
        >
          {generating ? "Measuring..." : bits.length > 0 ? "🎲 Generate Again" : "🎲 Generate Random Number"}
        </button>
        {bits.length > 0 && !generating && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
          >
            ↻ Clear
          </button>
        )}
      </div>

      {/* Insight */}
      <div className="mt-4 px-4 py-2 bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 rounded-lg">
        <p className="text-[#8A2BE2]/80 text-xs text-center">
          💡 Unlike pseudo-random numbers, quantum randomness is fundamentally unpredictable — 
          not even the universe "knows" the outcome until measurement!
        </p>
      </div>
    </div>
  );
}
