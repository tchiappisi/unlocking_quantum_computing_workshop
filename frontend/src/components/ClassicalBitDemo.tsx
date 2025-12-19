"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ClassicalBitDemo() {
  const [bit, setBit] = useState<0 | 1>(0);

  const toggle = () => {
    setBit(prev => prev === 0 ? 1 : 0);
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-gray-700">
      <h3 className="text-xl font-bold text-gray-100 mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Interactive Classical Bit
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Click to flip the bit — it's always exactly 0 or 1, nothing in between!
      </p>

      <div className="flex flex-col items-center">
        {/* Bit visualization */}
        <motion.button
          onClick={toggle}
          className={`w-32 h-32 rounded-lg flex items-center justify-center text-4xl font-bold border-2 mb-4 cursor-pointer transition-all
            ${bit === 0 
              ? "bg-gray-800 border-gray-600 hover:border-gray-500" 
              : "bg-[#00FFF0]/20 border-[#00FFF0] shadow-[0_0_20px_rgba(0,255,240,0.3)]"
            }`}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            rotateY: bit === 1 ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            className={bit === 0 ? "text-gray-400" : "text-[#00FFF0]"}
            animate={{ rotateY: bit === 1 ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {bit}
          </motion.span>
        </motion.button>

        {/* State label */}
        <div className="text-center mb-4">
          <span className={`text-lg font-mono ${bit === 0 ? "text-gray-500" : "text-[#00FFF0]"}`}>
            {bit === 0 ? "OFF" : "ON"}
          </span>
        </div>

        {/* Toggle switch visualization */}
        <div 
          onClick={toggle}
          className="w-20 h-10 bg-gray-800 rounded-full border border-gray-600 p-1 cursor-pointer relative"
        >
          <motion.div
            className={`w-8 h-8 rounded-full ${bit === 0 ? "bg-gray-600" : "bg-[#00FFF0]"}`}
            animate={{ x: bit === 0 ? 0 : 40 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        {/* Description */}
        <div className="mt-6 text-center max-w-xs">
          <p className="text-gray-500 text-sm">
            A classical bit is <strong className="text-gray-300">deterministic</strong> — 
            you always know exactly what value it holds. No uncertainty, no probability.
          </p>
        </div>

        {/* Comparison hint */}
        <div className="mt-4 px-4 py-2 bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 rounded-lg">
          <p className="text-[#8A2BE2] text-xs text-center">
            💡 Compare this to the qubit demo below — notice the difference!
          </p>
        </div>
      </div>
    </div>
  );
}
