import { useState } from 'react';
import { Link } from 'react-router';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', zIndex: 50, borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
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
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
              Digital North Connect
            </span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <a href="/#services" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
              Services
            </a>
            <Link to="/about" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
              About
            </Link>
            <a href="mailto:digital.north.connect@gmail.com" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
              Contact
            </a>
          </div>

          <div className="mobile-nav-button">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#4b5563', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/#services"
              style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', padding: '8px 0' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link
              to="/about"
              style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', padding: '8px 0' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="mailto:digital.north.connect@gmail.com"
              style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none', padding: '8px 0' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
        }
        @media (min-width: 769px) {
          .mobile-nav-button { display: none; }
        }
      `}</style>
    </nav>
  );
};
