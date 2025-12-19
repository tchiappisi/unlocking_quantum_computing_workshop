"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QubitState = "zero" | "one" | "superposition";
type GateType = "H" | "X" | "Z" | null;

export default function QubitDemo() {
  const [state, setState] = useState<QubitState>("zero");
  const [applying, setApplying] = useState<GateType>(null);
  const [measured, setMeasured] = useState<"0" | "1" | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const reset = () => {
    setState("zero");
    setMeasured(null);
  };

  const applyGate = (gate: GateType) => {
    if (measured !== null || !gate) return;
    
    setApplying(gate);
    
    setTimeout(() => {
      if (gate === "H") {
        if (state === "zero" || state === "one") {
          setState("superposition");
        } else {
          setState("zero");
        }
      } else if (gate === "X") {
        if (state === "zero") setState("one");
        else if (state === "one") setState("zero");
      } else if (gate === "Z") {
        // Z gate adds phase, visually we'll just show a flash
      }
      setApplying(null);
    }, 400);
  };

  const measure = () => {
    if (measured !== null) return;
    
    setApplying("H");
    
    setTimeout(() => {
      let result: "0" | "1";
      if (state === "zero") {
        result = "0";
      } else if (state === "one") {
        result = "1";
      } else {
        result = Math.random() < 0.5 ? "0" : "1";
      }
      setMeasured(result);
      setState(result === "0" ? "zero" : "one");
      setHistory(prev => [...prev.slice(-7), result]);
      setApplying(null);
    }, 500);
  };

  const getStateLabel = () => {
    if (measured !== null) return `|${measured}⟩`;
    if (state === "zero") return "|0⟩";
    if (state === "one") return "|1⟩";
    return "|ψ⟩";
  };

  const getStateDescription = () => {
    if (measured !== null) return `Collapsed to ${measured}`;
    if (state === "zero") return "Ground state";
    if (state === "one") return "Excited state";
    return "Superposition: 50% |0⟩ + 50% |1⟩";
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Interactive Qubit
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Apply gates to manipulate the qubit, then measure to collapse the state!
      </p>

      <div className="flex flex-col items-center mb-6">
        {/* Qubit visualization */}
        <motion.div
          className={`w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold border-2 mb-4
            ${state === "superposition" 
              ? "bg-gradient-to-br from-[#00FFF0]/20 via-[#8A2BE2]/20 to-[#00FFF0]/20 border-[#00FFF0]" 
              : state === "zero"
                ? "bg-[#00FFF0]/10 border-[#00FFF0]"
                : "bg-[#8A2BE2]/10 border-[#8A2BE2]"
            }`}
          animate={
            applying 
              ? { rotate: 360, scale: [1, 1.1, 1] }
              : state === "superposition"
                ? { 
                    boxShadow: [
                      "0 0 20px rgba(0,255,240,0.3)",
                      "0 0 30px rgba(138,43,226,0.3)",
                      "0 0 20px rgba(0,255,240,0.3)"
                    ]
                  }
                : {}
          }
          transition={
            applying 
              ? { duration: 0.4 }
              : { duration: 2, repeat: Infinity }
          }
        >
          <span className={state === "superposition" ? "text-[#00FFF0]" : state === "zero" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
            {getStateLabel()}
          </span>
        </motion.div>

        {/* State description */}
        <div className="text-center mb-4">
          <span className="text-gray-400 text-sm">{getStateDescription()}</span>
        </div>

        {/* Probability bars */}
        <div className="w-full max-w-xs mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>|0⟩ probability</span>
            <span>|1⟩ probability</span>
          </div>
          <div className="flex h-4 rounded-full overflow-hidden border border-gray-700">
            <motion.div
              className="bg-[#00FFF0]"
              animate={{ 
                width: state === "zero" ? "100%" : state === "one" ? "0%" : "50%"
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="bg-[#8A2BE2]"
              animate={{ 
                width: state === "one" ? "100%" : state === "zero" ? "0%" : "50%"
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-[#00FFF0]">
              {state === "zero" ? "100%" : state === "one" ? "0%" : "50%"}
            </span>
            <span className="text-[#8A2BE2]">
              {state === "one" ? "100%" : state === "zero" ? "0%" : "50%"}
            </span>
          </div>
        </div>

        {/* Gate buttons */}
        {measured === null ? (
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => applyGate("X")}
              disabled={applying !== null}
              className="px-4 py-2 bg-[#8A2BE2]/20 border border-[#8A2BE2] rounded-lg text-[#8A2BE2] hover:bg-[#8A2BE2]/30 transition-colors font-mono disabled:opacity-50"
            >
              X
            </button>
            <button
              onClick={() => applyGate("H")}
              disabled={applying !== null}
              className="px-4 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/30 transition-colors font-mono disabled:opacity-50"
            >
              H
            </button>
            <button
              onClick={measure}
              disabled={applying !== null}
              className="px-4 py-2 bg-gradient-to-r from-[#00FFF0]/20 to-[#8A2BE2]/20 border border-white/30 rounded-lg text-white hover:border-white/50 transition-colors disabled:opacity-50"
            >
              Measure
            </button>
          </div>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={reset}
            className="px-4 py-2 bg-[#00FFF0]/10 border border-[#00FFF0]/50 rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/20 transition-colors text-sm"
          >
            ↻ Reset Qubit to |0⟩
          </motion.button>
        )}

        {/* Gate legend */}
        <div className="flex gap-4 text-xs text-gray-500 mt-2">
          <span><span className="text-[#8A2BE2]">X</span> = flip</span>
          <span><span className="text-[#00FFF0]">H</span> = superposition</span>
        </div>
      </div>

      {/* Measurement history */}
      {history.length > 0 && (
        <div className="pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs text-center mb-2">Measurement History</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {history.map((h, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-mono ${
                  h === "0" ? "bg-[#00FFF0]/20 text-[#00FFF0]" : "bg-[#8A2BE2]/20 text-[#8A2BE2]"
                }`}
              >
                {h}
              </div>
            ))}
          </div>
          {state === "superposition" && history.length >= 4 && (
            <p className="text-gray-600 text-xs text-center mt-2">
              Notice the roughly 50/50 distribution from superposition!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
