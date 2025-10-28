export const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Build powerful web applications, APIs, and internal tools tailored to your business needs.',
      features: [
        'React & TypeScript frontends',
        'Java backend development',
        'API design & integration',
        'Legacy system modernization',
      ],
      icon: '💻',
    },
    {
      title: 'AWS & Cloud Infrastructure',
      description: 'Design, build, and optimize cloud infrastructure that\'s secure, scalable, and cost-effective.',
      features: [
        'AWS architecture & migration',
        'Infrastructure as Code (CDK)',
        'CI/CD pipeline setup',
        'Cost optimization',
      ],
      icon: '☁️',
    },
    {
      title: 'Technical Advisory',
      description: 'Get strategic technical guidance without hiring a full-time CTO or engineering leader.',
      features: [
        'Technology selection',
        'Architecture reviews',
        'Team hiring support',
        'Roadmap planning',
      ],
      icon: '🎯',
    },
  ];

  return (
    <section id="services" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#f8fafc' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            Solutions That Guide Your Journey
          </h2>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
            Like the North Star guides travelers, our solutions illuminate the path forward—connecting your vision to the technology that makes it real.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1280px', width: '100%' }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.1), 0 10px 25px -5px rgb(0 0 0 / 0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
                {service.title}
              </h3>
              <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6', fontSize: '15px' }}>
                {service.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'start', marginBottom: '8px' }}>
                    <svg style={{ width: '16px', height: '16px', color: '#10b981', marginRight: '10px', marginTop: '3px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: '#475569', fontSize: '14px' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
