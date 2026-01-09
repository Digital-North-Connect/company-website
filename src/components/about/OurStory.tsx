export const OurStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-700">Our Story</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '600',
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              The{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Journey
              </span>{' '}
              Behind the Mission
            </h2>
          </div>

          {/* Content Card */}
          <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-slate-200/80 shadow-sm">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-bl-[100px]" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                I started Digital North Connect because I kept seeing the same problem:{' '}
                <span style={{ color: '#0f172a', fontWeight: '500' }}>
                  growing businesses need good software
                </span>
                , but they're stuck choosing between overpriced agencies and unreliable freelancers.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                I spent years at big tech companies building systems that handle serious traffic.
                The thing is, most of what makes those systems work well isn't magic. It's just
                solid engineering practices that any business can benefit from.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                So that's what we do. We bring that same{' '}
                <span style={{ color: '#0f172a', fontWeight: '500' }}>
                  quality and attention to detail
                </span>
                {' '}to businesses that are ready to grow but don't want to deal with the typical
                headaches of software development.
              </p>
            </div>

            {/* Quote accent */}
            <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p style={{ fontSize: '1rem', color: '#334155', fontStyle: 'italic', lineHeight: '1.75' }}>
                  "I want to build things that actually help your business. That's it. That's the whole approach."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
