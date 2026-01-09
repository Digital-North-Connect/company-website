import { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star constellation points
    const stars: { x: number; y: number; size: number; opacity: number; twinkleSpeed: number }[] = [];
    const numStars = 80;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // North star position
    const northStar = {
      x: canvas.width * 0.5,
      y: canvas.height * 0.15,
    };

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw connections from some stars toward north star
      stars.forEach((star, i) => {
        if (i % 4 === 0) {
          const gradient = ctx.createLinearGradient(star.x, star.y, northStar.x, northStar.y);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(northStar.x, northStar.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Draw stars with twinkle effect
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 100) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Draw North Star with glow
      const glowSize = 60 + Math.sin(time * 2) * 10;
      const northStarGradient = ctx.createRadialGradient(
        northStar.x, northStar.y, 0,
        northStar.x, northStar.y, glowSize
      );
      northStarGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      northStarGradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
      northStarGradient.addColorStop(0.3, 'rgba(96, 165, 250, 0.4)');
      northStarGradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.2)');
      northStarGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(northStar.x, northStar.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = northStarGradient;
      ctx.fill();

      // Draw North Star rays
      const rayLength = 25 + Math.sin(time * 3) * 5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 2;

      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI / 2) + time * 0.1;
        ctx.beginPath();
        ctx.moveTo(northStar.x, northStar.y);
        ctx.lineTo(
          northStar.x + Math.cos(angle) * rayLength,
          northStar.y + Math.sin(angle) * rayLength
        );
        ctx.stroke();
      }

      // Diagonal rays
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI / 2) + Math.PI / 4 + time * 0.1;
        ctx.beginPath();
        ctx.moveTo(northStar.x, northStar.y);
        ctx.lineTo(
          northStar.x + Math.cos(angle) * (rayLength * 0.7),
          northStar.y + Math.sin(angle) * (rayLength * 0.7)
        );
        ctx.stroke();
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(northStar.x, northStar.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div
          className="absolute top-0 left-[5%] w-[300px] h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.3) 20%, rgba(16, 185, 129, 0.4) 50%, rgba(139, 92, 246, 0.3) 80%, transparent 100%)',
            filter: 'blur(60px)',
            animation: 'aurora 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-0 left-[30%] w-[250px] h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(16, 185, 129, 0.35) 25%, rgba(6, 182, 212, 0.4) 50%, rgba(59, 130, 246, 0.3) 75%, transparent 100%)',
            filter: 'blur(70px)',
            animation: 'aurora 18s ease-in-out infinite 3s',
          }}
        />
        <div
          className="absolute top-0 right-[20%] w-[280px] h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(139, 92, 246, 0.3) 20%, rgba(59, 130, 246, 0.4) 55%, rgba(16, 185, 129, 0.3) 85%, transparent 100%)',
            filter: 'blur(65px)',
            animation: 'aurora 20s ease-in-out infinite 6s',
          }}
        />
        <div
          className="absolute top-0 right-[5%] w-[220px] h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.3) 30%, rgba(139, 92, 246, 0.35) 60%, rgba(16, 185, 129, 0.25) 90%, transparent 100%)',
            filter: 'blur(55px)',
            animation: 'aurora 16s ease-in-out infinite 9s',
          }}
        />
      </div>

      {/* Animated Canvas for Stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '25vh 6% 80px 6%',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: '600',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '32px',
              letterSpacing: '-0.02em',
            }}
          >
            Find Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              North Star
            </span>
            <br />
            Connect to the Right Solutions
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              lineHeight: '1.8',
              maxWidth: '700px',
              marginBottom: '48px',
            }}
          >
            You have a vision for where your business needs to go. We build the software
            and cloud infrastructure to get you there.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '64px',
            }}
          >
            <a
              href="mailto:matt@digitalnorthconnect.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white',
                fontWeight: '600',
                fontSize: '16px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)';
              }}
            >
              Start Your Journey
              <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="glass-dark"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                color: 'white',
                fontWeight: '600',
                fontSize: '16px',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '';
              }}
            >
              Explore Solutions
              <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              width: '100%',
            }}
          >
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              Built with experience from
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '32px',
                opacity: 0.7,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span style={{ fontWeight: '500' }}>Enterprise Scale</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
                <span style={{ fontWeight: '500' }}>AWS Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <span style={{ fontWeight: '500' }}>Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce-subtle_2s_ease-in-out_infinite] z-20">
        <a href="#services" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};