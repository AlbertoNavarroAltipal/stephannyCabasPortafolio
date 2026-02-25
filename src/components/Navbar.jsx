import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'glass-dark border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="font-display text-lg tracking-ultra uppercase text-cream/90 hover:text-gold transition-colors duration-500"
          >
            Stephanny
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[10px] font-body font-medium tracking-mega uppercase text-cream/40 hover:text-cream transition-colors duration-500"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/60 transition-all duration-700 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile btn */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className="relative w-5 h-3">
              <span className={`absolute top-0 left-0 w-full h-[1px] bg-cream transition-all duration-500 ${menuOpen ? 'rotate-45 top-1.5' : ''}`} />
              <span className={`absolute top-1.5 left-0 w-full h-[1px] bg-cream transition-all duration-500 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`absolute top-3 left-0 w-full h-[1px] bg-cream transition-all duration-500 ${menuOpen ? '-rotate-45 top-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu with blur */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Blurred background */}
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`font-display text-3xl text-cream/80 hover:text-gold transition-all duration-700 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <div
            className={`gold-line mt-6 transition-all duration-1000 ${
              menuOpen ? 'w-[60px] opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '550ms' : '0ms' }}
          />
        </div>
      </div>
    </nav>
  );
}
