import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '/Resume.pdf', download: 'Pooja_Gupta_Resume.pdf' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/home" className="group flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display text-lg font-semibold tracking-tightest text-white">
            Pooja Gupta
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map(({ label, href, download }) => (
            <li key={label}>
              <Link
                href={href}
                download={download}
                className="font-sans text-sm tracking-wide text-muted hover:text-white transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <Link
            href="https://www.linkedin.com/in/pooja-gupta-53b88318/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-ink bg-gold px-4 py-2 rounded-full hover:bg-gold-soft transition-colors duration-200"
          >
            Let's Talk
          </Link>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md border-t border-line px-6 py-5 space-y-4">
          {links.map(({ label, href, download }) => (
            <Link
              key={label}
              href={href}
              download={download}
              onClick={() => setMenuOpen(false)}
              className="block font-display text-2xl text-white hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
