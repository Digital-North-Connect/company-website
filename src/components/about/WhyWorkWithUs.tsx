export const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30" />

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
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left - Header */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-blue-700">Why Us</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '600',
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  marginBottom: '24px',
                }}
              >
                Why{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Work With Us
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                You have options. Here's why businesses choose to work with us.
              </p>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                    You could hire a{' '}
                    <span style={{ color: '#0f172a', fontWeight: '500' }}>big agency</span>{' '}
                    and pay top dollar for junior devs while account managers handle the communication.
                    You could piece together freelancers and hope they deliver. Or you could try something different.
                  </p>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                    With us, you work{' '}
                    <span style={{ color: '#2563eb', fontWeight: '500' }}>
                      directly with experienced engineers
                    </span>
                    . No layers, no runaround. We've built real systems at real scale, and we can explain
                    technical stuff in plain English.
                  </p>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.75' }}>
                    We're not trying to maximize billable hours. We want to build something good,
                    get it working, and help your business grow. Simple as that.
                  </p>
                </div>

                {/* Comparison Cards */}
                <div style={{ marginTop: '28px', paddingTop: '28px', borderTop: '1px solid #f1f5f9' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'rgba(254, 242, 242, 0.5)', border: '1px solid rgba(254, 226, 226, 0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <svg style={{ width: '18px', height: '18px', color: '#f87171' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#b91c1c' }}>Big Agencies</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'rgba(185, 28, 28, 0.7)', lineHeight: '1.5' }}>Expensive, junior devs, lots of process</p>
                    </div>
                    <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'rgba(255, 251, 235, 0.5)', border: '1px solid rgba(254, 243, 199, 0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <svg style={{ width: '18px', height: '18px', color: '#fbbf24' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#b45309' }}>Freelancers</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'rgba(180, 83, 9, 0.7)', lineHeight: '1.5' }}>Hit or miss quality, hard to manage</p>
                    </div>
                    <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'rgba(236, 253, 245, 0.5)', border: '1px solid rgba(209, 250, 229, 0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <svg style={{ width: '18px', height: '18px', color: '#10b981' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#047857' }}>Digital North</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'rgba(4, 120, 87, 0.7)', lineHeight: '1.5' }}>Experienced, direct access, gets it done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
