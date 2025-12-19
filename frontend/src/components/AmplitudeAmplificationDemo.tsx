"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AmplitudeAmplificationDemo() {
  const [iteration, setIteration] = useState(0);
  const [running, setRunning] = useState(false);
  const numStates = 8;
  const targetIndex = 3;
  const maxIterations = 3;

  const calculateAmplitudes = (iter: number): number[] => {
    const N = numStates;
    const theta = Math.asin(1 / Math.sqrt(N));
    const angle = (2 * iter + 1) * theta;
    
    const targetAmp = Math.sin(angle);
    const otherAmp = Math.cos(angle) / Math.sqrt(N - 1);
    
    return Array(N).fill(0).map((_, i) => 
      i === targetIndex ? targetAmp : otherAmp
    );
  };

  const amplitudes = calculateAmplitudes(iteration);
  const maxAmp = Math.max(...amplitudes.map(Math.abs));

  const step = () => {
    if (iteration >= maxIterations) return;
    setRunning(true);
    setTimeout(() => {
      setIteration(prev => prev + 1);
      setRunning(false);
    }, 300);
  };

  const reset = () => {
    setIteration(0);
  };

  const getProbability = (amp: number) => Math.round(amp * amp * 100);

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#00FFF0]/30">
      <h3 className="text-xl font-bold text-[#00FFF0] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Amplitude Amplification
      </h3>
      <p className="text-gray-400 text-sm text-center mb-2">
        Watch the target state's amplitude grow with each Grover iteration!
      </p>
      <p className="text-[#8A2BE2] text-xs text-center mb-6">
        Target: State |{targetIndex.toString(2).padStart(3, '0')}⟩ (index {targetIndex})
      </p>

      {/* Amplitude bar chart */}
      <div className="flex items-end justify-center gap-2 h-48 mb-4 px-4">
        {amplitudes.map((amp, i) => {
          const isTarget = i === targetIndex;
          const height = Math.abs(amp) / maxAmp * 100;
          const isNegative = amp < 0;
          
          return (
            <div key={i} className="flex flex-col items-center flex-1 max-w-12">
              <div className="flex-1 w-full flex flex-col justify-end items-center relative h-32">
                {/* Zero line */}
                <div className="absolute bottom-1/2 w-full h-px bg-gray-700" />
                
                <motion.div
                  className={`w-full rounded-t ${
                    isTarget 
                      ? isNegative ? "bg-red-500" : "bg-[#00FFF0]"
                      : isNegative ? "bg-red-400/50" : "bg-[#8A2BE2]/70"
                  }`}
                  initial={{ height: 0 }}
                  animate={{ 
                    height: `${height / 2}%`,
                    y: isNegative ? "100%" : 0,
                    scaleY: isNegative ? -1 : 1
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  style={{ originY: 1 }}
                />
              </div>
              
              <div className="mt-2 text-center">
                <div className={`text-xs font-mono ${isTarget ? "text-[#00FFF0]" : "text-gray-500"}`}>
                  |{i.toString(2).padStart(3, '0')}⟩
                </div>
                <div className={`text-xs ${isTarget ? "text-[#00FFF0] font-bold" : "text-gray-600"}`}>
                  {getProbability(amp)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Iteration counter */}
      <div className="text-center mb-4">
        <span className="text-gray-400">Iteration: </span>
        <span className="text-[#00FFF0] font-bold text-xl">{iteration}</span>
        <span className="text-gray-400"> / {maxIterations}</span>
      </div>

      {/* Phase indicator */}
      <div className="flex justify-center gap-4 mb-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#00FFF0] rounded" />
          <span className="text-gray-400">Target (+)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded" />
          <span className="text-gray-400">Negative phase</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#8A2BE2]/70 rounded" />
          <span className="text-gray-400">Others</span>
        </div>
      </div>

      {/* What's happening */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-4 text-center">
        <p className="text-sm text-gray-300">
          {iteration === 0 && "All states start with equal amplitude (1/√8 ≈ 35%)"}
          {iteration === 1 && "After 1 iteration: target probability ~78%!"}
          {iteration === 2 && "After 2 iterations: target probability ~95%!"}
          {iteration === 3 && "Optimal! Target probability ~100%. More iterations would reduce it!"}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={step}
          disabled={running || iteration >= maxIterations}
          className="px-4 py-2 bg-[#00FFF0]/20 border border-[#00FFF0] rounded-lg text-[#00FFF0] hover:bg-[#00FFF0]/30 transition-colors disabled:opacity-50"
        >
          {iteration >= maxIterations ? "Optimal Reached!" : running ? "..." : "▶ Apply Oracle + Diffusion"}
        </button>
        {iteration > 0 && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
          >
            ↻ Reset
          </button>
        )}
      </div>
    </div>
  );
}
