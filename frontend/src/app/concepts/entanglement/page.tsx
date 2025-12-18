import ConceptPage from "@/components/ConceptPage";
import VisualPlaceholder from "@/components/VisualPlaceholder";

export default function EntanglementPage() {
  return (
    <ConceptPage
      title="Entanglement"
      subtitle="Spooky Action at a Distance"
      notebookName="03_entanglement.ipynb"
      timeEstimate="10-15 minutes"
      reflectionQuestions={[
        "If entanglement doesn't allow faster-than-light communication, what makes it useful for computation?",
        "How does entanglement differ from classical correlation (like two coins that always match)?",
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Entanglement?</h2>
        <p className="text-gray-700 mb-4">
          <strong>Entanglement</strong> is a quantum phenomenon where two or more qubits become
          correlated in such a way that the state of one instantly affects the state of the other,
          regardless of distance.
        </p>
        <p className="text-gray-700 mb-4">
          Einstein famously called it "spooky action at a distance" because he found it troubling.
          But experiments have confirmed it's real.
        </p>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6">
          <p className="text-cyan-800 font-medium">
            When qubits are entangled, measuring one immediately determines the outcome of measuring the other — even if they're on opposite sides of the universe.
          </p>
        </div>
      </section>

      <VisualPlaceholder title="Entanglement Visualization" description="Two connected qubits" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating Entanglement</h2>
        <p className="text-gray-700 mb-4">
          The most common entangled state is the <strong>Bell state</strong>, created with a Hadamard
          gate followed by a CNOT (controlled-NOT) gate:
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-center my-4">
          |Φ+⟩ = (|00⟩ + |11⟩) / √2
        </div>
        <p className="text-gray-700 mb-4">
          This state says: "The two qubits will always have the same value when measured — both 0 or
          both 1 — but which one is random."
        </p>
      </section>

      <VisualPlaceholder title="Bell State Circuit" description="H gate → CNOT gate" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It's Not Magic</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">No Faster-Than-Light Communication</h3>
            <p className="text-gray-600">
              You can't use entanglement to send messages. The measurement outcomes are random;
              you can only verify the correlation after classical communication.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">It's About Correlation</h3>
            <p className="text-gray-600">
              The "spookiness" is that the correlation exists even though neither qubit had a
              predetermined value. It's decided at measurement time — for both, instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Entanglement Matters</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Exponential State Space</h3>
            <p className="text-green-700">
              Entangled qubits can represent correlations that would require exponentially many
              classical bits to describe. This is the source of quantum advantage.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Quantum Algorithms</h3>
            <p className="text-green-700">
              Every major quantum algorithm (Shor's, Grover's, etc.) relies on entanglement to
              create correlations that enable speedups.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Quantum Communication</h3>
            <p className="text-green-700">
              Entanglement enables quantum key distribution (QKD) for secure communication and
              quantum teleportation of quantum states.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The CNOT Gate</h2>
        <p className="text-gray-700 mb-4">
          The <strong>CNOT</strong> (Controlled-NOT) gate is the key to creating entanglement:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>It operates on two qubits: a <strong>control</strong> and a <strong>target</strong></li>
          <li>If control is |1⟩, it flips the target</li>
          <li>If control is |0⟩, it does nothing</li>
          <li>When the control is in superposition, it creates entanglement</li>
        </ul>
      </section>
    </ConceptPage>
  );
}
