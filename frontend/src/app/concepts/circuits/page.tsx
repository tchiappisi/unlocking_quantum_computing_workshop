import ConceptPage from "@/components/ConceptPage";
import CircuitBuilderDemo from "@/components/CircuitBuilderDemo";
import ShotsDemo from "@/components/ShotsDemo";

export default function CircuitsPage() {
  return (
    <ConceptPage
      title="Quantum Circuits"
      subtitle="Building Blocks of Quantum Programs"
      notebookName="04_circuits.ipynb"
      timeEstimate="15 minutes"
      reflectionQuestions={[
        "How is designing a quantum circuit different from writing classical code?",
        "Why do we need measurement at the end of a quantum circuit?",
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">What Is a Quantum Circuit?</h2>
        <p className="text-[#E6E6E6] mb-4">
          A <strong className="text-[#00FFF0]">quantum circuit</strong> is the quantum equivalent of a classical program.
          It's a sequence of operations (gates) applied to qubits, followed by measurement.
        </p>
        <p className="text-[#E6E6E6]">
          Unlike classical programs that manipulate bits deterministically, quantum circuits
          manipulate probability amplitudes to produce probabilistic outputs.
        </p>
      </section>

      <CircuitBuilderDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Circuit Anatomy</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Wires (Qubits)</h3>
            <p className="text-gray-400">
              Horizontal lines represent qubits. Time flows left to right. Each wire starts in
              state |0⟩ by default.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Gates</h3>
            <p className="text-gray-400">
              Boxes and symbols on the wires represent operations. Gates are reversible (you can
              always undo them).
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Measurement</h3>
            <p className="text-gray-400">
              The meter symbol at the end collapses the quantum state to classical bits (0 or 1).
              This is how we extract results.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Essential Gates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="p-3 border border-gray-700 text-[#00FFF0]">Gate</th>
                <th className="p-3 border border-gray-700 text-[#00FFF0]">Symbol</th>
                <th className="p-3 border border-gray-700 text-[#00FFF0]">What It Does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">X</td>
                <td className="p-3 border border-gray-700 text-gray-300">NOT gate</td>
                <td className="p-3 border border-gray-700 text-gray-300">Flips |0⟩ ↔ |1⟩ (like classical NOT)</td>
              </tr>
              <tr className="bg-gray-800/30">
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">H</td>
                <td className="p-3 border border-gray-700 text-gray-300">Hadamard</td>
                <td className="p-3 border border-gray-700 text-gray-300">Creates superposition</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">CNOT</td>
                <td className="p-3 border border-gray-700 text-gray-300">Controlled-NOT</td>
                <td className="p-3 border border-gray-700 text-gray-300">Flips target if control is |1⟩</td>
              </tr>
              <tr className="bg-gray-800/30">
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">Z</td>
                <td className="p-3 border border-gray-700 text-gray-300">Phase flip</td>
                <td className="p-3 border border-gray-700 text-gray-300">Adds negative phase to |1⟩</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">RY(θ)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Y-rotation</td>
                <td className="p-3 border border-gray-700 text-gray-300">Rotates by angle θ around Y-axis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ShotsDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Simulation Workflow</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">1</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Build</strong>&nbsp;— Define qubits and gates using Qiskit
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">2</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Transpile</strong>&nbsp;— Convert to executable form for the backend
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">3</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Run</strong>&nbsp;— Execute on the simulator (many shots)
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">4</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Analyze</strong>&nbsp;— Count outcomes to estimate probabilities
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Key Insight: Multiple Shots</h2>
        <div className="bg-amber-950/50 border border-amber-700/50 p-6 rounded-xl">
          <p className="text-amber-200">
            Because quantum measurement is probabilistic, we run the same circuit many times
            (e.g., 1,000 "shots") and count the results. This gives us a histogram of outcomes
            that approximates the true probability distribution.
          </p>
        </div>
      </section>
    </ConceptPage>
  );
}
