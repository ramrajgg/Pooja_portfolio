import { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
      name: 'Wildlife Detector',
      description:
        'Web application for AI-powered species identification. Detects wildlife species from uploaded images, provides real-time species  identification offering users educational insights post-identification',
      type: 'Personal Project',
      image: '/images/wildlife.webp',
      github: 'https://github.com/yourusername/portfolio-website',
      skills: ['Next.js', 'Tailwind CSS', 'AWS Lambda', 'S3', 'DynamoDB', 'Rekognition'],
    },
    {
      name: "911 Call Analysis Dashboard",
      description:
        "Interactive dashboard analyzing over 5 million 911 call records to uncover patterns, trends, and insights in emergency services. Visualizations include hourly and daily call trends, borough-wise distribution, common emergency types, and geospatial hotspots.",
      type: "Personal Project",
      image: "/images/911Analysis_Tableau.png",
      github: 'https://github.com/Reeya123/911_Dashboard',
      skills: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Tableau",
        "Data Cleaning",
        "ETL",
        "Statistical Analysis",
        "Geospatial Visualization",
      ],
    },
    {
      name: 'Tech Career Guide',
      description:
        'A roadmap tool to provide a centralized resource for navigating technology career paths. Features-  detailed roadmaps for roles and skills, Integrated topic-specific coding exercises, listed resources(articles and videos)',
      type: 'Academic Project',
      image: '/images/TechCareer.png',
      github: 'https://github.com/Reeya123/Tech-Career-Guide',
      skills: ['React.js', 'TypeScript', 'Flask', 'MongoDB', 'Python'],
    },
    
    {
      name: 'HIVE Lab - George Washington University ',
      description:
        'Maintained and enhanced the research lab’s website by creating new pages and components, ensuring responsiveness and accessibility.',
      type: 'Professional Project',
      image: '/images/Hive.png',
      github: 'https://hivelab.biochemistry.gwu.edu',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'UI/UX Design'],
    },
    {
      name: 'Music Genre Prediction',
      description:
        'Python based ML model for music genre prediction. Processed audio features for over 4000 tracks utilizing Spotipy library to connect to the Spotify API.',
      type: 'Personal Project',
      image: '/images/MusicGenrePrediction.png',
      github: 'https://github.com/Reeya123/Music-Genre-prediction-ML',
      skills: ['Python', 'Machine Learning'],
    },
    {
      name: 'Virtual Air Canvas',
      description:
        'Developed a motion-to-text converter utilizing object tracking and computer vision allowing users to write in air. Research paper accepted and published in IEEE GCAT 2022',
      type: 'Academic Project',
      image: '/images/VirtualCanvas.png',
      github: 'https://github.com/Reeya123/Vitual_Air_Canvas',
      skills: ['Python', 'OpenCV'],
    },
  
    {
      name: 'Ghoul Hunter - Android Game',
      description:
        'A 4.9-star-rated game developed and deployed on the Google Playstore, achieving 100+ downloads. The game was designed using Unity and C# with creative assets built in Illustrator.',
      type: 'Personal Project',
      image: '/images/GhoulHunter.png', 
      github: 'https://teknack.itch.io/ghoul-hunter',
      skills: ['Unity', 'C#', 'Illustrator'],
  },
  {
      name: 'Lex Chatbot Integration with WhatsApp',
      description:
      'Designed a mental health chatbot using AWS Lex, integrating Cognitive Behavioral Therapy (CBT) techniques to enhance user experience. Successfully deployed the chatbot within WhatsApp using agile methodologies.',
      
      type: 'Personal Project',
      image: '/images/chatbot.png', 
      github: 'https://github.com/yourusername/portfolio-website',
      skills: ['AWS Lex', 'Twilio','CBT Integration','Agile Methodologies'],
  },
  ];

export default function AllProjects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle collapsible card
  };

  return (
    <section className="bg-pakistan-green text-cornsilk py-16 px-8 md:px-16">
        <Navbar />
      <h2 className="text-4xl font-serif text-earth-yellow mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative border border-earth-yellow rounded-lg shadow-lg overflow-hidden bg-cornsilk ${
              activeIndex === index ? 'h-auto' : 'h-64'
            } transition-all duration-300`}
            onClick={() => toggleCard(index)}
          >
            {/* Project Image */}
            
            <Image
      src={project.image}
      alt={project.name}
      className="w-full h-40 object-cover"
      width={600} // Add appropriate width
      height={300} // Add appropriate height
      priority // Add this for above-the-fold images
    />

            {/* Card Header */}
            <div className="px-6 py-4 flex justify-between items-center bg-dark-moss-green text-cornsilk cursor-pointer">
              <div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-earth-yellow">{project.type}</p>
              </div>
              <span
                className={`text-earth-yellow text-2xl transform ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                } transition-transform`}
              >
                +
              </span>
            </div>

            {/* Collapsible Content */}
            {activeIndex === index && (
              <div className="px-6 py-4">
                <p className="text-pakistan-green mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1 bg-tigers-eye text-cornsilk text-sm font-bold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-yellow font-bold hover:underline"
              >
                View on GitHub
              </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
