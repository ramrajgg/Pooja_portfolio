import { useState } from 'react';

const experiences = [
  {
    title: 'Independent Consultant',
    organization: 'Prism Consulting',
    years: '2022 – 2024',
    details: [
      'Developed modules on Problem Solving and Decision Making, Influencing Skills, and Creativity and Innovation for a virtual instructor-led training program for a U.S.-based consumer-goods company.',
      'Created an eLearning module for a "Decoding Others" refresher course for first-time managers at a medical billing company.',
      'Designed instructional storyboards and learning content with interactive elements to boost learner engagement.',
      'Built eLearning experiences using Articulate Storyline, Rise 360, Adobe Captivate, Adobe Suite, and Clipchamp, integrating voiceovers, assessments, and multimedia.',
      'Produced learner-centric resources supporting virtual environments with a focus on retention and application.'
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
      'Conducted Training Needs Analysis for four business units within a major recruitment firm.'
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
      'Delivered over 10,000 hours of training across different experience levels.'
    ],
  },
  {
    title: 'Associate Consultant – Organizational Development',
    organization: 'Acumen Business Consulting',
    years: '2010 – 2015',
    details: [
      'Generated recurring revenue by strengthening client relationships and ensuring consistent project delivery.',
      'Analyzed organizational data to offer strategic insights to leadership teams.',
      'Marketed and delivered a range of soft-skills and functional-skills training across various industries.',
      'Managed multi-phase OD projects lasting from 6 months to 2 years.'
    ],
  }
];


export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
  };

  return (
    <section className="bg-cream text-black py-16 px-8">
  <h2 className="cormorant-garamond-light text-5xl text-black mb-8">EXPERIENCE</h2>
  <div className="space-y-4">
    {experiences.map((experience, index) => (
      <div
        key={index}
        className="border border-yellow rounded-lg overflow-hidden"
      >
        {/* Accordion Header */}
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full text-left px-6 py-4 cormorant-garamond-light text-xl font-bold flex justify-between items-center bg-cream hover:bg-yellow transition-colors"
        >
          <div>
            <p className="text-2xl">{experience.title}</p>
            <p className="text-yellow text-lg">{experience.organization}</p>
            <p className="text-md">{experience.years}</p>
          </div>
          <span className="text-yellow text-2xl">
            {activeIndex === index ? '-' : '+'}
          </span>
        </button>

        {/* Accordion Content */}
        {activeIndex === index && (
          <div className="px-6 py-4 cormorant-garamond-light text-lg space-y-2 bg-cream">
            <ul className="list-disc list-inside">
              {experience.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
  );
}
