// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContactCard from '../components/ContactCard';

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Section */}
      <ContactCard />
    </div>
  );
}
