import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Coaching for Success - vILT",
    description:
      `Module Brief :
      The Coaching for Managers module is part of ABC Pharmaceuticals’ Manager Development Program, designed to support high-performing first-time managers transitioning from individual contributors to people leaders. 
      The target audience—experienced professionals (20+ years in the industry, 10+ within the organization)—were promoted for their exceptional performance but faced challenges shifting from task execution to team development. 
      Their transactional feedback style led to disengagement and attrition. Applying the ADDIE framework, the program addressed this gap through a 120-minute vILT session focusing on differentiating coaching from feedback, identifying personal coaching styles, and applying structured coaching models.
      Using scenario-based discussions, breakout activities, peer learning, and role-plays, the session fostered self-awareness and empathy.
      A virtual instructor-led training module within a Manager Development Program, designed to help individual contributors transition into people managers.
      Through interactive discussions, role-plays and hands-on tools, participants learn to move from transactional feedback to developmental coaching, boosting team engagement.
      
      Tools Used:
      MS Office suite (Word, PPT and Excel),Canva for infographics,Clipchamp Video editing tool,Zoom to deploy training
      
      Outcome & Impact:
      Post-training evaluations showed enhanced coaching behaviors, stronger team engagement, and a measurable drop in attrition. Evaluation results showed strong impact across all levels—94% of participants found the session relevant and engaging, demonstrated improved coaching vocabulary and application during role-plays, and showed increased coaching conversations with their teams within 30 days post-training. Additionally, HR reported a noticeable decline in attrition rates, though specific figures remained confidential.


    `,
    image: "/images/CoachingManager.jpg",
    skills: [
      "vILT",
      "Manager Development",
      "Coaching Skills",
      "Instructional Design",
      "Interactive Learning",
    ],
    links: {
        pdfs: [
        {
          url: "https://drive.google.com/drive/folders/1KrjyqP1jp65G1bFERbzyii1x2BcanxiL",
          label: "Coaching for Managers vILT Instructor Deck",
        },
        {
          url: "https://drive.google.com/file/d/1lrjjJJuBXzlIXdRnlDbOkWnn9022tFzg/view?usp=sharing",
          label: "Coaching for Managers Participant Workbook",
        },
        {
          url: "https://drive.google.com/file/d/1GRUyGg_3s6ZtS70xMVXPCGr-f5xqeoja/view?usp=sharing",
          label: "Dealing With Reactions Infographic",
        },
        {
          url: "https://drive.google.com/file/d/1fqePdkXkkKxLlpzHtaXjwMvH16rIhd-c/view?usp=sharing",
          label: "Decoding Others Infographic",
        },
      ],
    },
  },
  {
    name: "Skillful Collaboration - vILT",
    description:
     `Sample Description: 
      The original Skillful Collaboration module was purely theoretical and heavily text-based, presented in a simple black-and-white format. My role involved redesigning and modernizing the vILT session by integrating interactive elements such as questionnaires, real-world scenarios, self-reflection activities, and relevant videos to boost learner engagement and retention. While the complete session spans four hours, the sample showcases content from the first 60 minutes.`,
    image: "/images/SkillfulCollaboration.jpg",
    skills: [
      "eLearning",
      "Secure Coding",
      "ADDIE Model",
      "Interactive Scenarios",
    ],
    links: {
       pdfs: [
        {
          url: "https://docs.google.com/presentation/d/17JcZnA9OcS8C3TnizsDKiaAptziuGoRF/edit",
          label: "Skillful Collaboration",
        },
       ],
    },
  },
  {
    name: "Customer Centricity For Customer Executives Video",
    description:
      `Challenges
      The scenario highlights key challenges that a customer-centric program must address. A delayed delivery represents a clear service failure that leaves the customer feeling upset, frustrated, and potentially ignored or undervalued. Such situations can easily escalate, leading to customer dissatisfaction and possible churn. The scenario is designed to help learners recognize these consequences and practice identifying the most appropriate and empathetic response to restore customer trust.
      Solution / Program Approach
      To design an engaging and experiential Customer Centricity Program, Genially was used as an interactive authoring platform to simulate real-life customer service scenarios. The goal was to shift learning from theoretical understanding to practical application through immersive storytelling and decision-based learning. 
      Tools and Features Used in Genially:
        Templates and Interactive Layers for scenario branching
        Trigger-based navigation to simulate decision outcomes
        Audio and animation effects to bring conversations to life
        Pop-ups and tooltips for microlearning moments and tips on empathy or ownership
        Score/feedback system to reinforce correct responses and learning takeaways
      Outcome:
      Using Genially transformed the Customer Centricity Program from a static training module into an interactive experiential journey. Participants practiced handling difficult customer conversations in a safe, simulated environment, allowing them to internalize customer-centric values and behaviors effectively.
`,
    image: "/images/CustomerCentricity.jpg",
    skills: ["Articulate 360", "Canva", "Clipchamp", "Adobe Photoshop"],
     links: {
      video: "https://view.genially.com/682988de2e2623a25c99fa16/presentation-customer-service-challenge-delayed-delivery",
    },
  },
  {
    name: "Secure Coding For Coders - eLearning Module",
    description:
      `Description: 
        This self-paced eLearning module is designed for experienced software developers at a mid-sized tech company to build awareness and practical understanding of secure coding practices. The 15–20 minute course incorporates real-world coding examples, interactive scenarios, and knowledge checks. The goal is to help learners recognize security vulnerabilities, apply best practices in their code, and contribute to the development of secure software products.
        Task:
        Designed and developed a Secure Coding Practices for Software Developers learning experience aimed at introducing essential secure coding principles in an engaging, relatable, and action-oriented way. The objective was to help developers recognize vulnerabilities and apply secure coding techniques in real-world scenarios.
      Tools Used:
       -->Articulate Storyline: Developed a branching, interactive eLearning module with layered slides, scenario-based decision points, and contextual feedback to reinforce key concepts.
       -->SCORM Packaging: Published the module in SCORM format for seamless deployment, tracking, and reporting through a Learning Management System (LMS) or SCORM Cloud.
       -->Multimedia Assets: Integrated voiceovers, character-based storytelling, and subtle animations to create a realistic and immersive learning experience.
      Outcome & Impact:
The interactive scenario-based design enhanced learner engagement and comprehension of secure coding principles. Participants demonstrated stronger recall and increased application of secure coding practices in their daily work, resulting in improved code security awareness across the development team.
`,
    image: "/images/SecureCoding.jpg",
    skills: ["Articulate 360", "Canva", "Clipchamp", "Adobe Photoshop"],
     links: {
      video: "https://app.cloud.scorm.com/sc/InvitationConfirmEmail?publicInvitationId=73a72854-fd15-4141-b7f2-760b4519b574",
    },
  },
  {
    name: "Time Management",
    description:
     `Description: 
        This self-paced eLearning module is created for new employees who are adapting to increased
        expectations and managing competing priorities. The 10-minute course focuses on planning
        and prioritization skills. Content is delivered in concise sections with clear headings, minimal
        on-screen text, and frequent interactive elements. The design reflects adult learning
        preferences by presenting information in manageable chunks that can be quickly understood
        and immediately applied.
        Tools Used:
          -->Articulate Storyline: Designed a branching, interactive module featuring layered slides,
          scenario-based decision-making activities, and contextual feedback to reinforce learning
          objectives.
          -->SCORM Packaging: Published the course in SCORM format to enable seamless
          deployment, tracking, and reporting through an LMS or SCORM Cloud.
          -->Multimedia Assets: Incorporated voiceovers, character-driven storytelling, and subtle
          animations to create an engaging and immersive learning experience.
        Outcome & Impact:
          The interactive, scenario-based approach increased learner engagement and strengthened
          understanding of planning and prioritization strategies. Participants demonstrated improved
          recall and greater application of these techniques in their daily work, leading to enhanced
          productivity and time management across teams. `,
    image: "/images/TimeManagement.png",
    skills: ["Articulate 360", "Canva", "Clipchamp", "Adobe Photoshop"],
    links: {
       pdfs: [
        {
          url: "https://app.cloud.scorm.com/sc/user/Course?appId=5FV0LK4E4O&amp;courseId=eLearning_ArtiulateSLdemo_PoojaGf1ea7e3d-db96-4253-9d6e-3d4b739f2cbe",
          label: "Time Management",
        },
       ],
    },
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedProjects = projects.slice(0,5);

  return (
    <section id="work" className="bg-black py-16 px-8">
      <h2 className="cormorant-garamond-light text-5xl text-white mb-8">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className={`relative border border-yellow rounded-lg shadow-lg p-6 bg-black ${
              activeIndex === index ? "h-auto" : "h-54"
            } transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-dark-moss-green`}
            onClick={() => toggleCard(index)}
          >
            {/* Collapsed View */}
            {activeIndex !== index && (
              <div>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-42 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div>
                  <h3 className="cormorant-garamond-regular text-2xl font-bold text-cornsilk">
                    {project.name}
                  </h3>
                  <p className="text-md cormorant-garamond-light text-earth-yellow">
                    {project.type}
                  </p>
                </div>
              </div>
            )}

            {/* Expanded View */}
            {activeIndex === index && (
              <div className="mt-4">
                <h3 className="cormorant-garamond-regular text-2xl font-bold text-cornsilk mb-2">
                  {project.name}
                </h3>

                {/* Scrollable Description */}
                <div className="cormorant-garamond-light text-xl text-white mb-4 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800 whitespace-pre-line">
                  {project.description}
                </div>

                {/* External Links */}
               {project.links && (
                  <div className="mb-4 flex flex-col gap-2">
                    {project.links.video && (
                      <a
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-stroke-green underline hover:text-tigers-eye"
                      >
                        ▶️ Watch Demo Video
                      </a>
                    )}
                    {project.links.pdfs && project.links.pdfs.length > 0 && (
                    <div className="flex flex-col gap-1">
                    {project.links.pdfs.map((pdf, i) => (
                    <a
                    key={i}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stroke-green underline hover:text-tigers-eye"
                    >
                    📄 {pdf.label}
                    </a>
                    ))}
      </div>
    )}
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1 bg-tigers-eye text-cornsilk text-sm font-bold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle Button */}
            <span
              className={`absolute top-4 right-4 text-earth-yellow cursor-pointer ${
                activeIndex === index ? "rotate-45" : "rotate-0"
              } transform transition-transform`}
            >
              +
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
