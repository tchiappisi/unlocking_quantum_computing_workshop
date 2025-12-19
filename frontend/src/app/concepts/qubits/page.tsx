import ConceptPage from "@/components/ConceptPage";
import QubitDemo from "@/components/QubitDemo";
import ClassicalBitDemo from "@/components/ClassicalBitDemo";

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
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Classical Bit</h2>
        <p className="text-[#E6E6E6] mb-4">
          In classical computing, a <strong className="text-[#00FFF0]">bit</strong> is the fundamental unit of information.
          It can be either <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-2 py-1 rounded">0</code> or <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-2 py-1 rounded">1</code>. Nothing in between.
        </p>
        <p className="text-[#E6E6E6]">
          Think of a light switch: it's either OFF (0) or ON (1). Simple and deterministic.
        </p>
      </section>

      <ClassicalBitDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Enter the Qubit</h2>
        <p className="text-[#E6E6E6] mb-4">
          A <strong className="text-[#00FFF0]">qubit</strong> (quantum bit) is the quantum version of a classical bit.
          Like a classical bit, when you measure it, you get either 0 or 1.
        </p>
        <p className="text-[#E6E6E6] mb-4">
          But here's the key difference: <em>before</em> measurement, a qubit can exist in a
          <strong className="text-[#00FFF0]"> superposition</strong> of both states simultaneously.
        </p>
        <div className="bg-[#00FFF0]/10 border-l-4 border-[#00FFF0] p-4 my-6">
          <p className="text-[#00FFF0] font-medium">
            Think of it like a coin spinning in the air — it's neither heads nor tails until it lands.
          </p>
        </div>
      </section>

      <QubitDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Math (Simplified)</h2>
        <p className="text-[#E6E6E6] mb-4">
          We represent a qubit's state as:
        </p>
        <div className="bg-gray-900 text-[#00FFF0] p-4 rounded-lg font-mono text-center my-4 border border-[#00FFF0]/30">
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>
        <p className="text-[#E6E6E6] mb-4">
          Where:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#E6E6E6] ml-4">
          <li><code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">|0⟩</code> and <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">|1⟩</code> are the two basis states</li>
          <li><code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">α</code> and <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">β</code> are complex numbers called <strong className="text-[#00FFF0]">amplitudes</strong></li>
          <li>|α|² is the probability of measuring 0</li>
          <li>|β|² is the probability of measuring 1</li>
          <li>|α|² + |β|² = 1 (probabilities must sum to 1)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Key Intuitions</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Measurement Collapses State</h3>
            <p className="text-gray-400">
              When you measure a qubit, it "collapses" to either 0 or 1. The superposition is destroyed.
              You can't peek without changing the system.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Probabilistic, Not Random</h3>
            <p className="text-gray-400">
              The outcomes are probabilistic but governed by precise mathematical rules.
              We can engineer these probabilities.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">More Than Randomness</h3>
            <p className="text-gray-400">
              A qubit isn't just a random bit. The amplitudes can interfere with each other,
              which is the source of quantum computational power.
            </p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
