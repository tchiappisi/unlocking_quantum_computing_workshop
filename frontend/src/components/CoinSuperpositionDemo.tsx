"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CoinState = "spinning" | "heads" | "tails";

export default function CoinSuperpositionDemo() {
  const [coinState, setCoinState] = useState<CoinState>("spinning");
  const [spinAngle, setSpinAngle] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (coinState === "spinning") {
      const interval = setInterval(() => {
        setSpinAngle(prev => prev + 15);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [coinState]);

  const observe = () => {
    if (coinState !== "spinning") return;
    
    const result = Math.random() < 0.5 ? "heads" : "tails";
    setCoinState(result);
    setHistory(prev => [...prev.slice(-7), result === "heads" ? "H" : "T"]);
  };

  const reset = () => {
    setCoinState("spinning");
    setSpinAngle(0);
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        The Spinning Coin
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        A coin spinning in the air is like a qubit in superposition — click to "observe" it!
      </p>

      <div className="flex flex-col items-center">
        {/* Coin visualization */}
        <div className="relative mb-6">
          <motion.div
            className={`w-28 h-28 rounded-full flex items-center justify-center text-2xl font-bold border-4 cursor-pointer
              ${coinState === "spinning" 
                ? "bg-gradient-to-r from-[#00FFF0]/30 via-[#8A2BE2]/30 to-[#00FFF0]/30 border-[#00FFF0]" 
                : coinState === "heads"
                  ? "bg-[#00FFF0]/20 border-[#00FFF0]"
                  : "bg-[#8A2BE2]/20 border-[#8A2BE2]"
              }`}
            onClick={observe}
            animate={
              coinState === "spinning" 
                ? { rotateY: spinAngle, scale: [1, 1.02, 1] }
                : { rotateY: 0 }
            }
            transition={
              coinState === "spinning"
                ? { duration: 0.05, ease: "linear" }
                : { duration: 0.3 }
            }
            style={{ transformStyle: "preserve-3d" }}
            whileHover={coinState === "spinning" ? { scale: 1.05 } : {}}
          >
            {coinState === "spinning" ? (
              <span className="text-[#00FFF0] text-lg">?</span>
            ) : coinState === "heads" ? (
              <span className="text-[#00FFF0]">H</span>
            ) : (
              <span className="text-[#8A2BE2]">T</span>
            )}
          </motion.div>
          
          {/* Spinning glow effect */}
          {coinState === "spinning" && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,255,240,0.4)",
                  "0 0 30px rgba(138,43,226,0.4)",
                  "0 0 20px rgba(0,255,240,0.4)",
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>

        {/* State display */}
        <div className="text-center mb-4">
          <div className="inline-block bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 font-mono text-sm">
            {coinState === "spinning" ? (
              <span className="text-[#00FFF0]">|coin⟩ = |heads⟩ + |tails⟩</span>
            ) : (
              <span className={coinState === "heads" ? "text-[#00FFF0]" : "text-[#8A2BE2]"}>
                Observed: {coinState === "heads" ? "HEADS" : "TAILS"}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm text-center max-w-xs mb-4">
          {coinState === "spinning" 
            ? "The coin is in superposition — it's genuinely both heads AND tails until observed!"
            : "Observation collapsed the superposition into a definite state."
          }
        </p>

        {/* Buttons */}
        {coinState === "spinning" ? (
          <button
            onClick={observe}
            className="px-6 py-2 bg-gradient-to-r from-[#00FFF0]/20 to-[#8A2BE2]/20 border border-[#00FFF0]/50 rounded-lg text-[#00FFF0] hover:border-[#00FFF0] transition-colors"
          >
            👁 Observe (Collapse)
          </button>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={reset}
            className="px-4 py-2 bg-[#00FFF0]/10 border border-[#00FFF0]/50 rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/20 transition-colors text-sm"
          >
            ↻ Spin Again
          </motion.button>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-700 w-full">
            <p className="text-gray-500 text-xs text-center mb-2">Observation History</p>
            <div className="flex justify-center gap-2">
              {history.map((h, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    h === "H" ? "bg-[#00FFF0]/20 text-[#00FFF0]" : "bg-[#8A2BE2]/20 text-[#8A2BE2]"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs text-center mt-2">
              ~50/50 distribution emerges over many observations!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
