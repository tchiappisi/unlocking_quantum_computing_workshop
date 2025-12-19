"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type QubitState = "zero" | "one" | "superposition";

export default function HadamardGateDemo() {
  const [inputState, setInputState] = useState<"zero" | "one">("zero");
  const [outputState, setOutputState] = useState<QubitState>("zero");
  const [applying, setApplying] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const applyHadamard = () => {
    if (applying) return;
    
    setApplying(true);
    setShowOutput(false);
    
    setTimeout(() => {
      setOutputState("superposition");
      setShowOutput(true);
      setApplying(false);
    }, 800);
  };

  const toggleInput = () => {
    const newInput = inputState === "zero" ? "one" : "zero";
    setInputState(newInput);
    setShowOutput(false);
  };

  const reset = () => {
    setInputState("zero");
    setOutputState("zero");
    setShowOutput(false);
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#8A2BE2]/30">
      <h3 className="text-xl font-bold text-[#8A2BE2] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        The Hadamard Gate
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        The H gate creates superposition — watch it transform a definite state!
      </p>

      <div className="flex flex-col items-center">
        {/* Circuit visualization */}
        <div className="flex items-center gap-4 mb-6">
          {/* Input qubit */}
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-xs mb-2">Input</span>
            <motion.button
              onClick={toggleInput}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-2
                ${inputState === "zero" 
                  ? "bg-[#00FFF0]/10 border-[#00FFF0] text-[#00FFF0]" 
                  : "bg-[#8A2BE2]/10 border-[#8A2BE2] text-[#8A2BE2]"
                } cursor-pointer hover:scale-105 transition-transform`}
              whileTap={{ scale: 0.95 }}
            >
              |{inputState === "zero" ? "0" : "1"}⟩
            </motion.button>
            <span className="text-gray-600 text-xs mt-1">click to toggle</span>
          </div>

          {/* Wire to gate */}
          <motion.div 
            className="w-8 h-0.5 bg-gray-600"
            animate={applying ? { backgroundColor: ["#666", "#00FFF0", "#666"] } : {}}
            transition={{ duration: 0.4 }}
          />

          {/* Hadamard gate */}
          <motion.div
            className="w-14 h-14 bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 border-2 border-[#00FFF0] rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={applyHadamard}
            animate={applying ? { 
              rotate: [0, 180, 360],
              boxShadow: ["0 0 0px #00FFF0", "0 0 20px #00FFF0", "0 0 0px #00FFF0"]
            } : {}}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[#00FFF0] text-2xl font-bold">H</span>
          </motion.div>

          {/* Wire from gate */}
          <motion.div 
            className="w-8 h-0.5 bg-gray-600"
            animate={applying ? { backgroundColor: ["#666", "#8A2BE2", "#666"] } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          />

          {/* Output qubit */}
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-xs mb-2">Output</span>
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-2
                ${!showOutput 
                  ? "bg-gray-800 border-gray-600 text-gray-600" 
                  : "bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 border-[#00FFF0]"
                }`}
              animate={showOutput ? {
                boxShadow: ["0 0 10px rgba(0,255,240,0.3)", "0 0 20px rgba(138,43,226,0.3)", "0 0 10px rgba(0,255,240,0.3)"]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {showOutput ? (
                <span className="text-[#00FFF0] text-sm">|ψ⟩</span>
              ) : (
                <span>?</span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Equation display */}
        <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700 mb-4">
          <div className="font-mono text-center">
            {showOutput ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-gray-400">H</span>
                <span className={inputState === "zero" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>|{inputState === "zero" ? "0" : "1"}⟩</span>
                <span className="text-gray-400"> = </span>
                <span className="text-[#00FFF0]">(|0⟩ {inputState === "zero" ? "+" : "-"} |1⟩)</span>
                <span className="text-gray-400"> / √2</span>
              </motion.div>
            ) : (
              <span className="text-gray-500">Click H gate to apply</span>
            )}
          </div>
        </div>

        {/* Probability bars */}
        {showOutput && (
          <motion.div 
            className="w-full max-w-xs mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>P(0) = 50%</span>
              <span>P(1) = 50%</span>
            </div>
            <div className="flex h-3 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                className="bg-[#00FFF0]"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="bg-[#8A2BE2]"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        )}

        {/* Description */}
        <p className="text-gray-500 text-sm text-center max-w-sm mb-4">
          {showOutput 
            ? inputState === "zero"
              ? "The H gate transformed |0⟩ into equal superposition with + phase!"
              : "The H gate transformed |1⟩ into equal superposition with - phase!"
            : "The Hadamard gate is the key to creating superposition in quantum circuits."
          }
        </p>

        {/* Apply button */}
        <div className="flex gap-3">
          <button
            onClick={applyHadamard}
            disabled={applying}
            className="px-4 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/30 transition-colors disabled:opacity-50"
          >
            Apply H Gate
          </button>
          {showOutput && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={reset}
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors text-sm"
            >
              Reset
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
