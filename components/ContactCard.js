import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

const traits = ['Strategic Thinker', 'Learner-Focused', 'Industry-Spanning'];

export default function ProfileSection() {
  return (
    <section id="about" className="relative bg-ink-800 py-28 px-6 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <Reveal className="order-2 md:order-1 relative">
          <div className="absolute -inset-3 rounded-3xl border border-gold/30" />
          <div className="relative rounded-3xl overflow-hidden border border-line">
            <Image
              src="/images/PoojaImage.jpg"
              alt="Pooja Gupta"
              width={460}
              height={540}
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden sm:flex flex-col gap-2">
            {traits.map((t, i) => (
              <span
                key={t}
                className="font-sans text-xs px-3 py-1.5 rounded-full bg-ink border border-gold/40 text-gold-soft shadow-lg"
                style={{ marginRight: `${i * 14}px` }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-5">About Me</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold tracking-tightest text-white text-5xl md:text-6xl leading-[0.95] mb-8">
              Hello, I&apos;m <span className="text-gradient-gold">Pooja</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-sans text-lg text-muted leading-relaxed mb-5">
              With over a decade in L&amp;D, I design impactful learning journeys that engage,
              empower, and deliver results. From leadership development to blended learning
              transitions, I bring strategic thinking and creative energy to every project.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-lg text-muted leading-relaxed mb-9">
              I specialize in tools like Clipchamp, Adobe PS, PowerPoint, H5P, Vyond,
              Articulate 360 and Rise to craft memorable, learner-centered content.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <Link
              href="https://www.linkedin.com/in/pooja-gupta-53b88318/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink font-sans font-medium rounded-full hover:bg-gold-soft transition-colors duration-300"
            >
              Connect on LinkedIn
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
