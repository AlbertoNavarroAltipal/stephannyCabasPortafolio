import { socialLinks } from '../data/social';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark relative noise">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Large brand text - Apple style */}
        <div className="text-center mb-20 reveal">
          <a href="#inicio" className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream/[0.04] hover:text-cream/[0.08] transition-colors duration-1000 tracking-wide">
            Stephanny Cabas
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* About */}
          <div>
            <p className="text-cream/70 font-display text-lg tracking-wide mb-4">Stephanny</p>
            <p className="text-cream/25 text-xs leading-[2]">
              Modelo, promotora y asesora de imagen profesional. Elevando marcas a traves de presencia y estilo.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <p className="text-[9px] font-body tracking-mega uppercase text-gold/50 mb-6">Navegacion</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-cream/25 hover:text-cream/60 text-xs tracking-wider uppercase transition-colors duration-500">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <p className="text-[9px] font-body tracking-mega uppercase text-gold/50 mb-6">Social</p>
            <div className="flex md:justify-end gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass flex items-center justify-center text-cream/15 hover:text-gold hover:bg-gold/5 transition-all duration-700"
                  aria-label={social.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-cream/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/15 text-[10px] tracking-wider uppercase">
            &copy; {currentYear} Stephanny Cabas
          </p>
          <p className="text-cream/10 text-[10px] tracking-wider">
            by <span className="text-gold/30">Engynex</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
