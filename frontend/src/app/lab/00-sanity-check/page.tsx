import ColabButton from "@/components/ColabButton";
import PageNavigation from "@/components/PageNavigation";

export default function SanityCheckPage() {
  return (
    <div className="max-w-3xl">
      <header className="mb-8">
        <p className="text-cyan-600 font-medium mb-2">Lab 00</p>
        <h1 className="text-4xl font-bold text-gray-900">Sanity Check</h1>
        <p className="text-xl text-gray-600 mt-2">Your first quantum circuit</p>
      </header>

      <section className="mb-10">
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-green-800 mb-3">Goal</h2>
          <p className="text-green-700">
            Verify your environment works by creating and running a simple quantum circuit.
            If this works, you're ready for the rest of the workshop.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Will Do</h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">1</span>
            <div className="text-gray-700">
              Open the notebook in Google Colab
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">2</span>
            <div className="text-gray-700">
              Run the setup cell to install Qiskit (takes ~30 seconds)
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">3</span>
            <div className="text-gray-700">
              Run the circuit cell to create your first quantum circuit
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">4</span>
            <div className="text-gray-700">
              See the output — congratulations, you've run quantum code!
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Exercise</h2>
        <p className="text-gray-600 mb-4">
          <span className="inline-flex items-center gap-1 text-sm bg-gray-200 px-2 py-1 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            5 minutes
          </span>
        </p>
        <ColabButton notebookName="00_sanity_check.ipynb" />
      </section>

      <section className="mb-10 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
        <h2 className="text-xl font-bold text-cyan-900 mb-4">Success Criteria</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-cyan-800">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Qiskit installed without errors
          </li>
          <li className="flex items-center gap-3 text-cyan-800">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Circuit diagram displays
          </li>
          <li className="flex items-center gap-3 text-cyan-800">
            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Simulation runs and shows results
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 className="text-xl font-bold text-red-800 mb-3">Troubleshooting</h2>
        <ul className="space-y-2 text-red-700">
          <li><strong>Installation errors?</strong> — Try "Runtime → Restart and run all"</li>
          <li><strong>Slow to load?</strong> — Colab may need to allocate resources. Wait 30 seconds.</li>
          <li><strong>Still stuck?</strong> — Raise your hand or check the <a href="/help" className="underline">Help page</a></li>
        </ul>
      </section>

      <PageNavigation />
    </div>
  );
}
