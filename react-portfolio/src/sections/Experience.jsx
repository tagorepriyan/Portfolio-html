import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import experienceData from '../data/experience.json';

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="Experience" subtitle="Roles & contributions" />
      <div className="grid gap-6">
        {experienceData.map(exp => (
          <div key={exp.role} className="card p-6 flex flex-col gap-2">
            <h3 className="font-medium text-lg">{exp.role} <span className="text-accent">@ {exp.company}</span></h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{exp.period}</p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{exp.description}</p>
          </div>
        ))}
        {experienceData.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">Experience details coming soon.</p>}
      </div>
    </div>
  </section>
);

export default Experience;
