import ConceptPage from "@/components/ConceptPage";
import VisualPlaceholder from "@/components/VisualPlaceholder";

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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Idea</h2>
        <p className="text-gray-700 mb-4">
          <strong>Superposition</strong> is the ability of a quantum system to exist in multiple
          states at the same time — until it is measured.
        </p>
        <p className="text-gray-700 mb-4">
          This is perhaps the most counterintuitive aspect of quantum mechanics. In our everyday
          experience, things have definite states: a door is open or closed, a coin shows heads
          or tails.
        </p>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6">
          <p className="text-cyan-800 font-medium">
            But a qubit in superposition is genuinely in both states at once — not "we don't know
            which one" but "it's actually both."
          </p>
        </div>
      </section>

      <VisualPlaceholder title="Superposition Visualization" description="Coin spinning vs. coin landed" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hadamard Gate</h2>
        <p className="text-gray-700 mb-4">
          To put a qubit into superposition, we use the <strong>Hadamard gate</strong> (H gate).
        </p>
        <p className="text-gray-700 mb-4">
          Starting with a qubit in state |0⟩, applying the Hadamard gate creates an equal
          superposition:
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center my-4">
          H|0⟩ = (|0⟩ + |1⟩) / √2
        </div>
        <p className="text-gray-700">
          This means: 50% chance of measuring 0, 50% chance of measuring 1.
        </p>
      </section>

      <VisualPlaceholder title="Hadamard Gate Circuit" description="Single qubit with H gate" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does This Matter?</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Parallel Exploration</h3>
            <p className="text-gray-600">
              With n qubits in superposition, you can represent 2ⁿ states simultaneously.
              10 qubits = 1,024 states. 50 qubits = over 1 quadrillion states.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Interference</h3>
            <p className="text-gray-600">
              The amplitudes in superposition can interfere constructively or destructively.
              This is the key to quantum algorithms: amplify correct answers, cancel wrong ones.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Not Just Parallelism</h3>
            <p className="text-gray-600">
              Superposition alone isn't enough. You can't just "read out" all 2ⁿ values.
              The art of quantum computing is designing algorithms that extract useful answers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800">
              <strong>❌ Myth:</strong> "Superposition means the qubit is randomly 0 or 1, we just don't know which."
            </p>
            <p className="text-red-700 mt-2">
              <strong>✓ Reality:</strong> The qubit is genuinely in both states. This is a physical reality, not ignorance.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800">
              <strong>❌ Myth:</strong> "Quantum computers try all solutions at once and pick the right one."
            </p>
            <p className="text-red-700 mt-2">
              <strong>✓ Reality:</strong> You only get one answer per measurement. The skill is in making the right answer most probable.
            </p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
