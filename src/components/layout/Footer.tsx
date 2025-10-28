export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111827', color: '#9ca3af' }}>
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(to bottom right, #2563eb, #7c3aed)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>DN</span>
              </div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                Digital North Connect
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Enterprise-grade software and cloud solutions for growing businesses.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#services" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                  Software Development
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#services" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                  Cloud Infrastructure
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#services" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                  Technical Advisory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px' }}>Connect</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="mailto:digital.north.connect@gmail.com" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                  digital.north.connect@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #374151', paddingTop: '32px', textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
          <p>&copy; {currentYear} Digital North Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
