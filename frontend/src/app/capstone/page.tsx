import ColabButton from "@/components/ColabButton";
import PageNavigation from "@/components/PageNavigation";
import VisualPlaceholder from "@/components/VisualPlaceholder";

export default function CapstonePage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-cyan-600 font-medium mb-2">Final Project</p>
        <h1 className="text-4xl font-bold text-gray-900">Capstone</h1>
        <p className="text-xl text-gray-600 mt-2">Putting it all together</p>
      </header>

      <section className="mb-10">
        <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Mission</h2>
          <p className="text-gray-700 mb-4">
            Build a complete quantum circuit that demonstrates your understanding of:
          </p>
          <ul className="space-y-2">
            {["Qubit initialization", "Superposition with Hadamard gates", "Entanglement with CNOT gates", "Measurement and result analysis"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
        <p className="text-gray-700 mb-4">
          You will implement a <strong>quantum random number generator</strong> and a
          <strong> simple quantum classifier</strong> using the concepts you've learned.
        </p>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Part 1: True Random Numbers</h3>
            <p className="text-gray-600">
              Create a circuit that generates truly random bits using superposition.
              Unlike classical "random" numbers, quantum randomness is fundamentally unpredictable.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Part 2: Quantum Classifier</h3>
            <p className="text-gray-600">
              Build a simple circuit that classifies input patterns using entanglement
              and measurement.
            </p>
          </div>
        </div>
      </section>

      <VisualPlaceholder title="Capstone Circuit Preview" description="Your final circuit structure" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Criteria</h2>
        <div className="space-y-3">
          {[
            "Circuit runs without errors",
            "Random number generator produces uniform distribution",
            "You can explain what each gate does",
            "You can predict approximate output probabilities before running",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Capstone Exercise</h2>
        <p className="text-gray-600 mb-4">
          <span className="inline-flex items-center gap-1 text-sm bg-gray-200 px-2 py-1 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-45 minutes
          </span>
        </p>
        <ColabButton notebookName="capstone.ipynb" label="Start Capstone Project" />
      </section>

      <section className="mb-10 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
        <h2 className="text-xl font-bold text-cyan-900 mb-4">Reflection Questions</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
            <span className="text-cyan-800">What was the most surprising thing you learned about quantum computing today?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
            <span className="text-cyan-800">How would you explain quantum superposition to a non-technical friend?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
            <span className="text-cyan-800">What problem would you want to solve with a quantum computer?</span>
          </li>
        </ul>
      </section>

      <section className="bg-gray-900 text-white p-8 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-gray-300">
          If you've completed this capstone, you've built real quantum circuits, understood
          core quantum concepts, and gained hands-on experience with quantum simulation.
          That's a significant achievement!
        </p>
      </section>

      <PageNavigation />
    </div>
  );
}
