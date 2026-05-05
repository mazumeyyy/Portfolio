/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { hr } from 'motion/react-client';

const PROJECTS = [
  {
    group: "Data Science",
    emoji: "🔬",
    items: [
      {
        name: "Python-Job-Listings-Scraper",
        description: "Scrapes job listings from the web using Python.",
        tags: ["Python", "BeautifulSoup", "Scraping"],
        href: "https://github.com/mazumeyyy/Python-Job-Listings-Scraper_tut",
      },
      {
        name: "Ekantipur Scraper",
        description: "Scrapes news articles from Ekantipur.com.",
        tags: ["Python", "Scraping"],
        href: "https://github.com/mazumeyyy/ekantipur-scraper",
      },
      {
        name : "Sentiment Analysis — Hotel Reviews",
        description: "Analyzes sentiment of hotel reviews using NLP and Machine Learning.",
        tags: ["Python", "NLP","Pandas","scikit-learn", "Machine Learning"],
        href: "https://github.com/mazumeyyy/sentiment-analysis-hotel-reviews-rn",
      }
    ],
  },
  {
    group: "SDET & Automation",
    emoji: "🤖",
    items: [
      {
        name: "Pinevisa Automation",
        description: "Automated UI & API test suite for PineVisa platform.",
        tags: ["Playwright", "JavaScript", "API Testing"],
        href: "https://github.com/mazumeyyy/Pinevisa_Automation",
      },
    ],
  },
  {
    group: "Web Dev",
    emoji: "🌐",
    items: [
      {
        name: "DrishtiDrive",
        description: "Nepal-based driving school management frontend demo.",
        tags: ["React", "TypeScript", "Tailwind", "Vite"],
        href: "https://github.com/mazumeyyy/DrishtiDrive",
      },
      {
        name: "Driving School Management",
        description: "Full-stack driving school app with enrollment & certificates.",
        tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
        href: "https://github.com/mazumeyyy/driving-school-management",
      },
    ],
  },
  {
    group: "College Projects",
    emoji: "🎓",
    items: [
      {
        name: "OOP Practicals",
        description: "Object-Oriented Programming practicals — 2nd Sem.",
        tags: ["C++"],
        href: "https://github.com/mazumeyyy/OOP-practical",
      },
      {
        name: "DAA Practicals",
        description: "Design & Analysis of Algorithms practicals — 5th Sem.",
        tags: ["C"],
        href: "https://github.com/mazumeyyy/DAA-Practicals-5th-Sem",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-mono font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            ← mazum_paudel.init()
          </a>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 uppercase tracking-widest">
            .projects
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
            Open Source Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl">
            A collection of projects across data science, automation, web development, and academic work.
          </p>
        </motion.div>

        {/* Project Groups */}
        <div className="space-y-20">
          {PROJECTS.map((group, gIdx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIdx * 0.1 }}
            >
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl">{group.emoji}</span>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                  {group.group}
                </h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>

              {/* Project Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {group.items.map((project, pIdx) => (
                  <motion.a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIdx * 0.05 }}
                    className="group dev-card flex flex-col justify-between hover:border-indigo-500/40 transition-all cursor-pointer"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <Github size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        <ArrowUpRight size={16} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <h3 className="font-bold text-white text-sm mb-2 group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="dev-badge">{tag}</span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-slate-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center font-mono text-[10px] text-slate-600 uppercase tracking-widest">
          <span>Built with</span>
          <span className="text-indigo-500 mx-1">React</span>
          <span>+</span>
          <span className="text-indigo-500 mx-1">Tailwind</span>
        </div>
      </footer>
    </div>
  );
}