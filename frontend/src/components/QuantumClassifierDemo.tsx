"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Pattern = "00" | "01" | "10" | "11";
type Classification = "A" | "B" | null;

export default function QuantumClassifierDemo() {
  const [inputPattern, setInputPattern] = useState<Pattern>("00");
  const [classification, setClassification] = useState<Classification>(null);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);

  const classify = () => {
    if (running) return;
    setRunning(true);
    setClassification(null);
    setStep(0);

    const steps = [1, 2, 3, 4];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setStep(currentStep);

      if (currentStep >= steps.length) {
        clearInterval(interval);
        const result: Classification = 
          inputPattern === "00" || inputPattern === "11" ? "A" : "B";
        setClassification(result);
        setRunning(false);
      }
    }, 400);
  };

  const reset = () => {
    setClassification(null);
    setStep(0);
  };

  const patterns: Pattern[] = ["00", "01", "10", "11"];

  return (
    <div className="my-8 p-6 bg-gray-900/80 rounded-2xl border border-[#8A2BE2]/30">
      <h3 className="text-xl font-bold text-[#8A2BE2] mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Quantum Pattern Classifier
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        A simple classifier using entanglement: same bits → A, different bits → B
      </p>

      {/* Input pattern selector */}
      <div className="mb-6">
        <p className="text-gray-500 text-xs text-center mb-2">Select input pattern:</p>
        <div className="flex justify-center gap-2">
          {patterns.map((p) => (
            <button
              key={p}
              onClick={() => { setInputPattern(p); reset(); }}
              disabled={running}
              className={`w-14 h-14 rounded-lg font-mono text-lg font-bold border-2 transition-all
                ${inputPattern === p
                  ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]"
                  : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
                } ${running ? "opacity-50" : "cursor-pointer"}`}
            >
              |{p}⟩
            </button>
          ))}
        </div>
      </div>

      {/* Circuit visualization */}
      <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
        <div className="flex flex-col gap-3">
          {/* Qubit 0 */}
          <div className="flex items-center gap-2">
            <span className={`w-8 text-xs font-mono ${step >= 1 ? "text-[#00FFF0]" : "text-gray-500"}`}>
              |{inputPattern[0]}⟩
            </span>
            <div className={`w-8 h-0.5 ${step >= 1 ? "bg-[#00FFF0]" : "bg-gray-600"}`} />
            <motion.div
              className={`w-8 h-8 rounded border flex items-center justify-center text-sm font-bold
                ${step >= 2 ? "bg-[#00FFF0]/20 border-[#00FFF0] text-[#00FFF0]" : "border-gray-600 text-gray-500"}`}
              animate={step === 2 ? { scale: [1, 1.2, 1] } : {}}
            >
              H
            </motion.div>
            <div className={`w-8 h-0.5 ${step >= 2 ? "bg-[#00FFF0]" : "bg-gray-600"}`} />
            <motion.div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs
                ${step >= 3 ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]" : "border-gray-600 text-gray-500"}`}
              animate={step === 3 ? { scale: [1, 1.2, 1] } : {}}
            >
              ●
            </motion.div>
            <div className={`w-8 h-0.5 ${step >= 3 ? "bg-[#8A2BE2]" : "bg-gray-600"}`} />
            <motion.div
              className={`w-8 h-8 rounded border flex items-center justify-center
                ${step >= 4 ? "bg-[#00FFF0]/20 border-[#00FFF0]" : "border-gray-600"}`}
              animate={step === 4 ? { scale: [1, 1.2, 1] } : {}}
            >
              📊
            </motion.div>
          </div>

          {/* CNOT connection */}
          <div className="flex items-center gap-2">
            <span className="w-8" />
            <div className="w-8" />
            <div className="w-8" />
            <div className="w-8" />
            <div className={`w-0.5 h-4 mx-auto ${step >= 3 ? "bg-[#8A2BE2]" : "bg-gray-600"}`} />
          </div>

          {/* Qubit 1 */}
          <div className="flex items-center gap-2">
            <span className={`w-8 text-xs font-mono ${step >= 1 ? "text-[#00FFF0]" : "text-gray-500"}`}>
              |{inputPattern[1]}⟩
            </span>
            <div className={`w-8 h-0.5 ${step >= 1 ? "bg-[#00FFF0]" : "bg-gray-600"}`} />
            <div className="w-8 h-8 flex items-center justify-center">
              <div className={`w-full h-0.5 ${step >= 2 ? "bg-gray-500" : "bg-gray-600"}`} />
            </div>
            <div className={`w-8 h-0.5 ${step >= 2 ? "bg-gray-500" : "bg-gray-600"}`} />
            <motion.div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-lg
                ${step >= 3 ? "bg-[#8A2BE2]/20 border-[#8A2BE2] text-[#8A2BE2]" : "border-gray-600 text-gray-500"}`}
              animate={step === 3 ? { scale: [1, 1.2, 1] } : {}}
            >
              ⊕
            </motion.div>
            <div className={`w-8 h-0.5 ${step >= 3 ? "bg-[#8A2BE2]" : "bg-gray-600"}`} />
            <motion.div
              className={`w-8 h-8 rounded border flex items-center justify-center
                ${step >= 4 ? "bg-[#00FFF0]/20 border-[#00FFF0]" : "border-gray-600"}`}
              animate={step === 4 ? { scale: [1, 1.2, 1] } : {}}
            >
              📊
            </motion.div>
          </div>
        </div>

        {/* Step labels */}
        <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
          <span className={step >= 1 ? "text-[#00FFF0]" : ""}>Input</span>
          <span className={step >= 2 ? "text-[#00FFF0]" : ""}>H Gate</span>
          <span className={step >= 3 ? "text-[#8A2BE2]" : ""}>CNOT</span>
          <span className={step >= 4 ? "text-[#00FFF0]" : ""}>Measure</span>
        </div>
      </div>

      {/* Result */}
      <div className="text-center mb-4 min-h-[80px] flex items-center justify-center">
        {classification ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`px-8 py-4 rounded-xl border-2 ${
              classification === "A"
                ? "bg-[#00FFF0]/20 border-[#00FFF0]"
                : "bg-[#8A2BE2]/20 border-[#8A2BE2]"
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">Classification Result:</div>
            <div className={`text-4xl font-bold ${
              classification === "A" ? "text-[#00FFF0]" : "text-[#8A2BE2]"
            }`}>
              Class {classification}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {classification === "A" ? "Same bits (00 or 11)" : "Different bits (01 or 10)"}
            </div>
          </motion.div>
        ) : running ? (
          <div className="text-gray-400">Processing quantum circuit...</div>
        ) : (
          <div className="text-gray-500 text-sm">Select a pattern and run the classifier</div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={classify}
          disabled={running}
          className="px-6 py-2 bg-[#8A2BE2]/20 border border-[#8A2BE2] rounded-lg text-[#8A2BE2] hover:bg-[#8A2BE2]/30 transition-colors disabled:opacity-50"
        >
          {running ? "Running..." : "▶ Run Classifier"}
        </button>
        {classification && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 transition-colors"
          >
            ↻ Reset
          </button>
        )}
      </div>

      {/* Truth table */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-gray-500 text-xs text-center mb-2">Classification Rules:</p>
        <div className="flex justify-center gap-4 text-xs">
          <div className="text-center">
            <span className="text-[#00FFF0]">Class A</span>
            <div className="text-gray-400">|00⟩, |11⟩</div>
          </div>
          <div className="text-gray-600">|</div>
          <div className="text-center">
            <span className="text-[#8A2BE2]">Class B</span>
            <div className="text-gray-400">|01⟩, |10⟩</div>
          </div>
        </div>
      </div>
    </div>
  );
}
