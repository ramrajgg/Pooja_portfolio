import Reveal from './Reveal';

const education = [
  { years: '2022 – 2024', degree: 'M.S. in Instructional Design, Development & Evaluation', institution: 'Syracuse University — New York, USA' },
  { years: '2008 – 2010', degree: 'MBA in Marketing Management', institution: 'Rizvi Institute of Management Studies & Research — Mumbai, India' },
  { years: '2007 – 2008', degree: 'Diploma in Marketing Management', institution: 'Welingkar Institute of Management Development & Research — Mumbai, India' },
  { years: '2001 – 2006', degree: 'B.A. in Economics', institution: 'Ruparel College, Mumbai University' },
];

const skillGroups = [
  { category: 'Instructional Design', skills: ['ADDIE Model', 'SAM Model', 'Needs Analysis', 'Storyboarding', 'Curriculum Design', 'Blended Learning'] },
  { category: 'eLearning Tools', skills: ['Articulate Storyline', 'Rise 360', 'Adobe Captivate', 'H5P', 'Genially', 'Canva'] },
  { category: 'Multimedia & Production', skills: ['Vyond', 'Clipchamp', 'Adobe Photoshop', 'Adobe Illustrator', 'PowerPoint', 'Video Editing'] },
  { category: 'Facilitation & Strategy', skills: ['vILT Facilitation', 'Leadership Development', 'Coaching & Mentoring', 'Psychometric Assessment', 'LMS Administration', 'Training Evaluation'] },
];

export default function EducationAndTechStack() {
  return (
    <section className="bg-ink py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Education */}
        <div className="mb-28">
          <Reveal>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Academic Background</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold tracking-tightest text-white text-5xl md:text-6xl mb-14">Education</h2>
          </Reveal>

          <div className="space-y-px">
            {education.map(({ years, degree, institution }, i) => (
              <Reveal key={degree} delay={i * 80}>
                <div className="group grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-10 py-7 border-t border-line hover:border-gold/40 transition-colors">
                  <span className="font-display text-sm text-gold pt-1">{years}</span>
                  <div>
                    <p className="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-gold-soft transition-colors">{degree}</p>
                    <p className="font-sans text-base text-muted mt-1.5">{institution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <Reveal>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Expertise</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold tracking-tightest text-white text-5xl md:text-6xl mb-14">Skills</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {skillGroups.map(({ category, skills }, i) => (
              <Reveal key={category} delay={(i % 2) * 100}>
                <div className="rounded-2xl border border-line bg-ink-800/40 p-7 hover:border-gold/30 transition-colors">
                  <p className="font-display text-lg font-semibold text-white mb-5">{category}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-sm px-4 py-1.5 rounded-full border border-line text-muted hover:border-gold hover:text-gold transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
