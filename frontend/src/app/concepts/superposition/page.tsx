import ConceptPage from "@/components/ConceptPage";
import CoinSuperpositionDemo from "@/components/CoinSuperpositionDemo";
import HadamardGateDemo from "@/components/HadamardGateDemo";

export default function SuperpositionPage() {
  return (
    <ConceptPage
      title="Superposition"
      subtitle="Being in Multiple States"
      notebookName="02_superposition.ipynb"
      timeEstimate="10-15 minutes"
      reflectionQuestions={[
        "Why can't we directly observe a qubit in superposition?",
        "How might superposition enable solving problems faster than classical computers?",
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Core Idea</h2>
        <p className="text-[#E6E6E6] mb-4">
          <strong className="text-[#00FFF0]">Superposition</strong> is the ability of a quantum system to exist in multiple
          states at the same time — until it is measured.
        </p>
        <p className="text-[#E6E6E6] mb-4">
          This is perhaps the most counterintuitive aspect of quantum mechanics. In our everyday
          experience, things have definite states: a door is open or closed, a coin shows heads
          or tails.
        </p>
        <div className="bg-[#00FFF0]/10 border-l-4 border-[#00FFF0] p-4 my-6">
          <p className="text-[#00FFF0] font-medium">
            But a qubit in superposition is genuinely in both states at once — not "we don't know
            which one" but "it's actually both."
          </p>
        </div>
      </section>

      <CoinSuperpositionDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Hadamard Gate</h2>
        <p className="text-[#E6E6E6] mb-4">
          To put a qubit into superposition, we use the <strong className="text-[#00FFF0]">Hadamard gate</strong> (H gate).
        </p>
        <p className="text-[#E6E6E6] mb-4">
          Starting with a qubit in state |0⟩, applying the Hadamard gate creates an equal
          superposition:
        </p>
        <div className="bg-gray-900 text-[#00FFF0] p-4 rounded-lg font-mono text-center my-4 border border-[#00FFF0]/30">
          H|0⟩ = (|0⟩ + |1⟩) / √2
        </div>
        <p className="text-[#E6E6E6]">
          This means: 50% chance of measuring 0, 50% chance of measuring 1.
        </p>
      </section>

      <HadamardGateDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Why Does This Matter?</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Parallel Exploration</h3>
            <p className="text-gray-400">
              With n qubits in superposition, you can represent 2ⁿ states simultaneously.
              10 qubits = 1,024 states. 50 qubits = over 1 quadrillion states.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Interference</h3>
            <p className="text-gray-400">
              The amplitudes in superposition can interfere constructively or destructively.
              This is the key to quantum algorithms: amplify correct answers, cancel wrong ones.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Not Just Parallelism</h3>
            <p className="text-gray-400">
              Superposition alone isn't enough. You can't just "read out" all 2ⁿ values.
              The art of quantum computing is designing algorithms that extract useful answers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Common Misconceptions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-amber-950/50 rounded-lg border border-amber-700/50">
            <p className="text-amber-300">
              <strong>❌ Myth:</strong> "Superposition means the qubit is randomly 0 or 1, we just don't know which."
            </p>
            <p className="text-amber-200 mt-2">
              <strong>✓ Reality:</strong> The qubit is genuinely in both states. This is a physical reality, not ignorance.
            </p>
          </div>
          <div className="p-4 bg-amber-950/50 rounded-lg border border-amber-700/50">
            <p className="text-amber-300">
              <strong>❌ Myth:</strong> "Quantum computers try all solutions at once and pick the right one."
            </p>
            <p className="text-amber-200 mt-2">
              <strong>✓ Reality:</strong> You only get one answer per measurement. The skill is in making the right answer most probable.
            </p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
