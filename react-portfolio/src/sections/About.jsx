import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader title="About" subtitle="Who I am and what I do" />
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-slate dark:prose-invert max-w-none">
        <p>I'm <strong>Tagorepriyan S P</strong>, a passionate <strong>Full-Stack Developer</strong> and <strong>Analytics Enthusiast</strong> focused on building fast, clean web applications and extracting insights from data.</p>
        <p>I enjoy solving real-world problems with modern technologies, writing readable code, and iterating quickly. My strengths include adaptability, problem solving, attention to detail, and consistent learning.</p>
        <p>Currently I'm diving deeper into <strong>MERN stack</strong>, exploring <strong>Data Science</strong> concepts, and learning the basics of <strong>Android development</strong>. My career goal is to become a skilled software engineer and pursue an <strong>MS in Analytics</strong>.</p>
      </motion.div>
    </div>
  </section>
);

export default About;
