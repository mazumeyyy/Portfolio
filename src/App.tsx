/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Instagram,
  Terminal,
  Code2,
  Database,
  BrainCircuit,
  TestTube2,
  GraduationCap,
  Award,
  MapPin,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/mazumeyyy", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mazum-paudel-b603472b1/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/thatnepaliktii", label: "X (Twitter)" },
  { icon: Youtube, href: "https://www.youtube.com/@THATNEPALIKTI", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/thatnepalikti/", label: "Instagram" },
  { icon: () => <span className="text-base leading-none">🥟</span>, href: "https://buymemomo.com/thatnepalikti", label: "BuyMeMomo" },
];

const SKILLS = [
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "JavaScript", "Node.js", "C", "C++"]
  },
  {
    category: "ML & Data Science",
    icon: BrainCircuit,
    items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Logistic Regression"]
  },
  {
    category: "SDET & Testing",
    icon: TestTube2,
    items: ["Playwright", "Manual Testing", "Smoke Testing", "Postman API"]
  },
  {
    category: "Infrastructure",
    icon: Database,
    items: ["SQL", "Git", "Trello", "Confluence", "Jupyter"]
  }
];

const EXPERIENCE = [
  {
    role: "SDET",
    company: "AdviseBridge / PineVisa",
    period: "Jan 2026 - Present",
    description: [
      "Developing automated UI test scripts using Playwright (JS).",
      "Performing manual smoke, regression, and beta testing.",
      "Tracking defects and collaborating on feature validation.",
      "Validating endpoints using API testing."
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "TAI Inc.",
    period: "Aug 2025 - Oct 2025",
    description: [
      "Conducted research for consultation projects and feasibility studies.",
      "Collaborated with stakeholders to translate requirements.",
      "Prepared analytical reports and strategic presentation materials."
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-indigo-400">
            <Terminal size={18} />
            <span>mazum_paudel.init()</span>
          </div>
          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-indigo-400 transition-colors">.root</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">.skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">.work</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">.contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-32">

        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
              Available for Data Science and AI/ML Internships
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
              Mazum Paudel
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl font-light">
              Machine learning focused <code className="text-indigo-300">BSc CSIT</code> student.
              Currently engineering automated test systems at AdviseBridge and PineVisa.
              Building the bridge between data science and production-ready software.
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-md hover:border-indigo-500/50 hover:text-indigo-400 transition-all text-sm font-mono"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Technical Stack</h2>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="dev-card"
              >
                <div className="text-indigo-500 mb-4">
                  <skill.icon size={20} />
                </div>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="dev-badge">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 mb-32">
          <section id="experience">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Experience</h2>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>
            <div className="space-y-12">
              {EXPERIENCE.map((exp) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-indigo-500 font-mono text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-indigo-500 font-mono">0{i + 1}</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Education</h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
              <div className="dev-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">BSc CSIT</h3>
                    <p className="text-xs text-slate-500 mt-1">Tribhuvan University</p>
                    <p className="text-[10px] text-indigo-500/70 font-mono mt-2 uppercase tracking-widest">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Cert</h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
              <div className="dev-card border-indigo-500/30 bg-indigo-500/5">
                <div className="flex items-center justify-between mb-4">
                  <Award size={20} className="text-indigo-400" />
                  <span className="font-mono text-[10px] text-indigo-400">2025</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">Data Science & ML</h3>
                <p className="text-xs text-slate-500">Deerwalk Institute</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">110 HOURS</span>
                  <a
                    href="/DSML_certificate.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-indigo-400 transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact">
          <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready for the next sprint?
            </h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto font-light">
              I'm always looking for new challenges in Machine Learning and Automation.
              Let's connect and discuss how I can contribute to your team.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <Mail size={18} className="mx-auto mb-3 text-indigo-500" />
                <p className="text-xs font-mono text-slate-300">mazumpaudel02@gmail.com</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <Phone size={18} className="mx-auto mb-3 text-indigo-500" />
                <p className="text-xs font-mono text-slate-300">+977-9813928426</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <MapPin size={18} className="mx-auto mb-3 text-indigo-500" />
                <p className="text-xs font-mono text-slate-300">Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Action Buttons — two rows */}
            <div className="flex flex-col items-center gap-4">

              {/* Row 1: LinkedIn + Resume */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mazum-paudel-b603472b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-md hover:bg-slate-700 transition-all border border-slate-700"
                >
                  View Resume
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Row 2: Buymemomo — centered alone */}
              <a
                href="https://buymemomo.com/thatnepalikti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-slate-800 text-white font-bold rounded-md hover:bg-slate-700 transition-all border border-slate-700"
              >
                🥟 Buymemomo
                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            <span>Built with</span>
            <span className="text-indigo-500">React</span>
            <span>+</span>
            <span className="text-indigo-500">Tailwind</span>
          </div>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-indigo-400 transition-colors"
                title={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}