import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import educationData from '../data/education.json';

const Education = () => (
  <section id="education" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="Education" subtitle="Academic background" />
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map(e => (
          <div key={e.institution + e.degree} className="card p-6 flex flex-col gap-2">
            <h3 className="font-medium text-lg">{e.degree}</h3>
            <p className="text-sm text-accent font-medium">{e.institution}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{e.period}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">CGPA: {e.cgpa || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
