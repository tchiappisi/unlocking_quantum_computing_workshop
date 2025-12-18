import ConceptPage from "@/components/ConceptPage";
import VisualPlaceholder from "@/components/VisualPlaceholder";

export default function GroverPage() {
  return (
    <ConceptPage
      title="Grover's Algorithm"
      subtitle="Quantum Search"
      notebookName="05_grover.ipynb"
      timeEstimate="20 minutes"
      reflectionQuestions={[
        "Why does Grover's algorithm provide a quadratic speedup instead of an exponential one?",
        "In what real-world scenarios might a quadratic speedup be practically significant?",
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Search Problem</h2>
        <p className="text-gray-700 mb-4">
          Imagine you have an unsorted database of N items and need to find one specific item
          that satisfies some condition. Classically, you might need to check all N items in
          the worst case.
        </p>
        <p className="text-gray-700">
          <strong>Grover's algorithm</strong> finds the answer in approximately √N steps — a
          quadratic speedup. For 1 million items, that's 1,000 steps instead of 1,000,000.
        </p>
      </section>

      <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
        <h3 className="font-bold text-green-800 mb-2">The Speedup</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-gray-600">O(N)</div>
            <div className="text-sm text-gray-500">Classical</div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-green-600">O(√N)</div>
            <div className="text-sm text-gray-500">Grover's</div>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works (Intuition)</h2>
        <p className="text-gray-700 mb-4">
          Grover's algorithm uses two key operations repeated approximately √N times:
        </p>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">1. Oracle (Mark)</h3>
            <p className="text-gray-600">
              A "black box" that recognizes the correct answer and flips its amplitude's sign.
              Think of it as putting a negative flag on the solution.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">2. Diffusion (Amplify)</h3>
            <p className="text-gray-600">
              Inverts all amplitudes about their average. This amplifies the marked (negative)
              amplitude while reducing the others.
            </p>
          </div>
        </div>
      </section>

      <VisualPlaceholder title="Amplitude Amplification" description="Bar chart showing amplitude changes per iteration" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step by Step</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">1</span>
            <div className="text-gray-700">
              <strong>Initialize</strong> — Put all qubits in superposition (equal probability for all states)
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">2</span>
            <div className="text-gray-700">
              <strong>Apply Oracle</strong> — Mark the solution by flipping its phase
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">3</span>
            <div className="text-gray-700">
              <strong>Apply Diffusion</strong> — Amplify the marked state's amplitude
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">4</span>
            <div className="text-gray-700">
              <strong>Repeat</strong> — Go back to step 2, approximately √N times
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">5</span>
            <div className="text-gray-700">
              <strong>Measure</strong> — The correct answer now has high probability
            </div>
          </li>
        </ol>
      </section>

      <VisualPlaceholder title="Grover Circuit" description="Full circuit with oracle and diffusion operators" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Magic of Interference</h2>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6">
          <p className="text-cyan-800">
            Grover's algorithm is a beautiful example of quantum interference. The oracle creates
            a phase difference, and the diffusion operator causes constructive interference for
            the solution and destructive interference for everything else.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>You need to know how many solutions exist (or use variants)</li>
          <li>Too many iterations will "overshoot" and reduce success probability</li>
          <li>The oracle itself might be expensive to implement</li>
          <li>Quadratic speedup is significant but not exponential</li>
        </ul>
      </section>
    </ConceptPage>
  );
}
