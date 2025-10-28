export const CTASection: React.FC = () => {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
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

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px', textShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
          Ready to Navigate to Your North Star?
        </h2>
        <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '32px' }}>
          Let's connect and chart the course to your goals. Reach out today to start the conversation.
        </p>
        <a
          href="mailto:digital.north.connect@gmail.com"
          style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #10b981, #34d399)',
            color: 'white',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'none',
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.3), 0 10px 25px -5px rgb(0 0 0 / 0.25)',
            transition: 'all 0.3s',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(16, 185, 129, 0.6), 0 25px 50px -12px rgb(0 0 0 / 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4), 0 20px 40px -10px rgb(0 0 0 / 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Connect With Us
        </a>
      </div>
    </section>
  );
};
