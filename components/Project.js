import { useState } from "react";

import Image from 'next/image';

const projects = [
  {
    name: "Coaching for Managers (vILT Module)",
    description:
      "A virtual instructor‑led training module within a Manager Development Program, designed to help individual contributors transition into people managers. Through interactive discussions, role‑plays and hands‑on tools, participants learn to move from transactional feedback to developmental coaching, boosting team engagement.",
    image: "/images/proj1.jpg",
    skills: [
      "vILT",
      "Manager Development",
      "Coaching Skills",
      "Instructional Design",
      "Interactive Learning",
    ],
    links: {
      // video: "https://drive.google.com/file/d/1_eHrSr6MhF_JPHOg10y9nXIP0Zh2aF-b/view?usp=drive_link", // replace with actual video URL
      pdf: "https://docs.google.com/presentation/d/1IwUCxs9YHzv0mZHMpY83HjLofbkwvvcw/edit?usp=drive_link&ouid=102834441144403931801&rtpof=true&sd=true",     
    },
  },
  {
    name: "Secure Coding Awareness (eLearning Module)",
    description:
      "Self-paced eLearning module designed for experienced software developers to build awareness of secure coding practices. The 15–20 min course includes real-world examples, interactive scenarios, and knowledge checks based on the ADDIE model. Learners recognize vulnerabilities, apply best practices, and support secure software development.",
    image: "/images/proj2.jpg", // Add a relevant placeholder image in /public/images
    skills: [
      "eLearning",
      "Secure Coding",
      "ADDIE Model",
      "Interactive Scenarios",
    ],
    links: {
      video: "https://drive.google.com/file/d/1_eHrSr6MhF_JPHOg10y9nXIP0Zh2aF-b/view?usp=drive_link", // replace with actual video URL
      pdf: "https://drive.google.com/file/d/1yR1p7Jxj1Itlys0DO0_OBZRgWQ7mkve5/view?usp=drive_link",     
    },
  },
  {
  name: "Coaching for Success (eLearning Module)",
  description:
    "This 10–15 minute self-paced eLearning module was developed as part of an academic project to digitally extend the 'Coaching for Success' vILT program. Targeted at managers, the module reinforces key coaching concepts introduced in the live training. Built using tools like Articulate 360, Canva, Clipchamp, and Photoshop, it serves as a practical reinforcement and knowledge retention tool.",
  image: "/images/proj3.jpg", // Add or replace with your actual image path
  skills: [

    "Articulate 360",
    
    "Canva",
    "Clipchamp",
    "Adobe Photoshop"
  ],
  // links: {
  //     video: "https://drive.google.com", // replace with actual video URL
  //     pdf: "https://drive.google.com",     
  //   },
  },
];

const Projects = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle expand
  };

  // Limit the displayed projects to 3
  const displayedProjects = projects.slice(0, 3);

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
            {/* Project Image */}
            
            <Image
      src={project.image}
      alt={project.name}
      width={500} // Add appropriate width
      height={300} // Add appropriate height
      className="w-full h-42 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
      priority // Add this for above-the-fold images
    />
            {/* Project Name and Type */}
            <div>
              <h3 className="cormorant-garamond-regular text-2xl font-bold text-cornsilk">
                {project.name}
              </h3>
              <p className="text-md cormorant-garamond-light text-earth-yellow">{project.type}</p>
            </div>
          </div>
        )}

        {/* Expanded View */}
        {activeIndex === index && (
          <div className="mt-4">
            <h3 className="cormorant-garamond-regular text-2xl font-bold text-cornsilk mb-2">
              {project.name}
            </h3>
            <p className="cormorant-garamond-light text-xl text-black mb-4">
              {project.description}
            </p>

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
                {project.links.pdf && (
                  <a
                    href={project.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stroke-green underline hover:text-tigers-eye"
                  >
                    📄 View Project PDF/PPT
                  </a>
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
      {/* "See All" Link - Uncomment if more than 3 projects listed */}
      {/* <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/allProjects")}
          className="px-6 py-2 bg-earth-yellow text-pakistan-green font-bold text-lg rounded-lg hover:bg-tigers-eye transition"
        >
            
          See All Projects
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
