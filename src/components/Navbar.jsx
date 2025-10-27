import { useState } from 'react';
import { Menu, X, Bug, Settings, BarChart2, CreditCard } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', href: '#dashboard', icon: Bug },
    { label: 'Reports', href: '#reports', icon: BarChart2 },
    { label: 'Integrations', href: '#integrations', icon: Settings },
    { label: 'Billing', href: '#pricing', icon: CreditCard },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-400 grid place-items-center">
              <Bug className="h-4 w-4 text-black" />
            </div>
            <span>BugRepro.AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="text-sm text-white/80 hover:text-white transition-colors">
                {label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center rounded-md bg-cyan-400/90 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors">
              Try Free
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-cyan-400/90 hover:bg-cyan-400 text-black font-semibold px-4 py-2"
              onClick={() => setOpen(false)}
            >
              Try Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
