import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category }) => (
  <motion.div className="card p-5 flex flex-col gap-3" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
    <h3 className="font-medium text-sm tracking-wide uppercase text-slate-500 dark:text-slate-400">{category.name}</h3>
    <div className="flex flex-wrap gap-2">
      {category.items.map(item => (
        <span key={item} className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{item}</span>
      ))}
    </div>
  </motion.div>
);

export default SkillCategory;
