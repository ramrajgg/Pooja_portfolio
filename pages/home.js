// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ContactCard';
import Experience from '../components/Experience';
import EducationAndTechStack from '../components/TechStack';
import Projects from '../components/Project';
export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Section */}
      <ProfileSection />
      <Experience />
      <Projects />
      <EducationAndTechStack />
    </div>
  );
}
