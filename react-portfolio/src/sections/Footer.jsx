import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400 mt-auto">
    <div className="flex justify-center gap-5 mb-4">
      <a href="mailto:tagorepriyanofficial@gmail.com" className="hover:text-accent" aria-label="Email"><Mail size={18} /></a>
      <a href="https://github.com/tagorepriyan" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="GitHub"><Github size={18} /></a>
      <a href="https://www.linkedin.com/in/tagorepriyan" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="LinkedIn"><Linkedin size={18} /></a>
    </div>
    <p>© {new Date().getFullYear()} Tagorepriyan S P. All rights reserved.</p>
  </footer>
);

export default Footer;
