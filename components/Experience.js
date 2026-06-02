import { useState } from 'react';
import Reveal from './Reveal';

const experiences = [
  {
    title: 'Independent Consultant',
    organization: 'Prism Consulting',
    years: '2022 – 2024',
    details: [
      'Developed modules on Problem Solving, Influencing Skills, and Creativity & Innovation for a U.S.-based consumer-goods company vILT program.',
      'Created an eLearning module for a "Decoding Others" refresher course for first-time managers at a medical billing company.',
      'Designed instructional storyboards and learning content with interactive elements to boost learner engagement.',
      'Built eLearning experiences using Articulate Storyline, Rise 360, Adobe Captivate, Adobe Suite, and Clipchamp.',
      'Produced learner-centric resources supporting virtual environments with a focus on retention and application.',
    ],
  },
  {
    title: 'Instructional Design Specialist',
    organization: 'Lee Hecht Harrison (LHH)',
    years: '2020 – 2021',
    details: [
      'Updated learning content aligned with global operational needs and evolving audience profiles.',
      'Led virtual and in-person Assessment & Development Centers for over 500 managers across India.',
      'Facilitated behavioral training workshops for leadership teams across India and global branches.',
      'Conducted Training Needs Analysis for four business units within a major recruitment firm.',
    ],
  },
  {
    title: 'Assistant Manager – Learning & Development',
    organization: 'GeBBS Healthcare',
    years: '2015 – 2019',
    details: [
      'Mapped competencies, developed a structured competency dictionary, and rolled out targeted workshops.',
      'Assessed leadership styles using Team Effectiveness and Personal Style Inventory tools.',
      'Curated simulations, case studies, games, and role-plays for leadership development.',
      'Implemented psychometric assessments for team leaders and conducted POSH training for fact-finders.',
      'Delivered over 10,000 hours of training across different experience levels.',
    ],
  },
  {
    title: 'Associate Consultant – Organizational Development',
    organization: 'Acumen Business Consulting',
    years: '2010 – 2015',
    details: [
      'Generated recurring revenue by strengthening client relationships and ensuring consistent project delivery.',
      'Analyzed organizational data to offer strategic insights to leadership teams.',
      'Marketed and delivered soft-skills and functional-skills training across various industries.',
      'Managed multi-phase OD projects spanning 6 months to 2 years.',
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-ink py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Career Journey</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold tracking-tightest text-white text-5xl md:text-6xl mb-14">
            Experience
          </h2>
        </Reveal>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = activeIndex === index;
            return (
              <Reveal key={index} delay={index * 80}>
                <div
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen ? 'border-gold/50 bg-ink-800' : 'border-line bg-ink-800/40 hover:border-gold/30'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    className="w-full text-left px-7 py-6 flex justify-between items-center gap-6"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-sm text-gold/70 tabular-nums hidden sm:block">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-display text-xl md:text-2xl font-semibold text-white">{exp.title}</p>
                        <p className="font-sans text-sm text-gold mt-1">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 flex-shrink-0">
                      <span className="font-sans text-xs text-muted hidden md:block">{exp.years}</span>
                      <span className={`grid place-items-center w-8 h-8 rounded-full border border-gold/40 text-gold text-lg transition-transform duration-300 ${isOpen ? 'rotate-45 bg-gold/10' : ''}`}>
                        +
                      </span>
                    </div>
                  </button>

                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <ul className="px-7 pb-7 sm:pl-[4.5rem] space-y-3">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 font-sans text-base text-muted leading-relaxed">
                            <span className="text-gold mt-1.5 flex-shrink-0 text-xs">●</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
