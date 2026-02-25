import { useScrollFade, useScrollBlur } from '../hooks/useScrollAnimations';
import { socialLinks } from '../data/social';

export default function Hero() {
  const fadeRef = useScrollFade(0, 600);
  const blurRef = useScrollBlur(12, 800);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark noise">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/portafolio/stephannyCabas_11.23.53.jpeg"
          alt="Stephanny Cabas"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
      </div>

      {/* Ambient orbs with blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[120px]" />

      {/* Content - fades and blurs on scroll (Apple style) */}
      <div ref={fadeRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div ref={blurRef}>
          {/* Tagline */}
          <div className="reveal flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
            <p className="text-[10px] font-body font-medium tracking-mega uppercase text-gold/70">
              Modelo &amp; Promotora
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Name with text reveal */}
          <h1 className="reveal-blur font-display font-light text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] text-cream leading-[0.85] tracking-wide mb-4">
            Stephanny
          </h1>
          <h1 className="reveal-blur font-display italic font-light text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] animate-shimmer leading-[0.85] mb-12">
            Cabas
          </h1>

          {/* Role tags with glass cards */}
          <div className="reveal flex items-center justify-center gap-3 sm:gap-4 mb-16">
            {['Asesora', 'Promotora', 'Modelo'].map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="inline-block w-[3px] h-[3px] rounded-full bg-gold/40 mx-3 sm:mx-4 align-middle" />}
                <span className="text-[10px] sm:text-[11px] font-body tracking-ultra uppercase text-cream/40">
                  {role}
                </span>
              </span>
            ))}
          </div>

          {/* CTA - glass button */}
          <div className="reveal-slow">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-10 py-4 glass-gold text-gold text-[10px] font-body font-medium tracking-mega uppercase hover:bg-gold/10 transition-all duration-700 glow-gold-hover"
            >
              Descubre mas
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social - vertical with glass bg */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-10">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-cream/10" />
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-cream/20 hover:text-gold transition-all duration-700 hover:scale-110" aria-label={s.label}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
              <path d={s.path} />
            </svg>
          </a>
        ))}
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-cream/10" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/30 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
