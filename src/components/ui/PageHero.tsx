interface PageHeroProps {
  title: string;
  subtitle: string;
  paddingTop?: string;
  paddingBottom?: string;
  titleSize?: string;
  subtitleSize?: string;
  maxWidth?: string;
  showAurora?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  paddingTop = '120px',
  paddingBottom = '80px',
  titleSize = '48px',
  subtitleSize = '20px',
  maxWidth = '900px',
  showAurora = true
}) => {
  return (
    <section style={{
      paddingTop,
      paddingBottom,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {showAurora && (
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '20%',
            width: '300px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent 0%, #10b981 50%, transparent 100%)',
            filter: 'blur(80px)',
          }}></div>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '20%',
            width: '300px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent 0%, #3b82f6 50%, transparent 100%)',
            filter: 'blur(80px)',
          }}></div>
        </div>
      )}

      <div style={{
        maxWidth,
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: titleSize,
          fontWeight: '700',
          marginBottom: '20px',
          textShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
        }}>
          {title}
        </h1>
        <p style={{ fontSize: subtitleSize, color: '#cbd5e1', lineHeight: '1.7' }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};
