import Image from 'next/image';
import Reveal from './Reveal';

const stats = [
  { value: '10+', label: 'Years transforming corporate learning' },
  { value: '25+', label: 'Projects across finance, healthcare & consulting' },
  { value: '4', label: 'Organizations driving L&D success' },
];

const marquee = [
  'Articulate 360', 'Rise', 'Storyline', 'Adobe Captivate', 'Vyond',
  'Genially', 'H5P', 'Clipchamp', 'Photoshop', 'PowerPoint',
];

export default function HeroSection() {
  return (
    <section className="relative bg-ink overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-gold/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -left-24 w-[360px] h-[360px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-ink-800 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="font-sans text-xs tracking-widest uppercase text-muted">
                  Instructional Designer &amp; L&amp;D Strategist
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display font-bold tracking-tightest text-white leading-[0.92] text-6xl sm:text-7xl xl:text-8xl">
                Making<br />
                Learning<br />
                <span className="text-gradient-gold">Easy.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 font-sans text-lg text-muted leading-relaxed max-w-xl">
                From leadership development to sales enablement, I craft impactful,
                learner-centered experiences that drive measurable business results.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink font-sans font-medium rounded-full hover:bg-gold-soft transition-colors duration-300"
                >
                  View Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center px-7 py-3.5 border border-line text-white font-sans rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  About Me
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold/30 to-transparent blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-line">
                <Image
                  src="/images/PoojaHeroImage.jpg"
                  alt="Pooja Gupta"
                  width={520}
                  height={560}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-line pt-12">
          {stats.map(({ value, label }, i) => (
            <Reveal key={value} delay={i * 100}>
              <div className="flex items-start gap-4">
                <span className="font-display text-5xl font-bold text-gradient-gold leading-none">{value}</span>
                <span className="font-sans text-sm text-muted leading-snug max-w-[14rem] pt-1">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tool marquee */}
      <div className="relative border-y border-line py-5 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((tool, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display text-xl text-muted/60 whitespace-nowrap">
              {tool}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
