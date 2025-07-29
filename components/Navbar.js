import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-2 bg-cream bg-opacity-90 fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Left Section: Name */}
      <Link
        href="/home"
        className="cormorant-garamond-regular text-xl text-yellow hover:text-black transition duration-300"
      >
        Pooja Gupta
      </Link>

      {/* Right Section: Navigation Links */}
      <ul className="flex space-x-6 cormorant-garamond-regular text-xl text-yellow">
        <li>
        <Link
        href="/home"
        className="cormorant-garamond-regular text-xl text-yellow hover:text-black transition duration-300"
      >
        Home
      </Link>
      </li>
      <li>
          <Link
            href="#about"
            className="hover:text-black transition duration-300"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/Resume.pdf"
            className="hover:text-black transition duration-300"
            download="Pooja_Gupta_Resume.pdf"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="#work"
            className="hover:text-black transition duration-300"
          >
            Work
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
