"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Gate = "H" | "X" | "Z" | null;

export default function CircuitBuilderDemo() {
  const [gates, setGates] = useState<Gate[]>([null, null, null, null]);
  const [measured, setMeasured] = useState(false);
  const [result, setResult] = useState<"0" | "1" | null>(null);
  const [running, setRunning] = useState(false);

  const addGate = (index: number, gate: Gate) => {
    if (measured) return;
    const newGates = [...gates];
    newGates[index] = newGates[index] === gate ? null : gate;
    setGates(newGates);
  };

  const calculateProbabilities = (): { p0: number; p1: number } => {
    let state: "zero" | "one" | "superposition" = "zero";
    
    for (const gate of gates) {
      if (gate === "X") {
        state = state === "zero" ? "one" : state === "one" ? "zero" : "superposition";
      } else if (gate === "H") {
        state = "superposition";
      }
    }
    
    if (state === "zero") return { p0: 100, p1: 0 };
    if (state === "one") return { p0: 0, p1: 100 };
    return { p0: 50, p1: 50 };
  };

  const runCircuit = () => {
    if (running) return;
    setRunning(true);
    setMeasured(false);
    setResult(null);

    setTimeout(() => {
      const { p0 } = calculateProbabilities();
      const outcome = Math.random() * 100 < p0 ? "0" : "1";
      setResult(outcome);
      setMeasured(true);
      setRunning(false);
    }, 800);
  };

  const reset = () => {
    setGates([null, null, null, null]);
    setMeasured(false);
    setResult(null);
  };

  const { p0, p1 } = calculateProbabilities();

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Circuit Builder
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Click slots to add gates, then run the circuit to measure!
      </p>

      {/* Circuit visualization */}
      <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto py-4">
        {/* Initial state */}
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-xs mb-1">start</span>
          <div className="w-10 h-10 rounded-full bg-[#00FFF0]/10 border border-[#00FFF0] flex items-center justify-center text-[#00FFF0] text-sm font-mono">
            |0⟩
          </div>
        </div>

        {/* Wire segment */}
        <div className="w-4 h-0.5 bg-gray-600" />

        {/* Gate slots */}
        {gates.map((gate, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              {/* Gate buttons */}
              <div className="flex gap-1">
                {(["H", "X", "Z"] as Gate[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => addGate(i, g)}
                    disabled={measured}
                    className={`w-6 h-6 rounded text-xs font-bold transition-all
                      ${gate === g 
                        ? g === "H" ? "bg-[#00FFF0] text-black" : g === "X" ? "bg-[#8A2BE2] text-white" : "bg-amber-500 text-black"
                        : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                      } ${measured ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              
              {/* Gate slot on wire */}
              <motion.div
                className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center font-bold
                  ${gate 
                    ? gate === "H" ? "bg-[#00FFF0]/20 border-[#00FFF0] text-[#00FFF0]" 
                      : gate === "X" ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]"
                      : "bg-amber-500/20 border-amber-500 text-amber-500"
                    : "border-dashed border-gray-600 text-gray-600"
                  }`}
                animate={running ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.2, delay: i * 0.15 }}
              >
                {gate || "·"}
              </motion.div>
            </div>
            
            {/* Wire segment */}
            <div className="w-4 h-0.5 bg-gray-600" />
          </div>
        ))}

        {/* Measurement */}
        <motion.div 
          className={`flex flex-col items-center`}
          animate={running ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <span className="text-gray-500 text-xs mb-1">measure</span>
          <div className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center
            ${measured 
              ? result === "0" ? "bg-[#00FFF0]/20 border-[#00FFF0]" : "bg-[#8A2BE2]/20 border-[#8A2BE2]"
              : "border-gray-600"
            }`}
          >
            {measured ? (
              <span className={result === "0" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
                {result}
              </span>
            ) : (
              <span className="text-gray-500">📊</span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Probability preview */}
      <div className="max-w-xs mx-auto mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>P(0) = {p0}%</span>
          <span>P(1) = {p1}%</span>
        </div>
        <div className="flex h-3 rounded-full overflow-hidden border border-gray-700">
          <motion.div
            className="bg-[#00FFF0]"
            animate={{ width: `${p0}%` }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="bg-[#8A2BE2]"
            animate={{ width: `${p1}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={runCircuit}
          disabled={running}
          className="px-4 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/30 transition-colors disabled:opacity-50"
        >
          {running ? "Running..." : "▶ Run Circuit"}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
        >
          ↻ Reset
        </button>
      </div>

      {/* Tips */}
      <div className="mt-4 text-center">
        <p className="text-gray-600 text-xs">
          Try: H alone = 50/50 | X alone = always 1 | H then X = still 50/50
        </p>
      </div>
    </div>
  );
}
