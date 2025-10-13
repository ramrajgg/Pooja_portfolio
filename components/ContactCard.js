import Image from 'next/image';
import Link from 'next/link';

export default function ProfileSection() {
  return (
    
    <section id="about" className="bg-black text-white py-16 px-8 md:px-16 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Introduction Text */}
        <div>
            <div className="bg-black text-white cormorant-garamond-light text-6xl md:text-8xl mb-4">
                Hello,
            </div>
            <div className="bg-black text-yellow cormorant-garamond-light text-6xl md:text-8xl mb-4">
                I’m Pooja
            </div>
            <p className="text-cornsilk cormorant-garamond-light text-lg md:text-2xl mb-6 leading-relaxed">
                With over a decade in L&D, I design impactful learning journeys that engage, empower, and deliver results. From leadership development to blended learning transitions, I bring strategic thinking and creative energy to every project.
                </p>
                <p className="text-cornsilk cormorant-garamond-light text-lg md:text-2xl mb-6 leading-relaxed">I specialize in tools like 
                Clipchamp, Adobe PS, PowerPoint, H5P, Vyond, Articulate 360 and Rise to craft memorable, learner-centered content.</p>
            
            
                <Link
                href="https://www.linkedin.com/in/pooja-gupta-53b88318/"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Ensures security for external links
                className="px-4 py-2 bg-yellow text-black text-lg font-bold rounded-full"
              >
                LinkedIn
              </Link>
            
        </div>

        {/* Right Column: Profile Card */}
<div
  className="relative"
  style={{
    width: "1000vw", // Adjust card width
    maxWidth: "400px", // Ensure the card doesn't grow too large
    margin: "0 auto", // Center align the card
  }}
>
  {/* Profile Image */}
  <div
    className="absolute top-[-300px] left-1/2 transform -translate-x-1/2"
    style={{
      width: "600px", // Adjust image container width
      height: "600px", // Adjust image container height
    }}
  >
    
    <Image
      src="/images/PoojaImage.jpg"
      alt="Reeya"
      layout="responsive"
      width={600} // Add appropriate width
      height={300} // Add appropriate height
      priority // Add this for above-the-fold images
    />
  </div>

 
    
  </div>
</div>



      
    </section>
  );
}
