import ConceptPage from "@/components/ConceptPage";
import AmplitudeAmplificationDemo from "@/components/AmplitudeAmplificationDemo";
import GroverSearchDemo from "@/components/GroverSearchDemo";

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
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Search Problem</h2>
        <p className="text-[#E6E6E6] mb-4">
          Imagine you have an unsorted database of N items and need to find one specific item
          that satisfies some condition. Classically, you might need to check all N items in
          the worst case.
        </p>
        <p className="text-[#E6E6E6]">
          <strong className="text-[#00FFF0]">Grover's algorithm</strong> finds the answer in approximately √N steps — a
          quadratic speedup. For 1 million items, that's 1,000 steps instead of 1,000,000.
        </p>
      </section>

      <div className="bg-emerald-950/50 border border-emerald-700/50 p-6 rounded-xl mb-8">
        <h3 className="font-bold text-emerald-400 mb-2">The Speedup</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-gray-400">O(N)</div>
            <div className="text-sm text-gray-500">Classical</div>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-emerald-600">
            <div className="text-2xl font-bold text-emerald-400">O(√N)</div>
            <div className="text-sm text-gray-400">Grover's</div>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">How It Works (Intuition)</h2>
        <p className="text-[#E6E6E6] mb-4">
          Grover's algorithm uses two key operations repeated approximately √N times:
        </p>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">1. Oracle (Mark)</h3>
            <p className="text-gray-400">
              A "black box" that recognizes the correct answer and flips its amplitude's sign.
              Think of it as putting a negative flag on the solution.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-gray-100 mb-2">2. Diffusion (Amplify)</h3>
            <p className="text-gray-400">
              Inverts all amplitudes about their average. This amplifies the marked (negative)
              amplitude while reducing the others.
            </p>
          </div>
        </div>
      </section>

      <AmplitudeAmplificationDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Step by Step</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">1</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Initialize</strong>&nbsp;— Put all qubits in superposition (equal probability for all states)
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">2</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Apply Oracle</strong>&nbsp;— Mark the solution by flipping its phase
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">3</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Apply Diffusion</strong>&nbsp;— Amplify the marked state's amplitude
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">4</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Repeat</strong>&nbsp;— Go back to step 2, approximately √N times
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-[#00FFF0] rounded-full flex items-center justify-center font-bold">5</span>
            <div className="text-[#E6E6E6] flex items-center">
              <strong className="text-[#00FFF0]">Measure</strong>&nbsp;— The correct answer now has high probability
            </div>
          </li>
        </ol>
      </section>

      <GroverSearchDemo />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">The Magic of Interference</h2>
        <div className="bg-[#00FFF0]/10 border-l-4 border-[#00FFF0] p-4 my-6">
          <p className="text-[#00FFF0]">
            Grover's algorithm is a beautiful example of quantum interference. The oracle creates
            a phase difference, and the diffusion operator causes constructive interference for
            the solution and destructive interference for everything else.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4">Limitations</h2>
        <ul className="list-disc list-inside space-y-2 text-[#E6E6E6] ml-4">
          <li>You need to know how many solutions exist (or use variants)</li>
          <li>Too many iterations will "overshoot" and reduce success probability</li>
          <li>The oracle itself might be expensive to implement</li>
          <li>Quadratic speedup is significant but not exponential</li>
        </ul>
      </section>
    </ConceptPage>
  );
}
