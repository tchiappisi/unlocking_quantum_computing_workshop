import PageNavigation from "@/components/PageNavigation";

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">Continue Learning</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>Resources</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Official Documentation</h2>
        <div className="space-y-3">
          <a href="https://qiskit.org/documentation/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00FFF0]/50 transition-colors">
            <h3 className="font-bold text-gray-100">Qiskit Documentation</h3>
            <p className="text-gray-400 text-sm">Official docs, API reference, and tutorials</p>
          </a>
          <a href="https://learning.quantum.ibm.com/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00FFF0]/50 transition-colors">
            <h3 className="font-bold text-gray-100">IBM Quantum Learning</h3>
            <p className="text-gray-400 text-sm">Free courses from beginner to advanced</p>
          </a>
          <a href="https://quantum-computing.ibm.com/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00FFF0]/50 transition-colors">
            <h3 className="font-bold text-gray-100">IBM Quantum Platform</h3>
            <p className="text-gray-400 text-sm">Run on real quantum hardware (free tier available)</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Free Courses</h2>
        <div className="space-y-3">
          <a href="https://www.edx.org/learn/quantum-computing" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-cyan-950/50 rounded-lg border border-cyan-700/50 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-cyan-300">edX Quantum Computing Courses</h3>
            <p className="text-cyan-400/80 text-sm">Various university courses, many free to audit</p>
          </a>
          <a href="https://www.coursera.org/search?query=quantum%20computing" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-cyan-950/50 rounded-lg border border-cyan-700/50 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-cyan-300">Coursera Quantum Computing</h3>
            <p className="text-cyan-400/80 text-sm">Courses from top universities</p>
          </a>
          <a href="https://brilliant.org/courses/quantum-computing/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-cyan-950/50 rounded-lg border border-cyan-700/50 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-cyan-300">Brilliant - Quantum Computing</h3>
            <p className="text-cyan-400/80 text-sm">Interactive, visual approach to learning</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Books</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">"Quantum Computing: An Applied Approach"</h3>
            <p className="text-gray-400 text-sm">by Jack Hidary — Practical, code-focused</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">"Programming Quantum Computers"</h3>
            <p className="text-gray-400 text-sm">by Eric Johnston et al. — Hands-on approach</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">"Quantum Computation and Quantum Information"</h3>
            <p className="text-gray-400 text-sm">by Nielsen & Chuang — The classic textbook (more theoretical)</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Communities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://qiskit.slack.com" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-[#8A2BE2]/10 rounded-lg border border-[#8A2BE2]/30 hover:border-[#8A2BE2] transition-colors">
            <h3 className="font-bold text-[#8A2BE2]">Qiskit Slack</h3>
            <p className="text-gray-400 text-sm">Active community of practitioners</p>
          </a>
          <a href="https://quantumcomputing.stackexchange.com" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-[#8A2BE2]/10 rounded-lg border border-[#8A2BE2]/30 hover:border-[#8A2BE2] transition-colors">
            <h3 className="font-bold text-[#8A2BE2]">Quantum Computing Stack Exchange</h3>
            <p className="text-gray-400 text-sm">Q&A forum for all skill levels</p>
          </a>
          <a href="https://www.reddit.com/r/QuantumComputing/" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-[#8A2BE2]/10 rounded-lg border border-[#8A2BE2]/30 hover:border-[#8A2BE2] transition-colors">
            <h3 className="font-bold text-[#8A2BE2]">r/QuantumComputing</h3>
            <p className="text-gray-400 text-sm">Reddit community for news and discussion</p>
          </a>
          <a href="https://discord.gg/qiskit" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-[#8A2BE2]/10 rounded-lg border border-[#8A2BE2]/30 hover:border-[#8A2BE2] transition-colors">
            <h3 className="font-bold text-[#8A2BE2]">Qiskit Discord</h3>
            <p className="text-gray-400 text-sm">Real-time chat and help</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Other Frameworks</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">Cirq (Google)</h3>
            <p className="text-gray-400 text-sm">Python framework optimized for Google's quantum hardware</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">PennyLane (Xanadu)</h3>
            <p className="text-gray-400 text-sm">Focused on quantum machine learning</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100">Amazon Braket</h3>
            <p className="text-gray-400 text-sm">AWS quantum computing service</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#00FFF0]/10 to-[#8A2BE2]/10 border border-[#00FFF0]/30 p-6 rounded-xl mb-10">
        <h2 className="text-xl font-bold text-[#00FFF0] mb-3" style={{ fontFamily: 'Space Grotesk, monospace' }}>Next Steps</h2>
        <ol className="space-y-2 text-gray-300">
          <li><span className="text-[#00FFF0]">1.</span> Review the notebooks from today's workshop</li>
          <li><span className="text-[#00FFF0]">2.</span> Sign up for an IBM Quantum account to try real hardware</li>
          <li><span className="text-[#00FFF0]">3.</span> Pick one resource above and commit to 30 minutes/week</li>
          <li><span className="text-[#00FFF0]">4.</span> Join a community to ask questions and stay motivated</li>
        </ol>
      </section>

      <PageNavigation />
    </div>
  );
}
