import Link from 'next/link';
import Reveal from './Reveal';

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '/Resume.pdf', download: 'Pooja_Gupta_Resume.pdf' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink-800 border-t border-line overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[140px]" />

      {/* CTA */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Let&apos;s Collaborate</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-bold tracking-tightest text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.95]">
            Let&apos;s build learning<br />
            that <span className="text-gradient-gold">actually works.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <Link
            href="https://www.linkedin.com/in/pooja-gupta-53b88318/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-sans font-medium rounded-full hover:bg-gold-soft transition-colors duration-300"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-line">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/home" className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
            <span className="font-display text-base font-semibold text-white">Pooja Gupta</span>
          </Link>

          <nav className="flex gap-7">
            {navLinks.map(({ label, href, download }) => (
              <Link
                key={label}
                href={href}
                download={download}
                className="font-sans text-sm text-muted hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          <p className="font-sans text-xs text-muted/60">
            © {new Date().getFullYear()} Pooja Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
