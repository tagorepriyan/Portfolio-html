import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import achievementsData from '../data/achievements.json';
import AchievementCard from '../components/AchievementCard.jsx';

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="Achievements" subtitle="Recognition & milestones" />
      <div className="grid gap-6 md:grid-cols-2">
        {achievementsData.map(a => <AchievementCard key={a.title} achievement={a} />)}
      </div>
    </div>
  </section>
);

export default Achievements;
