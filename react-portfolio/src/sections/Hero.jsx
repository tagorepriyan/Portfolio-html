import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Hi, I'm <span className="text-accent">Tagorepriyan S P</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">Full-Stack Developer | Analytics Enthusiast</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">I build fast, clean web applications and solve problems using data.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-solid">View Projects</a>
            <a href="/resume.pdf" className="btn-outline">Download Resume</a>
            <a href="https://github.com/tagorepriyan" target="_blank" rel="noopener noreferrer" className="btn-outline"><Github size={18}/> GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
