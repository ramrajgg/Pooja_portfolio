import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProfileSection from '../components/ContactCard';
import Experience from '../components/Experience';
import EducationAndTechStack from '../components/TechStack';
import Projects from '../components/Project';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <Experience />
      <Projects />
      <EducationAndTechStack />
      <Footer />
    </div>
  );
}
