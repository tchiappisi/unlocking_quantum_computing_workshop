import PageNavigation from "@/components/PageNavigation";

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-cyan-600 font-medium mb-2">Continue Learning</p>
        <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Documentation</h2>
        <div className="space-y-3">
          <a href="https://qiskit.org/documentation/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-colors">
            <h3 className="font-bold text-gray-900">Qiskit Documentation</h3>
            <p className="text-gray-600 text-sm">Official docs, API reference, and tutorials</p>
          </a>
          <a href="https://learning.quantum.ibm.com/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-colors">
            <h3 className="font-bold text-gray-900">IBM Quantum Learning</h3>
            <p className="text-gray-600 text-sm">Free courses from beginner to advanced</p>
          </a>
          <a href="https://quantum-computing.ibm.com/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-colors">
            <h3 className="font-bold text-gray-900">IBM Quantum Platform</h3>
            <p className="text-gray-600 text-sm">Run on real quantum hardware (free tier available)</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Courses</h2>
        <div className="space-y-3">
          <a href="https://www.edx.org/learn/quantum-computing" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
            <h3 className="font-bold text-blue-900">edX Quantum Computing Courses</h3>
            <p className="text-blue-700 text-sm">Various university courses, many free to audit</p>
          </a>
          <a href="https://www.coursera.org/search?query=quantum%20computing" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
            <h3 className="font-bold text-blue-900">Coursera Quantum Computing</h3>
            <p className="text-blue-700 text-sm">Courses from top universities</p>
          </a>
          <a href="https://brilliant.org/courses/quantum-computing/" target="_blank" rel="noopener noreferrer"
             className="block p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
            <h3 className="font-bold text-blue-900">Brilliant - Quantum Computing</h3>
            <p className="text-blue-700 text-sm">Interactive, visual approach to learning</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Books</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">"Quantum Computing: An Applied Approach"</h3>
            <p className="text-gray-600 text-sm">by Jack Hidary — Practical, code-focused</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">"Programming Quantum Computers"</h3>
            <p className="text-gray-600 text-sm">by Eric Johnston et al. — Hands-on approach</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">"Quantum Computation and Quantum Information"</h3>
            <p className="text-gray-600 text-sm">by Nielsen & Chuang — The classic textbook (more theoretical)</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Communities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://qiskit.slack.com" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
            <h3 className="font-bold text-purple-900">Qiskit Slack</h3>
            <p className="text-purple-700 text-sm">Active community of practitioners</p>
          </a>
          <a href="https://quantumcomputing.stackexchange.com" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
            <h3 className="font-bold text-purple-900">Quantum Computing Stack Exchange</h3>
            <p className="text-purple-700 text-sm">Q&A forum for all skill levels</p>
          </a>
          <a href="https://www.reddit.com/r/QuantumComputing/" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
            <h3 className="font-bold text-purple-900">r/QuantumComputing</h3>
            <p className="text-purple-700 text-sm">Reddit community for news and discussion</p>
          </a>
          <a href="https://discord.gg/qiskit" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
            <h3 className="font-bold text-purple-900">Qiskit Discord</h3>
            <p className="text-purple-700 text-sm">Real-time chat and help</p>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Frameworks</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Cirq (Google)</h3>
            <p className="text-gray-600 text-sm">Python framework optimized for Google's quantum hardware</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">PennyLane (Xanadu)</h3>
            <p className="text-gray-600 text-sm">Focused on quantum machine learning</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Amazon Braket</h3>
            <p className="text-gray-600 text-sm">AWS quantum computing service</p>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl mb-10">
        <h2 className="text-xl font-bold text-cyan-900 mb-3">Next Steps</h2>
        <ol className="space-y-2 text-cyan-800">
          <li>1. Review the notebooks from today's workshop</li>
          <li>2. Sign up for an IBM Quantum account to try real hardware</li>
          <li>3. Pick one resource above and commit to 30 minutes/week</li>
          <li>4. Join a community to ask questions and stay motivated</li>
        </ol>
      </section>

      <PageNavigation />
    </div>
  );
}
