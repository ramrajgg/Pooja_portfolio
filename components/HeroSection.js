import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
    <section className=" bg-cream px-6 py-16 md:py-24 text-black ">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Tagline + Blurb */}
        <div className="w-full lg:w-3/5 text-right lg:text-right">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Making<br />
            Learning <br />
            <span className="text-black">Easy.</span>
          </h1>
          <p className="mt-6 text-2xl  font-serif xl:text-right">
            From leadership development to sales enablement, I craft impactful, learner-centered solutions that drive business growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full lg:w-2/5 flex justify-center">
          

          {/* Profile Image */}
          <div className="relative flex justify-center flex-1">
            <Image
            src="/images/PoojaHeroImage.jpg"
            alt="Pooja Gupta"
            width={500}
            height={500}
            className="relative z-10 object-cover rounded-md mt-6 lg:mt-0"
          />
          </div>

        
        </div>
      </div>

      {/* Stats Row */}
       {/* Stats Row */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6  lg:text-right">
            <div>
              <h2 className="text-4xl font-serif font-bold">10+ Years</h2>
              <p className="text-lg sm:text-right mt-2 font-serif">Experience transforming corporate learning across industries</p>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold">25+ Projects</h2>
              <p className="text-lg font-serif sm:text-right mt-2">Designed and delivered solutions in finance, healthcare & consulting</p>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold">4 Org</h2>
              <p className="text-lg font-serif text-md sm:text-right mt-2">Contributed to L&D success in diverse business environments</p>
            </div>
          </div>
        
    </section>
    </div>
  );
}
