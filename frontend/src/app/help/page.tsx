import PageNavigation from "@/components/PageNavigation";

export default function HelpPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">Getting Unstuck</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>Help</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Common Issues</h2>
        <div className="space-y-4">
          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 group">
            <summary className="font-bold text-gray-100 cursor-pointer">
              Colab says "Warning: This notebook was not authored by Google"
            </summary>
            <p className="mt-3 text-gray-400">
              This is normal. Click "Run anyway" to proceed. The notebooks are safe.
            </p>
          </details>

          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <summary className="font-bold text-gray-100 cursor-pointer">
              Qiskit installation is taking forever
            </summary>
            <p className="mt-3 text-gray-400">
              Initial installation can take 30-60 seconds. If it exceeds 2 minutes,
              try Runtime → Restart runtime and run the cell again.
            </p>
          </details>

          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <summary className="font-bold text-gray-100 cursor-pointer">
              "ModuleNotFoundError: No module named 'qiskit'"
            </summary>
            <p className="mt-3 text-gray-400">
              Run the first cell with <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">!pip install qiskit qiskit-aer</code> first.
              Make sure to wait for it to complete before running other cells.
            </p>
          </details>

          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <summary className="font-bold text-gray-100 cursor-pointer">
              Circuit diagram not displaying
            </summary>
            <p className="mt-3 text-gray-400">
              Try <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">qc.draw('mpl')</code> instead of just <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">qc.draw()</code>.
              Make sure matplotlib is imported.
            </p>
          </details>

          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <summary className="font-bold text-gray-100 cursor-pointer">
              "No counts in result"
            </summary>
            <p className="mt-3 text-gray-400">
              Make sure you have measurement operations in your circuit before running.
              Add <code className="bg-[#8A2BE2]/20 text-[#8A2BE2] px-1 rounded">qc.measure_all()</code> before the simulation.
            </p>
          </details>

          <details className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <summary className="font-bold text-gray-100 cursor-pointer">
              Results look wrong or unexpected
            </summary>
            <p className="mt-3 text-gray-400">
              Quantum results are probabilistic. Run with more shots (e.g., 10000) to get more stable statistics.
              Also verify your circuit logic with the circuit diagram.
            </p>
          </details>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Keyboard Shortcuts (Colab)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <tbody>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700 font-mono text-[#00FFF0]">Shift + Enter</td>
                <td className="p-3 border border-gray-700 text-gray-300">Run cell and move to next</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 font-mono text-[#00FFF0]">Ctrl + Enter</td>
                <td className="p-3 border border-gray-700 text-gray-300">Run cell and stay</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700 font-mono text-[#00FFF0]">Ctrl + M, B</td>
                <td className="p-3 border border-gray-700 text-gray-300">Insert cell below</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-700 font-mono text-[#00FFF0]">Ctrl + M, D</td>
                <td className="p-3 border border-gray-700 text-gray-300">Delete cell</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700 font-mono text-[#00FFF0]">Ctrl + /</td>
                <td className="p-3 border border-gray-700 text-gray-300">Comment/uncomment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#00FFF0] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Still Stuck?</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-amber-950/50 rounded-lg border border-amber-700/50">
            <h3 className="font-bold text-amber-400 mb-2">During the Workshop</h3>
            <p className="text-amber-200">
              Raise your hand! The instructor and TAs are here to help.
            </p>
          </div>
          <div className="p-4 bg-cyan-950/50 rounded-lg border border-cyan-700/50">
            <h3 className="font-bold text-cyan-400 mb-2">Check the Cheatsheet</h3>
            <p className="text-cyan-200">
              The <a href="/cheatsheet" className="underline hover:text-cyan-100">Cheatsheet</a> has common code snippets and patterns.
            </p>
          </div>
          <div className="p-4 bg-emerald-950/50 rounded-lg border border-emerald-700/50">
            <h3 className="font-bold text-emerald-400 mb-2">Ask Your Neighbor</h3>
            <p className="text-emerald-200">
              Pair programming and discussion often help clarify concepts.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 p-6 bg-gradient-to-br from-[#00FFF0]/10 to-[#8A2BE2]/10 border border-[#00FFF0]/30 rounded-xl">
        <h2 className="text-xl font-bold text-[#00FFF0] mb-3" style={{ fontFamily: 'Space Grotesk, monospace' }}>Quick Debug Checklist</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#00FFF0]">□</span>
            Did you run the installation cell first?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00FFF0]">□</span>
            Are all previous cells completed (no spinning)?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00FFF0]">□</span>
            Did you add measurements to your circuit?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00FFF0]">□</span>
            Is the qubit/bit indexing correct?
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#00FFF0]">□</span>
            Have you tried restarting the runtime?
          </li>
        </ul>
      </section>

      <PageNavigation />
    </div>
  );
}
