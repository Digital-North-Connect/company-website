interface PageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 6%',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '24px',
            }}
          >
            {title.split(' ').map((word, i) => {
              if (word.toLowerCase() === 'north' || word.toLowerCase() === 'star') {
                return (
                  <span key={i} className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {word}{' '}
                  </span>
                );
              }
              return word + ' ';
            })}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#cbd5e1',
              lineHeight: '1.75',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
