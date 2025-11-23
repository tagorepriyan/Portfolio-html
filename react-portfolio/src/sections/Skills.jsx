import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import skillsData from '../data/skills.json';
import SkillCategory from '../components/SkillCategory.jsx';

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="Skills" subtitle="Technologies & tools I work with" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map(cat => <SkillCategory key={cat.name} category={cat} />)}
      </div>
    </div>
  </section>
);

export default Skills;
