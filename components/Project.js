import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Coaching for Success – vILT",
    summary: "A 120-minute virtual instructor-led module helping first-time managers transition from individual contributors to people leaders.",
    image: "/images/CoachingManager.jpg",
    skills: ["vILT", "Manager Development", "Coaching Skills", "Instructional Design", "Interactive Learning"],
    sections: [
      { heading: "Challenge", text: "High-performing first-time managers were promoted for their technical excellence but struggled to shift from task execution to team development. Their transactional feedback style led to disengagement and attrition." },
      { heading: "Approach", text: "Using the ADDIE framework, the session focused on differentiating coaching from feedback, identifying personal coaching styles, and applying structured coaching models through scenario-based discussions, breakout activities, peer learning, and role-plays." },
      { heading: "Outcome", text: "94% of participants found the session relevant and engaging. Coaches showed improved vocabulary and application in role-plays, increased coaching conversations within 30 days, and HR reported a noticeable decline in attrition rates." },
      { heading: "Tools", text: "MS Office (Word, PPT, Excel), Canva, Clipchamp, Zoom" },
    ],
    links: {
      pdfs: [
        { url: "https://drive.google.com/drive/folders/1KrjyqP1jp65G1bFERbzyii1x2BcanxiL", label: "vILT Instructor Deck" },
        { url: "https://drive.google.com/file/d/1lrjjJJuBXzlIXdRnlDbOkWnn9022tFzg/view?usp=sharing", label: "Participant Workbook" },
        { url: "https://drive.google.com/file/d/1GRUyGg_3s6ZtS70xMVXPCGr-f5xqeoja/view?usp=sharing", label: "Dealing With Reactions Infographic" },
        { url: "https://drive.google.com/file/d/1fqePdkXkkKxLlpzHtaXjwMvH16rIhd-c/view?usp=sharing", label: "Decoding Others Infographic" },
      ],
    },
  },
  {
    name: "Skillful Collaboration – vILT",
    summary: "A modernized vILT session redesigned from a purely theoretical, text-heavy format into an interactive, engaging learning experience.",
    image: "/images/SkillfulCollaboration.jpg",
    skills: ["vILT", "Redesign", "ADDIE Model", "Interactive Scenarios"],
    sections: [
      { heading: "Challenge", text: "The original module was purely theoretical, heavily text-based, and presented in a simple black-and-white format with no interactivity." },
      { heading: "Approach", text: "Redesigned the four-hour session by integrating questionnaires, real-world scenarios, self-reflection activities, and relevant videos to boost learner engagement and retention." },
    ],
    links: {
      pdfs: [{ url: "https://docs.google.com/presentation/d/17JcZnA9OcS8C3TnizsDKiaAptziuGoRF/edit", label: "Skillful Collaboration Deck" }],
    },
  },
  {
    name: "Customer Centricity – Interactive eLearning",
    summary: "An immersive, decision-based eLearning experience built in Genially to help customer service reps handle difficult conversations with empathy.",
    image: "/images/CustomerCentricity.jpg",
    skills: ["Genially", "Scenario-Based Learning", "Customer Service", "Interactive Design"],
    sections: [
      { heading: "Challenge", text: "Participants needed to practice handling difficult customer conversations (e.g., delayed deliveries) in a safe environment before applying skills on the job." },
      { heading: "Approach", text: "Used Genially's trigger-based navigation, audio/animation effects, pop-ups, and a score/feedback system to create a branching scenario simulation." },
      { heading: "Outcome", text: "Transformed a static training module into an interactive experiential journey, enabling participants to internalize customer-centric values and behaviors effectively." },
    ],
    links: { video: "https://view.genially.com/682988de2e2623a25c99fa16/presentation-customer-service-challenge-delayed-delivery" },
  },
  {
    name: "Secure Coding Practices – eLearning",
    summary: "A 15–20 minute SCORM-compliant eLearning module for software developers covering security vulnerabilities and best practices.",
    image: "/images/SecureCoding.jpg",
    skills: ["Articulate Storyline", "SCORM", "Branching Scenarios", "Multimedia"],
    sections: [
      { heading: "Challenge", text: "Experienced developers needed awareness of secure coding practices without sitting through a lecture-heavy course." },
      { heading: "Approach", text: "Built a branching interactive module with layered slides, scenario-based decision points, voiceovers, character-based storytelling, and contextual feedback using Articulate Storyline." },
      { heading: "Outcome", text: "Improved recall and increased application of secure coding practices in daily work, resulting in improved code security awareness across the development team." },
    ],
    links: { video: "https://360.articulate.com/review/content/b9f5a7e2-abee-498f-a4f2-66ee52313150/review" },
  },
  {
    name: "Time Management – eLearning Module",
    summary: "A 10-minute self-paced module for new employees on planning and prioritization, built with Articulate Storyline and SCORM-packaged.",
    image: "/images/TimeManagement.png",
    skills: ["Articulate Storyline", "SCORM", "Adult Learning", "Scenario-Based"],
    sections: [
      { heading: "Approach", text: "Content is delivered in concise sections with minimal on-screen text and frequent interactive elements. Scenario-based decision activities with contextual feedback reinforce planning and prioritization objectives." },
      { heading: "Outcome", text: "Enhanced learner engagement, improved recall, and greater application of time-management techniques in daily work — leading to increased productivity across teams." },
    ],
    links: {
      pdfs: [{ url: "https://360.articulate.com/review/content/345af4b1-51d3-45e8-a316-bcb9f0d12f7b/review", label: "Watch Demo" }],
    },
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const project = active !== null ? projects[active] : null;

  return (
    <section id="work" className="bg-ink-800 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Selected Work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold tracking-tightest text-white text-5xl md:text-6xl mb-14">
            Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <Reveal key={index} delay={(index % 3) * 90}>
              <article
                onClick={() => setActive(index)}
                className="group relative rounded-2xl overflow-hidden border border-line bg-ink cursor-pointer transition-all duration-300 hover:border-gold/50 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-ink/70 backdrop-blur text-gold border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↗
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed line-clamp-3">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.skills.slice(0, 3).map((s) => (
                      <span key={s} className="font-sans text-xs px-3 py-1 rounded-full border border-line text-muted">{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {project && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-ink/80 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-3xl border border-gold/30 bg-ink-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 sm:h-52">
              <Image src={project.image} alt={project.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-ink/70 backdrop-blur text-white hover:text-gold border border-line transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-7 sm:p-9 overflow-y-auto scroll-area max-h-[calc(88vh-11rem)]">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">{project.name}</h3>

              <div className="space-y-6">
                {project.sections.map(({ heading, text }) => (
                  <div key={heading}>
                    <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">{heading}</p>
                    <p className="font-sans text-base text-muted leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {project.links && (
                <div className="mt-7 flex flex-col gap-2.5">
                  {project.links.video && (
                    <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-soft transition-colors">
                      <span>▶</span> Watch Demo
                    </a>
                  )}
                  {project.links.pdfs?.map((pdf) => (
                    <a key={pdf.label} href={pdf.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-soft transition-colors">
                      <span>↗</span> {pdf.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-2">
                {project.skills.map((s) => (
                  <span key={s} className="font-sans text-xs px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-soft">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
