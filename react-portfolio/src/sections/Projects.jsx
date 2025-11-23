import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="Projects" subtitle="Selected work and experiments" />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  </section>
);

export default Projects;
