export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
      {/* Background */}
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
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '20px',
            }}
          >
            Ready to Navigate to Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              North Star?
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#cbd5e1',
              lineHeight: '1.7',
              marginBottom: '32px',
            }}
          >
            Let's talk about what you're building. Free 30-minute call, no strings attached.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:matt@digitalnorthconnect.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl"
            style={{ padding: '16px 32px' }}
          >
            <span>Start Your Journey</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust Note */}
          <p style={{ marginTop: '24px', fontSize: '14px', color: '#94a3b8' }}>
            No sales pitch. Just a real conversation.
          </p>
        </div>
      </div>
    </section>
  );
};
