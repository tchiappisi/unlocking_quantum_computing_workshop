import PageNavigation from "@/components/PageNavigation";

export default function CheatsheetPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <p className="text-cyan-600 font-medium mb-2">Quick Reference</p>
        <h1 className="text-4xl font-bold text-gray-900">Cheatsheet</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Concepts</h2>
        <div className="grid gap-3">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
            <h3 className="font-bold text-gray-900">Qubit</h3>
            <p className="text-gray-600 text-sm">Quantum bit. Can be |0⟩, |1⟩, or superposition of both.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
            <h3 className="font-bold text-gray-900">Superposition</h3>
            <p className="text-gray-600 text-sm">Qubit in multiple states simultaneously: α|0⟩ + β|1⟩</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
            <h3 className="font-bold text-gray-900">Entanglement</h3>
            <p className="text-gray-600 text-sm">Qubits correlated so measuring one affects the other instantly.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
            <h3 className="font-bold text-gray-900">Measurement</h3>
            <p className="text-gray-600 text-sm">Collapses superposition to |0⟩ or |1⟩. Probabilistic outcome.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Gates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border font-bold">Gate</th>
                <th className="p-3 border font-bold">Qiskit</th>
                <th className="p-3 border font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">X (NOT)</td>
                <td className="p-3 border font-mono text-cyan-700">qc.x(0)</td>
                <td className="p-3 border">Flip |0⟩ ↔ |1⟩</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border">H (Hadamard)</td>
                <td className="p-3 border font-mono text-cyan-700">qc.h(0)</td>
                <td className="p-3 border">Create superposition</td>
              </tr>
              <tr>
                <td className="p-3 border">CNOT</td>
                <td className="p-3 border font-mono text-cyan-700">qc.cx(0, 1)</td>
                <td className="p-3 border">Flip target if control=|1⟩</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border">Z</td>
                <td className="p-3 border font-mono text-cyan-700">qc.z(0)</td>
                <td className="p-3 border">Phase flip (|1⟩ → -|1⟩)</td>
              </tr>
              <tr>
                <td className="p-3 border">RY(θ)</td>
                <td className="p-3 border font-mono text-cyan-700">qc.ry(θ, 0)</td>
                <td className="p-3 border">Rotate around Y-axis</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border">Measure</td>
                <td className="p-3 border font-mono text-cyan-700">qc.measure(0, 0)</td>
                <td className="p-3 border">Collapse and read qubit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qiskit Quick Reference</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`# Setup
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# Create circuit with 2 qubits, 2 classical bits
qc = QuantumCircuit(2, 2)

# Add gates
qc.h(0)           # Hadamard on qubit 0
qc.cx(0, 1)       # CNOT: control=0, target=1
qc.measure([0,1], [0,1])

# Draw the circuit
qc.draw('mpl')

# Run simulation
simulator = AerSimulator()
job = simulator.run(qc, shots=1000)
result = job.result()
counts = result.get_counts()

# Plot results
plot_histogram(counts)`}</pre>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Formulas</h2>
        <div className="grid gap-3">
          <div className="p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-bold text-cyan-900 mb-1">Qubit State</h3>
            <p className="font-mono text-cyan-800">|ψ⟩ = α|0⟩ + β|1⟩ where |α|² + |β|² = 1</p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-bold text-cyan-900 mb-1">Measurement Probability</h3>
            <p className="font-mono text-cyan-800">P(0) = |α|²,  P(1) = |β|²</p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-bold text-cyan-900 mb-1">Bell State</h3>
            <p className="font-mono text-cyan-800">|Φ+⟩ = (|00⟩ + |11⟩) / √2</p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-bold text-cyan-900 mb-1">Grover Iterations</h3>
            <p className="font-mono text-cyan-800">Optimal iterations ≈ (π/4)√N</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Create Superposition</h3>
            <code className="text-sm text-cyan-700">qc.h(0)</code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Create Bell State</h3>
            <code className="text-sm text-cyan-700">qc.h(0); qc.cx(0,1)</code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Flip a Qubit</h3>
            <code className="text-sm text-cyan-700">qc.x(0)</code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Measure All</h3>
            <code className="text-sm text-cyan-700">qc.measure_all()</code>
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
