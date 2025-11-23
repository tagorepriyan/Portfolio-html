import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const AchievementCard = ({ achievement }) => (
  <motion.div className="card p-5 flex gap-4" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
      <Trophy size={20} />
    </div>
    <div className="flex flex-col">
      <h3 className="font-medium">{achievement.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{achievement.description}</p>
    </div>
  </motion.div>
);

export default AchievementCard;
