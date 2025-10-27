export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      tagline: 'Get started',
      features: ['3 analyses / month', 'Basic AI engine', 'Community support'],
      cta: 'Start Free',
      href: '#',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$19',
      tagline: 'For individuals',
      features: ['50 analyses / month', 'Advanced AI accuracy', 'Slack notifications', 'Export to PDF'],
      cta: 'Upgrade to Pro',
      href: '#',
      highlight: true,
    },
    {
      name: 'Team',
      price: '$79',
      tagline: 'For small teams',
      features: ['250 analyses / month', 'Team workspace', 'Jira + GitHub integration', 'Priority support'],
      cta: 'Get Team',
      href: '#',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Cancel anytime. 14-day free Pro trial included.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border border-white/10 p-6 bg-white/[0.04] ${
                tier.highlight ? 'ring-2 ring-cyan-400/60' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="text-white/60">{tier.tagline}</p>
                </div>
                <div className="text-3xl font-bold text-white">{tier.price}<span className="text-base text-white/60">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-white/80 text-sm">• {f}</li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-semibold transition-colors ${
                  tier.highlight ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-white/60">
          Enterprise: Custom quote and unlimited usage. Contact sales.
        </div>
      </div>
    </section>
  );
}
