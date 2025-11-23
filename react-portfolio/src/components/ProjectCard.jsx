import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div className="card p-6 flex flex-col gap-4" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
      <div className="aspect-video w-full rounded-xl bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 text-sm">Image</div>
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {project.stack.map(s => <span key={s} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{s}</span>)}
      </div>
      <div className="flex gap-3 pt-2">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs"><Github size={16}/> Code</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-solid text-xs"><ExternalLink size={16}/> Live</a>}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
