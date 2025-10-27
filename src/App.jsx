import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="dashboard" className="relative py-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">Upload or Paste Report</h3>
                <p className="mt-2 text-sm text-white/70">Paste logs, stack traces, or drop files to analyze.</p>
                <div className="mt-4 grid gap-3">
                  <textarea className="w-full h-40 rounded-lg bg-black/60 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Paste bug report, crash log, or stack trace here..." />
                  <div className="flex items-center justify-between">
                    <input type="file" className="block w-full text-sm text-white/60 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:text-white file:px-4 file:py-2 file:hover:bg-white/20" />
                    <button className="ml-4 inline-flex items-center rounded-md bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-4 py-2">Analyze</button>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">AI Results</h3>
                <p className="mt-2 text-sm text-white/70">Steps to reproduce, root cause, affected files, and more will appear here.</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-lg bg-black/60 border border-white/10 p-3">
                    <div className="font-semibold text-white/90">Steps to Reproduce</div>
                    <ol className="list-decimal list-inside text-white/70 mt-1">
                      <li>Install and launch the app.</li>
                      <li>Navigate to Settings → Profile.</li>
                      <li>Toggle Dark Mode and click Save.</li>
                      <li>App crashes with NullReferenceException.</li>
                    </ol>
                  </div>
                  <div className="rounded-lg bg-black/60 border border-white/10 p-3">
                    <div className="font-semibold text-white/90">Root Cause</div>
                    <p className="text-white/70">Uninitialized theme context in ProfileSettings component.</p>
                  </div>
                  <div className="rounded-lg bg-black/60 border border-white/10 p-3">
                    <div className="font-semibold text-white/90">Affected Files</div>
                    <p className="text-white/70">ProfileSettings.jsx, theme.ts</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="inline-flex items-center rounded-md border border-white/20 hover:border-white/40 text-white px-4 py-2">Export to PDF</button>
                  <button className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2">Copy to clipboard</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} BugRepro.AI — Reproduce. Understand. Fix.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
