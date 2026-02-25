import { useParallax } from '../hooks/useScrollAnimations';

const stats = [
  { number: '+50', label: 'Eventos' },
  { number: '+30', label: 'Marcas' },
  { number: '+5', label: 'Anos Exp.' },
  { number: '+100', label: 'Colaboraciones' },
];

export default function About() {
  const parallaxRef = useParallax(0.08);

  return (
    <section id="sobre-mi" className="relative overflow-hidden">
      {/* Ambient blur orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gold/[0.015] rounded-full blur-[120px]" />

      {/* Top glass divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent" />

      <div className="py-28 md:py-40 bg-dark-100 noise relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-24 reveal">
            <p className="text-[10px] font-body font-medium tracking-mega uppercase text-gold/70 mb-5">Sobre Mi</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-cream leading-[1.1]">
              Detras de la <span className="italic gold-text">camara</span>
            </h2>
            <div className="gold-line mx-auto mt-8 animate-expand-line" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
            {/* Photo with glass frame */}
            <div className="reveal-left">
              <div className="relative" ref={parallaxRef}>
                {/* Glass frame with real photo */}
                <div className="relative overflow-hidden aspect-[3/4] glass glow-gold">
                  <img
                    src="/images/portafolio/stephannyCabas_23.03.47.jpeg"
                    alt="Stephanny Cabas - Sobre Mi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating glass badge */}
                <div className="absolute -bottom-6 -right-6 glass-gold glow-gold px-6 py-4 animate-float">
                  <p className="font-display text-2xl italic gold-text">SC</p>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h3 className="reveal text-2xl md:text-3xl lg:text-4xl font-display font-light text-cream mb-10 leading-[1.3]">
                Una apasionada por conectar
                <span className="italic gold-text"> marcas con personas</span>
              </h3>

              <p className="reveal text-cream/40 text-sm leading-[2] mb-6">
                Soy Stephanny Cabas, modelo profesional, promotora y asesora de imagen con mas de 5 anos
                de trayectoria en la industria. Mi enfoque combina profesionalismo, versatilidad y una
                presencia que conecta genuinamente con cada audiencia.
              </p>

              <p className="reveal text-cream/40 text-sm leading-[2] mb-14">
                He colaborado con marcas reconocidas en campanas publicitarias, eventos de alto perfil
                y producciones editoriales. Cada proyecto es una oportunidad para crear impacto visual
                y elevar la imagen de marca.
              </p>

              {/* Stats with glass cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 stagger">
                {stats.map((stat) => (
                  <div key={stat.label} className="reveal-scale glass-card p-5 text-center">
                    <p className="text-2xl md:text-3xl font-display font-light gold-text mb-2">{stat.number}</p>
                    <p className="text-cream/30 text-[9px] tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glass divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent" />
    </section>
  );
}
