import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { Mail, Github, Linkedin } from 'lucide-react';

const initial = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = 'Valid email required';
    if (form.message.trim().length < 10) e.message = 'Message too short';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    const mailto = `mailto:tagorepriyanofficial@gmail.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title="Contact" subtitle="Reach out for collaboration or opportunities" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Feel free to drop a message—I'm open to internships, freelance work, collaborations, and interesting problem-solving opportunities.</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={16}/> <a className="hover:text-accent" href="mailto:tagorepriyanofficial@gmail.com">tagorepriyanofficial@gmail.com</a></li>
              <li className="flex items-center gap-2"><Github size={16}/> <a className="hover:text-accent" href="https://github.com/tagorepriyan" target="_blank" rel="noopener noreferrer">github.com/tagorepriyan</a></li>
              <li className="flex items-center gap-2"><Linkedin size={16}/> <a className="hover:text-accent" href="https://www.linkedin.com/in/tagorepriyan" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="card p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium uppercase tracking-wide">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium uppercase tracking-wide">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium uppercase tracking-wide">Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange} className="rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>
            <button type="submit" disabled={submitted} className="btn-solid">{submitted ? 'Opening Mail…' : 'Send Message'}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
