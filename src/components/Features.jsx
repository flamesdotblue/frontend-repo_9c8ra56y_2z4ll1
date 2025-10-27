import { Rocket, BrainCircuit, GitBranch, Shield, BarChart3, Bug } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Reproduction',
    desc: 'Generate human-readable steps to reproduce from raw logs, stack traces, or bug reports.'
  },
  {
    icon: Bug,
    title: 'Auto Root Cause Detection',
    desc: 'Identify the likely file, function, and module that triggered the error with confidence scoring.'
  },
  {
    icon: GitBranch,
    title: 'Jira & GitHub Integration',
    desc: 'Create issues and post AI steps to your team threads automatically.'
  },
  {
    icon: BarChart3,
    title: 'Team Analytics Dashboard',
    desc: 'Track accuracy, recurring issues, and reproduced vs pending trends over time.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Data encrypted in transit and at rest. Built for enterprise security needs.'
  },
  {
    icon: Rocket,
    title: 'Fast Setup',
    desc: 'Start in minutes with OAuth, Slack, and Stripe integrations ready to go.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for developers and QA teams</h2>
          <p className="mt-3 text-white/70">From triage to fix suggestions — a streamlined pipeline powered by AI.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-400 p-[2px] mb-4">
                <div className="h-full w-full rounded-md bg-black grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center">
          <p className="text-white/90 italic max-w-3xl mx-auto">
            “Our devs save 5+ hours a week with AI Bug Reproducer.” — CTO, DevPro Labs
          </p>
        </div>
      </div>
    </section>
  );
}
