import ConceptPage from "@/components/ConceptPage";
import VisualPlaceholder from "@/components/VisualPlaceholder";

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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Quantum Circuit?</h2>
        <p className="text-gray-700 mb-4">
          A <strong>quantum circuit</strong> is the quantum equivalent of a classical program.
          It's a sequence of operations (gates) applied to qubits, followed by measurement.
        </p>
        <p className="text-gray-700">
          Unlike classical programs that manipulate bits deterministically, quantum circuits
          manipulate probability amplitudes to produce probabilistic outputs.
        </p>
      </section>

      <VisualPlaceholder title="Quantum Circuit Diagram" description="Wires, gates, and measurements" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Circuit Anatomy</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Wires (Qubits)</h3>
            <p className="text-gray-600">
              Horizontal lines represent qubits. Time flows left to right. Each wire starts in
              state |0⟩ by default.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Gates</h3>
            <p className="text-gray-600">
              Boxes and symbols on the wires represent operations. Gates are reversible (you can
              always undo them).
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Measurement</h3>
            <p className="text-gray-600">
              The meter symbol at the end collapses the quantum state to classical bits (0 or 1).
              This is how we extract results.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Gates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Gate</th>
                <th className="p-3 border">Symbol</th>
                <th className="p-3 border">What It Does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-mono">X</td>
                <td className="p-3 border">NOT gate</td>
                <td className="p-3 border">Flips |0⟩ ↔ |1⟩ (like classical NOT)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-mono">H</td>
                <td className="p-3 border">Hadamard</td>
                <td className="p-3 border">Creates superposition</td>
              </tr>
              <tr>
                <td className="p-3 border font-mono">CNOT</td>
                <td className="p-3 border">Controlled-NOT</td>
                <td className="p-3 border">Flips target if control is |1⟩</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-mono">Z</td>
                <td className="p-3 border">Phase flip</td>
                <td className="p-3 border">Adds negative phase to |1⟩</td>
              </tr>
              <tr>
                <td className="p-3 border font-mono">RY(θ)</td>
                <td className="p-3 border">Y-rotation</td>
                <td className="p-3 border">Rotates by angle θ around Y-axis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <VisualPlaceholder title="Gate Symbol Reference" description="Visual symbols for common gates" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Simulation Workflow</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">1</span>
            <div className="text-gray-700">
              <strong>Build</strong> — Define qubits and gates using Qiskit
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">2</span>
            <div className="text-gray-700">
              <strong>Transpile</strong> — Convert to executable form for the backend
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">3</span>
            <div className="text-gray-700">
              <strong>Run</strong> — Execute on the simulator (many shots)
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">4</span>
            <div className="text-gray-700">
              <strong>Analyze</strong> — Count outcomes to estimate probabilities
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Insight: Multiple Shots</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
          <p className="text-yellow-800">
            Because quantum measurement is probabilistic, we run the same circuit many times
            (e.g., 1,000 "shots") and count the results. This gives us a histogram of outcomes
            that approximates the true probability distribution.
          </p>
        </div>
      </section>
    </ConceptPage>
  );
}
