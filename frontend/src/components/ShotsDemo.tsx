"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ShotsDemo() {
  const [shots, setShots] = useState(0);
  const [results, setResults] = useState<{ zeros: number; ones: number }>({ zeros: 0, ones: 0 });
  const [running, setRunning] = useState(false);
  const [currentShot, setCurrentShot] = useState<"0" | "1" | null>(null);

  const targetShots = 100;
  const trueP0 = 50;

  useEffect(() => {
    if (running && shots < targetShots) {
      const timer = setTimeout(() => {
        const outcome = Math.random() * 100 < trueP0 ? "0" : "1";
        setCurrentShot(outcome);
        setResults(prev => ({
          zeros: prev.zeros + (outcome === "0" ? 1 : 0),
          ones: prev.ones + (outcome === "1" ? 1 : 0),
        }));
        setShots(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else if (shots >= targetShots) {
      setRunning(false);
      setCurrentShot(null);
    }
  }, [running, shots]);

  const startSimulation = () => {
    setShots(0);
    setResults({ zeros: 0, ones: 0 });
    setRunning(true);
  };

  const reset = () => {
    setShots(0);
    setResults({ zeros: 0, ones: 0 });
    setRunning(false);
    setCurrentShot(null);
  };

  const p0 = shots > 0 ? Math.round((results.zeros / shots) * 100) : 0;
  const p1 = shots > 0 ? Math.round((results.ones / shots) * 100) : 0;

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#8A2BE2]/30">
      <h3 className="text-xl font-bold text-[#8A2BE2] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Multiple Shots Simulation
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Watch how running many shots reveals the true probability distribution!
      </p>

      {/* Circuit being simulated */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="px-3 py-1 bg-[#00FFF0]/10 border border-[#00FFF0]/30 rounded text-[#00FFF0] text-sm font-mono">
          |0⟩
        </div>
        <div className="w-6 h-0.5 bg-gray-600" />
        <div className="px-3 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded text-[#00FFF0] font-bold">
          H
        </div>
        <div className="w-6 h-0.5 bg-gray-600" />
        <div className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-gray-400 text-sm">
          📊
        </div>
        <span className="text-gray-500 text-sm ml-2">→ 50/50 expected</span>
      </div>

      {/* Live shot display */}
      <div className="flex justify-center mb-4">
        <motion.div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-2
            ${currentShot === "0" 
              ? "bg-[#00FFF0]/20 border-[#00FFF0] text-[#00FFF0]" 
              : currentShot === "1"
                ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]"
                : "bg-gray-800 border-gray-600 text-gray-600"
            }`}
          animate={currentShot ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.1 }}
        >
          {currentShot || "?"}
        </motion.div>
      </div>

      {/* Shot counter */}
      <div className="text-center mb-4">
        <span className="text-gray-400">Shot </span>
        <span className="text-[#00FFF0] font-bold text-xl">{shots}</span>
        <span className="text-gray-400"> / {targetShots}</span>
      </div>

      {/* Results histogram */}
      <div className="max-w-sm mx-auto mb-4">
        <div className="flex gap-4 h-32">
          {/* Zero bar */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex-1 w-full flex items-end">
              <motion.div
                className="w-full bg-[#00FFF0] rounded-t"
                animate={{ height: `${shots > 0 ? (results.zeros / shots) * 100 : 0}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-2 text-center">
              <div className="text-[#00FFF0] font-bold">{results.zeros}</div>
              <div className="text-gray-500 text-xs">|0⟩ ({p0}%)</div>
            </div>
          </div>
          
          {/* One bar */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex-1 w-full flex items-end">
              <motion.div
                className="w-full bg-[#8A2BE2] rounded-t"
                animate={{ height: `${shots > 0 ? (results.ones / shots) * 100 : 0}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-2 text-center">
              <div className="text-[#8A2BE2] font-bold">{results.ones}</div>
              <div className="text-gray-500 text-xs">|1⟩ ({p1}%)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Convergence indicator */}
      {shots > 0 && (
        <div className="text-center mb-4">
          <p className="text-gray-500 text-sm">
            {shots < 20 
              ? "Early shots — distribution is noisy..."
              : shots < 50
                ? "Getting closer to 50/50..."
                : shots < 100
                  ? "Distribution converging..."
                  : `Final: ${p0}% zeros, ${p1}% ones — close to theoretical 50/50!`
            }
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={startSimulation}
          disabled={running}
          className="px-4 py-2 bg-[#8A2BE2]/20 border border-[#8A2BE2] rounded-lg text-[#8A2BE2] hover:bg-[#8A2BE2]/30 transition-colors disabled:opacity-50"
        >
          {running ? "Running..." : shots > 0 ? "Run Again" : "▶ Run 100 Shots"}
        </button>
        {shots > 0 && !running && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
          >
            ↻ Reset
          </button>
        )}
      </div>

      {/* Insight */}
      <div className="mt-4 px-4 py-2 bg-amber-950/30 border border-amber-700/30 rounded-lg">
        <p className="text-amber-200/80 text-xs text-center">
          💡 More shots = more accurate probability estimate. Real quantum computers use 1000+ shots!
        </p>
      </div>
    </div>
  );
}
