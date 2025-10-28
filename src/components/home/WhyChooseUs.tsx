export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Enterprise Experience',
      description: 'Built with the same standards and practices used by top tech companies. Get enterprise-caliber engineering without the enterprise price tag.',
      icon: '⭐',
    },
    {
      title: 'Full-Stack Expertise',
      description: 'From frontend to backend, database to deployment, we handle the entire stack. No juggling multiple vendors or contractors.',
      icon: '🔧',
    },
    {
      title: 'Proven at Scale',
      description: 'Experience building high-traffic systems and data pipelines that handle millions of requests. Your growth won\'t outpace our solutions.',
      icon: '📈',
    },
    {
      title: 'Small Business-Focused',
      description: 'We understand the unique challenges of growing businesses. Fast execution, flexible engagement models, and transparent pricing.',
      icon: '🎯',
    },
  ];

  return (
    <section id="about" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            Your Trusted Navigation Partner
          </h2>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
            We bring enterprise-level expertise to help growing businesses navigate complex technical decisions with confidence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', maxWidth: '1024px', width: '100%' }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.08), 0 10px 25px -5px rgb(0 0 0 / 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '32px', flexShrink: 0, lineHeight: 1 }}>{benefit.icon}</div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
