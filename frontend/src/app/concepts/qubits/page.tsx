import ConceptPage from "@/components/ConceptPage";
import VisualPlaceholder from "@/components/VisualPlaceholder";

export default function QubitsPage() {
  return (
    <ConceptPage
      title="Qubits"
      subtitle="The Quantum Bit"
      notebookName="01_qubits.ipynb"
      timeEstimate="10-15 minutes"
      reflectionQuestions={[
        "How is a qubit different from a classical bit in terms of the information it can represent?",
        "Why do you think we use probability amplitudes instead of just probabilities?",
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Classical Bit</h2>
        <p className="text-gray-700 mb-4">
          In classical computing, a <strong>bit</strong> is the fundamental unit of information.
          It can be either <code className="bg-gray-100 px-2 py-1 rounded">0</code> or <code className="bg-gray-100 px-2 py-1 rounded">1</code>. Nothing in between.
        </p>
        <p className="text-gray-700">
          Think of a light switch: it's either OFF (0) or ON (1). Simple and deterministic.
        </p>
      </section>

      <VisualPlaceholder title="Classical Bit Visualization" description="ON/OFF switch representation" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enter the Qubit</h2>
        <p className="text-gray-700 mb-4">
          A <strong>qubit</strong> (quantum bit) is the quantum version of a classical bit.
          Like a classical bit, when you measure it, you get either 0 or 1.
        </p>
        <p className="text-gray-700 mb-4">
          But here's the key difference: <em>before</em> measurement, a qubit can exist in a
          <strong> superposition</strong> of both states simultaneously.
        </p>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6">
          <p className="text-cyan-800 font-medium">
            Think of it like a coin spinning in the air — it's neither heads nor tails until it lands.
          </p>
        </div>
      </section>

      <VisualPlaceholder title="Qubit State Visualization" description="Bloch sphere showing qubit state" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Math (Simplified)</h2>
        <p className="text-gray-700 mb-4">
          We represent a qubit's state as:
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center my-4">
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>
        <p className="text-gray-700 mb-4">
          Where:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li><code className="bg-gray-100 px-1 rounded">|0⟩</code> and <code className="bg-gray-100 px-1 rounded">|1⟩</code> are the two basis states</li>
          <li><code className="bg-gray-100 px-1 rounded">α</code> and <code className="bg-gray-100 px-1 rounded">β</code> are complex numbers called <strong>amplitudes</strong></li>
          <li>|α|² is the probability of measuring 0</li>
          <li>|β|² is the probability of measuring 1</li>
          <li>|α|² + |β|² = 1 (probabilities must sum to 1)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Intuitions</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Measurement Collapses State</h3>
            <p className="text-gray-600">
              When you measure a qubit, it "collapses" to either 0 or 1. The superposition is destroyed.
              You can't peek without changing the system.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Probabilistic, Not Random</h3>
            <p className="text-gray-600">
              The outcomes are probabilistic but governed by precise mathematical rules.
              We can engineer these probabilities.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">More Than Randomness</h3>
            <p className="text-gray-600">
              A qubit isn't just a random bit. The amplitudes can interfere with each other,
              which is the source of quantum computational power.
            </p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
