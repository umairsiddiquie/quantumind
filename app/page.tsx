export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Quantumind: A Cognitive Architecture Model
        </h1>
        <p className="text-lg mb-4">
          A groundbreaking research initiative and cognitive architecture model that proposes a novel framework 
          for understanding human cognition by integrating principles from quantum information theory.
        </p>
        <p className="mb-4">
          This project bridges speculative philosophy with empirical science, offering a new paradigm for 
          understanding the mind as a quantum-adaptive system.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Weak Measurement in Cognition</li>
            <li>Quantum Coherence in Memory</li>
            <li>Ethical Entanglement</li>
            <li>Quantum Probability Framework</li>
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="https://zenodo.org/record/19642724" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Research Paper
          </a>
        </div>
      </div>
    </main>
  );
}
