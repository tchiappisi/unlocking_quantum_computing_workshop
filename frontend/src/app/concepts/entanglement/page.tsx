import ConceptPage from "@/components/ConceptPage";
import BellStateDemo from "@/components/BellStateDemo";

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
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">What Is Entanglement?</h2>
        <p className="text-[#E6E6E6] mb-4">
          <strong className="text-[#00FFF0]">Entanglement</strong> is a quantum phenomenon where two or more qubits become
          correlated in such a way that the state of one instantly affects the state of the other,
          regardless of distance.
        </p>
        <p className="text-[#E6E6E6] mb-4">
          Einstein famously called it "spooky action at a distance" because he found it troubling.
          But experiments have confirmed it's real.
        </p>
        <div className="bg-[#00FFF0]/10 border-l-4 border-[#00FFF0] p-4 my-6">
          <p className="text-[#00FFF0] font-medium">
            When qubits are entangled, measuring one immediately determines the outcome of measuring the other — even if they're on opposite sides of the universe.
          </p>
        </div>
      </section>

      <BellStateDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Creating Entanglement</h2>
        <p className="text-[#E6E6E6] mb-4">
          The most common entangled state is the <strong className="text-[#00FFF0]">Bell state</strong>, created with a Hadamard
          gate followed by a CNOT (controlled-NOT) gate:
        </p>
        <div className="bg-gray-900 text-[#00FFF0] p-4 rounded-lg font-mono text-center my-4 border border-[#00FFF0]/30">
          |Φ+⟩ = (|00⟩ + |11⟩) / √2
        </div>
        <p className="text-[#E6E6E6] mb-4">
          This state says: "The two qubits will always have the same value when measured — both 0 or
          both 1 — but which one is random."
        </p>
      </section>

      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Why It's Not Magic</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">No Faster-Than-Light Communication</h3>
            <p className="text-gray-400">
              You can't use entanglement to send messages. The measurement outcomes are random;
              you can only verify the correlation after classical communication.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">It's About Correlation</h3>
            <p className="text-gray-400">
              The "spookiness" is that the correlation exists even though neither qubit had a
              predetermined value. It's decided at measurement time — for both, instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Why Entanglement Matters</h2>
        <div className="space-y-4">
          <div className="p-4 bg-emerald-950/50 rounded-lg border border-emerald-700/50">
            <h3 className="font-bold text-emerald-400 mb-2">Exponential State Space</h3>
            <p className="text-emerald-200">
              Entangled qubits can represent correlations that would require exponentially many
              classical bits to describe. This is the source of quantum advantage.
            </p>
          </div>
          <div className="p-4 bg-emerald-950/50 rounded-lg border border-emerald-700/50">
            <h3 className="font-bold text-emerald-400 mb-2">Quantum Algorithms</h3>
            <p className="text-emerald-200">
              Every major quantum algorithm (Shor's, Grover's, etc.) relies on entanglement to
              create correlations that enable speedups.
            </p>
          </div>
          <div className="p-4 bg-emerald-950/50 rounded-lg border border-emerald-700/50">
            <h3 className="font-bold text-emerald-400 mb-2">Quantum Communication</h3>
            <p className="text-emerald-200">
              Entanglement enables quantum key distribution (QKD) for secure communication and
              quantum teleportation of quantum states.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The CNOT Gate</h2>
        <p className="text-[#E6E6E6] mb-4">
          The <strong className="text-[#00FFF0]">CNOT</strong> (Controlled-NOT) gate is the key to creating entanglement:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#E6E6E6] ml-4">
          <li>It operates on two qubits: a <strong className="text-[#00FFF0]">control</strong> and a <strong className="text-[#00FFF0]">target</strong></li>
          <li>If control is |1⟩, it flips the target</li>
          <li>If control is |0⟩, it does nothing</li>
          <li>When the control is in superposition, it creates entanglement</li>
        </ul>
      </section>
    </ConceptPage>
  );
}
