export const Hero: React.FC = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 20%, #10b981 40%, #3b82f6 60%, #7c3aed 80%, #1e293b 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '64px',
    }}>
      <svg className="constellation-svg" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.35,
      }}>
        <line x1="3%" y1="94%" x2="12%" y2="79%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="31%" y1="96%" x2="44%" y2="82%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="59%" y1="91%" x2="71%" y2="73%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="87%" y1="93%" x2="95%" y2="77%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        <line x1="12%" y1="79%" x2="7%" y2="61%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="12%" y1="79%" x2="23%" y2="64%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="44%" y1="82%" x2="52%" y2="67%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="71%" y1="73%" x2="79%" y2="58%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="95%" y1="77%" x2="91%" y2="59%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        <line x1="7%" y1="61%" x2="16%" y2="43%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="23%" y1="64%" x2="33%" y2="51%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="52%" y1="67%" x2="58%" y2="48%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="79%" y1="58%" x2="73%" y2="39%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="91%" y1="59%" x2="84%" y2="44%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        <line x1="16%" y1="43%" x2="27%" y2="31%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="33%" y1="51%" x2="39%" y2="34%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="58%" y1="48%" x2="50%" y2="18%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="73%" y1="39%" x2="66%" y2="27%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="84%" y1="44%" x2="73%" y2="39%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        <line x1="27%" y1="31%" x2="50%" y2="18%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="39%" y1="34%" x2="50%" y2="18%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
        <line x1="66%" y1="27%" x2="50%" y2="18%" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />

        <circle cx="3%" cy="94%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="31%" cy="96%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="59%" cy="91%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="87%" cy="93%" r="5" fill="rgba(255, 255, 255, 0.85)" />

        <circle cx="12%" cy="79%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="44%" cy="82%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="71%" cy="73%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="95%" cy="77%" r="5" fill="rgba(255, 255, 255, 0.85)" />

        <circle cx="7%" cy="61%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="23%" cy="64%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="52%" cy="67%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="79%" cy="58%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="91%" cy="59%" r="5" fill="rgba(255, 255, 255, 0.85)" />

        <circle cx="16%" cy="43%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="33%" cy="51%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="58%" cy="48%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="73%" cy="39%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="84%" cy="44%" r="5" fill="rgba(255, 255, 255, 0.85)" />

        <circle cx="27%" cy="31%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="39%" cy="34%" r="5" fill="rgba(255, 255, 255, 0.85)" />
        <circle cx="66%" cy="27%" r="5" fill="rgba(255, 255, 255, 0.85)" />

        <defs>
          <radialGradient id="starGlow">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="20%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="40%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>

        <circle className="star-glow" cx="50%" cy="18%" r="70" fill="url(#starGlow)" />

        <polygon
          points="50,8 51,16 50,18 49,16"
          fill="rgba(255, 255, 255, 1)"
        />
        <polygon
          points="50,28 51,20 50,18 49,20"
          fill="rgba(255, 255, 255, 1)"
        />
        <polygon
          points="38,18 46,19 50,18 46,17"
          fill="rgba(255, 255, 255, 1)"
        />
        <polygon
          points="62,18 54,19 50,18 54,17"
          fill="rgba(255, 255, 255, 1)"
        />

        <polygon
          points="58,11 52,16 50,18 51,19"
          fill="rgba(255, 255, 255, 0.95)"
        />
        <polygon
          points="58,25 52,20 50,18 51,17"
          fill="rgba(255, 255, 255, 0.95)"
        />
        <polygon
          points="42,25 48,20 50,18 49,17"
          fill="rgba(255, 255, 255, 0.95)"
        />
        <polygon
          points="42,11 48,16 50,18 49,19"
          fill="rgba(255, 255, 255, 0.95)"
        />

        <circle cx="50%" cy="18%" r="5" fill="rgba(255, 255, 255, 1)" />

        <circle cx="50%" cy="18%" r="8" fill="rgba(255, 255, 255, 0.6)" />
      </svg>

      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '10%',
          width: '200px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, #10b981 20%, #34d399 50%, #fb7185 85%, transparent 100%)',
          filter: 'blur(40px)',
          animation: 'auroraDance1 12s ease-in-out infinite',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '0',
          left: '35%',
          width: '180px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, #34d399 15%, #10b981 45%, #ec4899 80%, transparent 100%)',
          filter: 'blur(45px)',
          animation: 'auroraDance2 15s ease-in-out infinite 2s',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '0',
          right: '25%',
          width: '220px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, #3b82f6 18%, #7c3aed 55%, #10b981 88%, transparent 100%)',
          filter: 'blur(50px)',
          animation: 'auroraDance3 18s ease-in-out infinite 4s',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '0',
          right: '8%',
          width: '190px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, #10b981 22%, #34d399 60%, #a78bfa 90%, transparent 100%)',
          filter: 'blur(42px)',
          animation: 'auroraDance1 14s ease-in-out infinite 6s',
        }}></div>

        <div style={{
          position: 'absolute',
          top: '0',
          left: '55%',
          width: '160px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, #60a5fa 25%, #10b981 50%, #fb7185 82%, transparent 100%)',
          filter: 'blur(48px)',
          animation: 'auroraDance2 16s ease-in-out infinite 8s',
        }}></div>
      </div>

      <style>{`
        @keyframes auroraDance1 {
          0%, 100% {
            transform: translateX(0) scaleX(1);
            opacity: 0.8;
          }
          25% {
            transform: translateX(-30px) scaleX(1.15);
            opacity: 1;
          }
          50% {
            transform: translateX(20px) scaleX(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translateX(-15px) scaleX(1.1);
            opacity: 0.9;
          }
        }
        @keyframes auroraDance2 {
          0%, 100% {
            transform: translateX(0) scaleX(1);
            opacity: 0.7;
          }
          30% {
            transform: translateX(40px) scaleX(1.2);
            opacity: 0.95;
          }
          60% {
            transform: translateX(-25px) scaleX(0.85);
            opacity: 0.65;
          }
        }
        @keyframes auroraDance3 {
          0%, 100% {
            transform: translateX(0) scaleX(1);
            opacity: 0.75;
          }
          33% {
            transform: translateX(-35px) scaleX(1.18);
            opacity: 1;
          }
          66% {
            transform: translateX(30px) scaleX(0.92);
            opacity: 0.8;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          p {
            font-size: 18px !important;
          }
          .constellation-svg {
            opacity: 0.55 !important;
          }
          .star-glow {
            r: 100;
          }
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            color: '#ffffff',
            textShadow: '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(59, 130, 246, 0.4), 0 4px 20px rgba(0, 0, 0, 0.5)',
          }}>
            Find Your North Star. Connect to the Right Solutions.
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#e0f2fe', lineHeight: '1.75', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Every business has a guiding vision—a North Star that defines where you're heading. We help you navigate the path forward by connecting you with enterprise-grade software and cloud solutions that align with your goals.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:digital.north.connect@gmail.com"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #10b981, #34d399)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), 0 10px 15px -3px rgb(0 0 0 / 0.3)',
                transition: 'all 0.3s',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.6), 0 15px 25px -5px rgb(0 0 0 / 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4), 0 10px 15px -3px rgb(0 0 0 / 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Connect With Us
            </a>
            <a
              href="#services"
              style={{
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.2)',
                transition: 'all 0.3s',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.3), 0 15px 25px -5px rgb(0 0 0 / 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Solutions
            </a>
          </div>

          <div style={{ marginTop: '80px', animation: 'bounce 1s infinite' }}>
            <a href="#services" style={{ display: 'inline-block' }}>
              <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
