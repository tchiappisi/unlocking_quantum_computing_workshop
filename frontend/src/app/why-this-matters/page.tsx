import PageNavigation from "@/components/PageNavigation";

export default function WhyThisMattersPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-cyan-600 font-medium mb-2">The Bigger Picture</p>
        <h1 className="text-4xl font-bold text-gray-900">Why This Matters</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Quantum Revolution</h2>
        <p className="text-gray-700 mb-4">
          Quantum computing isn't just a faster computer — it's a fundamentally different
          way of processing information that can solve problems classical computers never will.
        </p>
        <p className="text-gray-700">
          You've now experienced the basics of this paradigm shift firsthand.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Applications</h2>
        <div className="grid gap-4">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">Drug Discovery</h3>
            <p className="text-blue-800">
              Simulating molecular interactions to design new medicines. A problem that would
              take classical computers millions of years could take quantum computers hours.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">Cryptography</h3>
            <p className="text-green-800">
              Shor's algorithm can break current encryption. But quantum key distribution
              offers provably secure communication.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">Optimization</h3>
            <p className="text-purple-800">
              Supply chains, financial portfolios, traffic routing — problems where finding
              the best solution among billions of possibilities matters.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-2">Machine Learning</h3>
            <p className="text-orange-800">
              Quantum algorithms may accelerate training of ML models and enable new
              types of neural networks.
            </p>
          </div>
          <div className="p-6 bg-cyan-50 rounded-xl border border-cyan-200">
            <h3 className="font-bold text-cyan-900 mb-2">Materials Science</h3>
            <p className="text-cyan-800">
              Designing better batteries, superconductors, and catalysts by simulating
              quantum mechanical systems naturally.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Current State</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
          <h3 className="font-bold text-yellow-800 mb-3">Where Are We Now?</h3>
          <ul className="space-y-2 text-yellow-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>NISQ Era:</strong> Noisy Intermediate-Scale Quantum devices (50-1000 qubits)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Error rates:</strong> Still too high for complex algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Quantum advantage:</strong> Demonstrated for specific problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Timeline:</strong> Fault-tolerant quantum computing estimated 5-15 years away</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Learn Now?</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">First-Mover Advantage</h3>
            <p className="text-gray-600">
              The quantum workforce is small. Learning now positions you ahead of the curve.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Transferable Skills</h3>
            <p className="text-gray-600">
              Linear algebra, probability, and algorithmic thinking are valuable everywhere.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Shape the Future</h3>
            <p className="text-gray-600">
              The field is young enough that individuals can make significant contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white p-8 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">Your Quantum Journey</h2>
        <p className="text-gray-300 mb-4">
          Today you learned the fundamentals. But this is just the beginning.
        </p>
        <p className="text-gray-300">
          The quantum computing field needs people who understand both the physics and the
          applications — people like you who have taken the time to learn how it actually works.
        </p>
      </section>

      <PageNavigation />
    </div>
  );
}
