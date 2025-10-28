export const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We learn about your business, technical challenges, and goals. 30-minute call, no commitment.',
    },
    {
      number: '2',
      title: 'Proposal',
      description: 'Within 48 hours, you\'ll receive a detailed proposal outlining the approach, timeline, and investment.',
    },
    {
      number: '3',
      title: 'Build',
      description: 'We get to work. Regular updates, iterative delivery, and clear communication throughout the project.',
    },
    {
      number: '4',
      title: 'Launch & Support',
      description: 'Deploy your solution with confidence. Ongoing support available as needed.',
    },
  ];

  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#f8fafc' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            A Clear Path Forward
          </h2>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
            No complex sales process. No surprises. We chart a straightforward course to your goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', maxWidth: '1000px', width: '100%' }}>
          {steps.map((step, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                margin: '0 auto 20px',
                width: '72px',
                height: '72px',
                background: 'linear-gradient(135deg, #10b981, #34d399)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.25), 0 8px 16px -4px rgb(0 0 0 / 0.08)',
              }}>
                <span style={{ color: 'white', fontSize: '24px', fontWeight: '600' }}>{step.number}</span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
                {step.title}
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '14px' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
