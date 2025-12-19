"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GroverSearchDemo() {
  const [target, setTarget] = useState<number | null>(null);
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [classicalSteps, setClassicalSteps] = useState(0);
  const [quantumSteps, setQuantumSteps] = useState(0);
  const [checkedIndices, setCheckedIndices] = useState<number[]>([]);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  
  const gridSize = 16;
  const items = Array(gridSize).fill(0).map((_, i) => i);

  const startSearch = () => {
    const newTarget = Math.floor(Math.random() * gridSize);
    setTarget(newTarget);
    setSearching(true);
    setFound(false);
    setClassicalSteps(0);
    setQuantumSteps(0);
    setCheckedIndices([]);
    setHighlightIndex(null);
    
    simulateClassicalSearch(newTarget);
  };

  const simulateClassicalSearch = (targetIdx: number) => {
    let step = 0;
    const order = [...items].sort(() => Math.random() - 0.5);
    
    const interval = setInterval(() => {
      const currentCheck = order[step];
      setCheckedIndices(prev => [...prev, currentCheck]);
      setHighlightIndex(currentCheck);
      setClassicalSteps(step + 1);
      
      if (currentCheck === targetIdx) {
        clearInterval(interval);
        setTimeout(() => {
          simulateQuantumSearch(targetIdx);
        }, 500);
      } else {
        step++;
        if (step >= gridSize) {
          clearInterval(interval);
        }
      }
    }, 150);
  };

  const simulateQuantumSearch = (targetIdx: number) => {
    const optimalSteps = Math.ceil(Math.PI / 4 * Math.sqrt(gridSize));
    let step = 0;
    
    setCheckedIndices([]);
    setHighlightIndex(null);
    
    const interval = setInterval(() => {
      step++;
      setQuantumSteps(step);
      
      if (step >= optimalSteps) {
        clearInterval(interval);
        setHighlightIndex(targetIdx);
        setFound(true);
        setSearching(false);
      }
    }, 300);
  };

  const reset = () => {
    setTarget(null);
    setSearching(false);
    setFound(false);
    setClassicalSteps(0);
    setQuantumSteps(0);
    setCheckedIndices([]);
    setHighlightIndex(null);
  };

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#8A2BE2]/30">
      <h3 className="text-xl font-bold text-[#8A2BE2] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Grover Search Demo
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        Watch classical search check items one-by-one, then Grover's √N speedup!
      </p>

      {/* Grid of items */}
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6">
        {items.map((item) => {
          const isTarget = item === target;
          const isChecked = checkedIndices.includes(item);
          const isHighlighted = item === highlightIndex;
          
          return (
            <motion.div
              key={item}
              className={`w-14 h-14 rounded-lg flex items-center justify-center font-mono text-sm border-2 transition-all
                ${isHighlighted && isTarget
                  ? "bg-[#00FFF0]/30 border-[#00FFF0] text-[#00FFF0]"
                  : isHighlighted
                    ? "bg-red-500/20 border-red-500 text-red-400"
                    : isChecked
                      ? "bg-gray-700/50 border-gray-600 text-gray-500"
                      : "bg-gray-800/50 border-gray-700 text-gray-400"
                }`}
              animate={isHighlighted ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.2 }}
            >
              {found && isTarget ? "✓" : item.toString(2).padStart(4, '0')}
            </motion.div>
          );
        })}
      </div>

      {/* Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-3 text-center border border-gray-700">
          <div className="text-gray-400 text-xs mb-1">Classical Search</div>
          <div className="text-2xl font-bold text-gray-300">{classicalSteps}</div>
          <div className="text-gray-500 text-xs">steps (O(N))</div>
        </div>
        <div className="bg-[#8A2BE2]/10 rounded-lg p-3 text-center border border-[#8A2BE2]/30">
          <div className="text-[#8A2BE2] text-xs mb-1">Grover's Algorithm</div>
          <div className="text-2xl font-bold text-[#8A2BE2]">{quantumSteps}</div>
          <div className="text-gray-400 text-xs">steps (O(√N))</div>
        </div>
      </div>

      {/* Message */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={searching ? "searching" : found ? "found" : "ready"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center mb-4"
        >
          {!target && !searching && (
            <p className="text-gray-400">Click search to find a random target in 16 items</p>
          )}
          {searching && classicalSteps > 0 && quantumSteps === 0 && (
            <p className="text-gray-300">
              🔍 Classical: Checking items one by one... ({classicalSteps} checks so far)
            </p>
          )}
          {searching && quantumSteps > 0 && !found && (
            <p className="text-[#8A2BE2]">
              ⚡ Quantum: Amplifying target amplitude... (iteration {quantumSteps})
            </p>
          )}
          {found && (
            <div>
              <p className="text-[#00FFF0] font-bold mb-1">
                🎉 Found target |{target?.toString(2).padStart(4, '0')}⟩!
              </p>
              <p className="text-gray-400 text-sm">
                Classical: {classicalSteps} steps | Quantum: {quantumSteps} steps
                <span className="text-[#00FFF0] ml-2">
                  ({Math.round((1 - quantumSteps/classicalSteps) * 100)}% faster!)
                </span>
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        {!searching ? (
          <button
            onClick={startSearch}
            className="px-6 py-2 bg-[#8A2BE2]/20 border border-[#8A2BE2] rounded-lg text-[#8A2BE2] hover:bg-[#8A2BE2]/30 transition-colors"
          >
            🔍 Start Search
          </button>
        ) : (
          <div className="px-6 py-2 text-gray-400">Searching...</div>
        )}
        {found && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
          >
            ↻ Search Again
          </button>
        )}
      </div>

      {/* Insight */}
      {found && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 px-4 py-2 bg-emerald-950/30 border border-emerald-700/30 rounded-lg"
        >
          <p className="text-emerald-200/80 text-xs text-center">
            💡 For N=16, optimal Grover iterations ≈ π/4 × √16 ≈ 3. For N=1,000,000, that's ~785 vs 1,000,000!
          </p>
        </motion.div>
      )}
    </div>
  );
}
