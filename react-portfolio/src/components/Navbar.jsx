import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { useActiveSection } from '../hooks/useActiveSection.js';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const active = useActiveSection(links.map(l => l.id), 64);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/60">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
        <span className="font-semibold tracking-tight">Tagorepriyan S P</span>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition-colors ${active === l.id ? 'text-accent font-medium' : 'hover:text-accent'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
