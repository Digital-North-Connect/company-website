const services = [
  {
    id: 'software',
    title: 'Custom Software Development',
    description: 'Web apps, APIs, internal tools. We build what your business needs to run better.',
    features: [
      'React & TypeScript frontends',
      'Java backend development',
      'API design & integration',
      'Legacy system modernization',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 'cloud',
    title: 'AWS & Cloud Infrastructure',
    description: 'Cloud setup done right. Secure, scalable, and we\'ll help you keep costs under control.',
    features: [
      'AWS architecture & migration',
      'Infrastructure as Code (CDK)',
      'CI/CD pipeline setup',
      'Cost optimization',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    id: 'advisory',
    title: 'Technical Advisory',
    description: 'Need technical guidance but not ready for a full-time hire? We can help.',
    features: [
      'Technology selection',
      'Architecture reviews',
      'Team hiring support',
      'Roadmap planning',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden scroll-mt-20" style={{ paddingTop: '72px', paddingBottom: '48px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

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
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-blue-700">Our Services</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '20px',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Solutions That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Guide Your Journey
            </span></span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#475569',
              lineHeight: '1.7',
            }}
          >
            We focus on what growing businesses actually need: reliable software, solid cloud setup,
            and honest technical advice.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl border border-slate-200/80 shadow-sm ${
                index === 0 ? 'lg:row-span-1' : ''
              }`}
              style={{ padding: '32px 32px 40px 32px', transition: 'all 0.2s ease', cursor: 'default' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6`}>
                <div className="text-slate-700">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.bgGradient} flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-3 h-3 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '24px' }}>Not sure what you need? Let's figure it out together.</p>
          <a
            href="mailto:matt@digitalnorthconnect.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              fontWeight: '500',
              fontSize: '15px',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.3)';
            }}
          >
            <span>Schedule a Discovery Call</span>
            <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
