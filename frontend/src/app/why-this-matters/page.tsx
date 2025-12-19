import PageNavigation from "@/components/PageNavigation";

export default function WhyThisMattersPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">The Bigger Picture</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>Why This Matters</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>The Quantum Revolution</h2>
        <p className="text-[#E6E6E6] mb-4">
          Quantum computing isn't just a faster computer — it's a fundamentally different
          way of processing information that can solve problems classical computers never will.
        </p>
        <p className="text-[#E6E6E6]">
          You've now experienced the basics of this paradigm shift firsthand.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-6" style={{ fontFamily: 'Space Grotesk, monospace' }}>Real-World Applications</h2>
        <div className="grid gap-4">
          <div className="p-6 bg-cyan-950/50 rounded-xl border border-cyan-700/50">
            <h3 className="font-bold text-cyan-400 mb-2">Drug Discovery</h3>
            <p className="text-cyan-200">
              Simulating molecular interactions to design new medicines. A problem that would
              take classical computers millions of years could take quantum computers hours.
            </p>
          </div>
          <div className="p-6 bg-emerald-950/50 rounded-xl border border-emerald-700/50">
            <h3 className="font-bold text-emerald-400 mb-2">Cryptography</h3>
            <p className="text-emerald-200">
              Shor's algorithm can break current encryption. But quantum key distribution
              offers provably secure communication.
            </p>
          </div>
          <div className="p-6 bg-[#8A2BE2]/10 rounded-xl border border-[#8A2BE2]/30">
            <h3 className="font-bold text-[#8A2BE2] mb-2">Optimization</h3>
            <p className="text-gray-300">
              Supply chains, financial portfolios, traffic routing — problems where finding
              the best solution among billions of possibilities matters.
            </p>
          </div>
          <div className="p-6 bg-amber-950/50 rounded-xl border border-amber-700/50">
            <h3 className="font-bold text-amber-400 mb-2">Machine Learning</h3>
            <p className="text-amber-200">
              Quantum algorithms may accelerate training of ML models and enable new
              types of neural networks.
            </p>
          </div>
          <div className="p-6 bg-[#00FFF0]/10 rounded-xl border border-[#00FFF0]/30">
            <h3 className="font-bold text-[#00FFF0] mb-2">Materials Science</h3>
            <p className="text-gray-300">
              Designing better batteries, superconductors, and catalysts by simulating
              quantum mechanical systems naturally.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>The Current State</h2>
        <div className="bg-amber-950/50 border border-amber-700/50 p-6 rounded-xl">
          <h3 className="font-bold text-amber-400 mb-3">Where Are We Now?</h3>
          <ul className="space-y-2 text-amber-200">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong className="text-amber-300">NISQ Era:</strong> Noisy Intermediate-Scale Quantum devices (50-1000 qubits)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong className="text-amber-300">Error rates:</strong> Still too high for complex algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong className="text-amber-300">Quantum advantage:</strong> Demonstrated for specific problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong className="text-amber-300">Timeline:</strong> Fault-tolerant quantum computing estimated 5-15 years away</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Why Learn Now?</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">First-Mover Advantage</h3>
            <p className="text-gray-400">
              The quantum workforce is small. Learning now positions you ahead of the curve.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Transferable Skills</h3>
            <p className="text-gray-400">
              Linear algebra, probability, and algorithmic thinking are valuable everywhere.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">Shape the Future</h3>
            <p className="text-gray-400">
              The field is young enough that individuals can make significant contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#00FFF0]/10 to-[#8A2BE2]/10 border border-[#00FFF0]/30 p-8 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Your Quantum Journey</h2>
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
