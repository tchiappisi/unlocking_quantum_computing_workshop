import PageNavigation from "@/components/PageNavigation";

export default function CheatsheetPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">Quick Reference</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>Cheatsheet</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Core Concepts</h2>
        <div className="grid gap-3">
          <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-[#00FFF0]">
            <h3 className="font-bold text-gray-100">Qubit</h3>
            <p className="text-gray-400 text-sm">Quantum bit. Can be |0⟩, |1⟩, or superposition of both.</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-[#00FFF0]">
            <h3 className="font-bold text-gray-100">Superposition</h3>
            <p className="text-gray-400 text-sm">Qubit in multiple states simultaneously: α|0⟩ + β|1⟩</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-[#00FFF0]">
            <h3 className="font-bold text-gray-100">Entanglement</h3>
            <p className="text-gray-400 text-sm">Qubits correlated so measuring one affects the other instantly.</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-[#00FFF0]">
            <h3 className="font-bold text-gray-100">Measurement</h3>
            <p className="text-gray-400 text-sm">Collapses superposition to |0⟩ or |1⟩. Probabilistic outcome.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Common Gates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="p-3 border border-gray-700 font-bold text-[#00FFF0]">Gate</th>
                <th className="p-3 border border-gray-700 font-bold text-[#00FFF0]">Qiskit</th>
                <th className="p-3 border border-gray-700 font-bold text-[#00FFF0]">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-700 text-gray-300">X (NOT)</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.x(0)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Flip |0⟩ ↔ |1⟩</td>
              </tr>
              <tr className="bg-gray-800/30">
                <td className="p-3 border border-gray-700 text-gray-300">H (Hadamard)</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.h(0)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Create superposition</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 text-gray-300">CNOT</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.cx(0, 1)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Flip target if control=|1⟩</td>
              </tr>
              <tr className="bg-gray-800/30">
                <td className="p-3 border border-gray-700 text-gray-300">Z</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.z(0)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Phase flip (|1⟩ → -|1⟩)</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 text-gray-300">RY(θ)</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.ry(θ, 0)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Rotate around Y-axis</td>
              </tr>
              <tr className="bg-gray-800/30">
                <td className="p-3 border border-gray-700 text-gray-300">Measure</td>
                <td className="p-3 border border-gray-700 font-mono text-[#8A2BE2]">qc.measure(0, 0)</td>
                <td className="p-3 border border-gray-700 text-gray-300">Collapse and read qubit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Qiskit Quick Reference</h2>
        <div className="bg-gray-900 text-[#00FFF0] p-4 rounded-lg font-mono text-sm overflow-x-auto border border-[#00FFF0]/30">
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
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Key Formulas</h2>
        <div className="grid gap-3">
          <div className="p-4 bg-[#00FFF0]/10 rounded-lg border border-[#00FFF0]/30">
            <h3 className="font-bold text-[#00FFF0] mb-1">Qubit State</h3>
            <p className="font-mono text-[#E6E6E6]">|ψ⟩ = α|0⟩ + β|1⟩ where |α|² + |β|² = 1</p>
          </div>
          <div className="p-4 bg-[#00FFF0]/10 rounded-lg border border-[#00FFF0]/30">
            <h3 className="font-bold text-[#00FFF0] mb-1">Measurement Probability</h3>
            <p className="font-mono text-[#E6E6E6]">P(0) = |α|²,  P(1) = |β|²</p>
          </div>
          <div className="p-4 bg-[#00FFF0]/10 rounded-lg border border-[#00FFF0]/30">
            <h3 className="font-bold text-[#00FFF0] mb-1">Bell State</h3>
            <p className="font-mono text-[#E6E6E6]">|Φ+⟩ = (|00⟩ + |11⟩) / √2</p>
          </div>
          <div className="p-4 bg-[#00FFF0]/10 rounded-lg border border-[#00FFF0]/30">
            <h3 className="font-bold text-[#00FFF0] mb-1">Grover Iterations</h3>
            <p className="font-mono text-[#E6E6E6]">Optimal iterations ≈ (π/4)√N</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Common Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Create Superposition</h3>
            <code className="text-sm text-[#8A2BE2]">qc.h(0)</code>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Create Bell State</h3>
            <code className="text-sm text-[#8A2BE2]">qc.h(0); qc.cx(0,1)</code>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Flip a Qubit</h3>
            <code className="text-sm text-[#8A2BE2]">qc.x(0)</code>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Measure All</h3>
            <code className="text-sm text-[#8A2BE2]">qc.measure_all()</code>
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
